import "./css/styles.css";
import "./images/turing-logo.png";
import "./images/water-bottle.png";
import "./images/sleep.png";
import "./images/walk.png";
import "./images/friends.png";
import "./images/fitlit-logo.png";
import "./images/user.png";
import "./images/post.png";
import "./images/water-drop.png";
import "./images/moon.png";
import "./images/parade.png"

import { fetchAll } from "./apiCalls.js";

import UserRepository from "./UserRepository";
import User from "./User";
import Hydration from "./Hydration";
import Sleep from "./Sleep";
import Activity from "./Activity"

//Global variables//
let userData, sleepData, activityData, hydrationData;

//Query selectors//
const welcomeMessage = document.querySelector("h2");
const todaysDateDisplay = document.querySelector(".todays-date");
const accountInfo = document.querySelector("#accountInfo");
const openProfileButton = document.querySelector(".profile-button");
const closeProfileButton = document.querySelector(".close-profile-button");
const waterButton = document.querySelector(".water-button");
const bedButton = document.querySelector(".bed-button");
const weeklyHydrationDisplay = document.querySelector(".weekly-hydration-display");
const weeklySleepDisplay = document.querySelector(".weekly-sleep-display");
const allTimeSleepHoursDisplay = document.querySelector(".all-time-hours")
const allTimeSleepQualityDisplay = document.querySelector(".all-time-quality")
const activityDisplay = document.querySelector(".activity-display")
const dailyNumStepsDisplay = document.querySelector(".daily-num-steps")
const dailyNumMinsDisplay = document.querySelector(".daily-num-mins")
const dailyDistanceDisplay = document.querySelector(".daily-distance")
const dailyHydrationDisplay = document.querySelector(".daily-hydration-text");
const dailySleepDisplay = document.querySelector(".daily-sleep-text");
const compareSteps = document.querySelector(".compare-steps");
const minsFlightsDisplay = document.querySelector(".compare-mins-and-flights")
const stride = document.querySelector(".stride-length")

//Event listeners//
window.addEventListener("load", (event) => {
  loadData();
});

openProfileButton.addEventListener("click", (event) => {
  overlay.style.display = "block";
});

closeProfileButton.addEventListener("click", (event) => {
  overlay.style.display = "none";
});

waterButton.addEventListener("click", (event) => {
  showWeeklyHydrationDataPanel();
});

bedButton.addEventListener("click", (event) => {
  showWeeklySleepDataPanel();
});

//Functions//
const loadData = () => {
  fetchAll().then((data) => {
    userData = data[0];
    sleepData = data[1];
    activityData = data[2];
    hydrationData = data[3];
    const userRepository = new UserRepository(userData.userData);
    const randomUserData = userRepository.userData[Math.floor(Math.random() * userRepository.userData.length)];
    const singleHydration = new Hydration(hydrationData.hydrationData,randomUserData.id);
    const singleSleep = new Sleep(sleepData.sleepData, randomUserData.id);
    const singleActivity = new Activity(activityData.activityData, randomUserData.id);
    const randomUser = new User(randomUserData, singleHydration, singleSleep, singleActivity);
    beginApplication(randomUser, userRepository);
  }).catch((error) => console.log(`There has been an error! ${error}`));
};

const beginApplication = (user, repository) => {
  displayTodaysDate(user);
  generateWelcomeMessage(user);
  displayAccountInfo(user, repository);
  displayWeeklyHydration(user);
  displayWeeklySleep(user);
  displayDailyHydration(user);
  displayDailySleep(user);
  displayComparisons(user, repository);
  displayAllTimeSleepData(user);
};

const displayTodaysDate = (user) => {
  const recentDate = user.hydrationData.hydrationData.at(-1);
  todaysDateDisplay.innerText = `Today Is: ${dayjs(
    new Date(recentDate.date)).format("dddd, MMMM D, YYYY")}`;
};

const generateWelcomeMessage = (user) => {
  welcomeMessage.innerText = `Welcome back, ${user.returnUserFirstName()}!`;
};

const formatFriendNames = (user, repository) => {
  const friendNames = user.returnFriendName(repository.userData);
  const formattedFriends = friendNames.join(", ");
  return formattedFriends;
};

const displayAccountInfo = (user, repository) => {
  accountInfo.innerHTML = `<b>Your Account Info</b> <br><br> ${user.name} <br><br> ${user.email} <br><br>
  ${user.address} <br><br> Your Friends Are: <br> ${formatFriendNames(user,repository)}`;
};

const displayWeeklyHydration = (user) => {
  const firstDate = user.hydrationData.hydrationData.at(-7);
  const weeklyData = user.hydrationData.getPastWeekDailyOunces(firstDate.date);
  const chart = document.querySelector("#myHChart").getContext("2d");
  let gradient = chart.createLinearGradient(0, 0, 0, 400);
  gradient.addColorStop(0, "rgba(58,123,213,1");
  gradient.addColorStop(1, "rgba(0,210,255,0.3");
  const labels = ['Day 1','Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', "Day 7",];
  const data = {
    labels: labels,
    datasets: [{
      label: 'Water in oz.',
      data: weeklyData,
      fill: true,
      backgroundColor: gradient,
      borderColor: "#fff",
      pointBackgroundColor: "rgb(189, 195, 199)",
   }]
};
  const config = {
    type: 'line',
    data: data,
    options: {
      radius: 5,
      hitRadius: 30,
      hoverRadius: 12,
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: "Ounces of Water Consumed in Past 7 Days",
        },
      },
    },
  };
  const myHChart = new Chart(chart, config);
};

const displayWeeklySleep = (user) => {
  const firstDate = user.sleepData.sleepData.at(-7);
  const weeklyQualityData = user.sleepData.getPastWeekNightlyQuality(firstDate.date);
  const weeklyHourlyData = user.sleepData.getPastWeekNightlyHours(firstDate.date);
  const allTimeSleepHours = user.sleepData.calculateAverageHoursSlept();
  const allTimeSleepQuality = user.sleepData.calculateAverageSleepQuality();
  const chart = document.querySelector("#mySChart").getContext("2d");
  const labels = ['Day 1','Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', "Day 7",];
  const data = {
    labels: labels,
    datasets: [{
      label: 'Hours Slept',
      data: weeklyHourlyData,
      fill: true,
      backgroundColor: "#97EBF4",
      borderColor: "#fff",
      pointBackgroundColor: "rgb(189, 195, 199)",
    },
    {
      label: 'Quality of Sleep',
      data: weeklyQualityData,
      fill: true,
      backgroundColor: "#ABE098",
      borderColor: "#000",
      pointBackgroundColor: "rgba(119, 198, 110)",
    }]
  };
  const config = {
    type: 'bar',
    data: data,
    options: {
      radius: 5,
      hitRadius: 30,
      hoverRadius: 12,
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: "Sleep Data for Past 7 Days",
        },
      },
    },
  };
  const mySChart = new Chart(chart, config)
};

const displayAllTimeSleepData = (user) => {
  allTimeSleepHoursDisplay.innerHTML = `Your all-time average number of hours slept is<br><br> <b>${user.sleepData.calculateAverageHoursSlept()}</b>`
  allTimeSleepQualityDisplay.innerHTML = `Your all-time average sleep quality is<br><br> <b>${user.sleepData.calculateAverageSleepQuality()}/5</b>`;
};

const displayDailyHydration = (user) => {
  const recentDate = user.hydrationData.hydrationData.at(-1);
  dailyHydrationDisplay.innerHTML = `You consumed <b>${user.hydrationData.returnDailyOunces(recentDate.date)}</b> of water today.`;
};

const displayDailySleep = (user) => {
  const recentDate = user.sleepData.sleepData.at(-1);
  dailySleepDisplay.innerHTML = `You slept <b>${user.sleepData.returnNightlyHoursSlept(recentDate.date)}</b>. <br><br> Your sleep quality was <b>${user.sleepData.returnNightlySleepQuality(recentDate.date)}/5</b>.`;
};

const showWeeklyHydrationDataPanel = () => {
  weeklyHydrationDisplay.classList.remove("hidden");
  weeklySleepDisplay.classList.add("hidden");
};

const showWeeklySleepDataPanel = () => {
  weeklyHydrationDisplay.classList.add("hidden");
  weeklySleepDisplay.classList.remove("hidden");
};

const displayComparisons = (user, repository) => {
  const recentDate = user.hydrationData.hydrationData.at(-1);
  const activityObj = user.activityData.calculateActivityAverages(recentDate.date)
  compareSteps.innerHTML = `All users’ daily step goals average:  <b>${repository.calculateAverageStepGoals()} steps</b>. <br>
  Your daily step goal: <b>${user.dailyStepGoal} steps</b>. <br><br>All users’ step counts average today: <b>${activityObj.allUsersNumSteps} steps</b>.<br>Your step count today: <b>${user.activityData.returnDailySteps(recentDate.date)} steps</b>.`;
  minsFlightsDisplay.innerHTML = `All users’ active minutes average today:<b>${activityObj.allUsersMinsActive} mins</b>.<br>Your active minutes today: <b>${user.activityData.returnDailyActiveMins(recentDate.date)}</b><br><br>All users’ flights of stairs climbed average today: <b>${activityObj.allUsersFlightsStairs} flights</b>.<br>Your flights of stairs climbed today: <b>${user.activityData.returnDailyFlights(recentDate.date)} flights</b>.`
  stride.innerHTML = `Your distance walked today: <b>${user.activityData.returnDailyMilesWalked(recentDate.date, user)}</b><br>Your stride length is: <b>${user.strideLength} feet.</b>`
};
