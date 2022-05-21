import "./css/styles.css";
import "./images/turing-logo.png";
import "./images/water-bottle.png";
import "./images/sleep.png";
import "./images/walk.png";
import "./images/friends.png";
import "./images/fitlit-logo.png";
import "./images/user.png";
import "./images/post.png";

import { fetchAll } from "./apiCalls.js";

import UserRepository from "./UserRepository";
import User from "./User";
import Hydration from "./Hydration";
import Sleep from "./Sleep";

//Gloabal variables//
let userData, sleepData, activityData, hydrationData;

//Query selectors//
const welcomeMessage = document.querySelector("h2");
const openProfileButton = document.querySelector(".profile-button");
const closeProfileButton = document.querySelector(".close-profile-button");
const stepGoalDisplay = document.querySelector("#stepGoals");
const accountInfo = document.querySelector("#accountInfo");
const dailyHydrationDisplay = document.querySelector('.daily-hydration-display');
const todaysDateCalendarDisplay = document.querySelector('.calendar');
const todaysDateDisplay = document.querySelector('.todays-date');

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

//Functions//
const loadData = () => {
  fetchAll().then((data) => {
    userData = data[0];
    sleepData = data[1];
    activityData = data[2];
    hydrationData = data[3];
    const userRepository = new UserRepository(userData.userData);
    const randomUserData = userRepository.userData[Math.floor(Math.random() * userRepository.userData.length)];
    const singleHydration = new Hydration(hydrationData.hydrationData, randomUserData.id);
    const singleSleep = new Sleep(sleepData.sleepData, randomUserData.id);
    const randomUser = new User(randomUserData, singleHydration, singleSleep);
    console.log(randomUser);
    beginApplication(randomUser, userRepository);
  });
};

const beginApplication = (user, repository) => {
  displayTodaysDate();
  generateWelcomeMessage(user);
  displayAccountInfo(user, repository);
  displayStepGoal(user, repository);
  displayDailyHydration(user);
};

const displayTodaysDate = () => {
  todaysDateDisplay.innerText = `Today's Date: ${dayjs(new Date()).format('dddd, MMMM D, YYYY')}`;
}

const generateWelcomeMessage = (user) => {
  welcomeMessage.innerText = `Welcome back, ${user.returnUserFirstName()}!`;
};

const displayAccountInfo = (user, repository) => {
  accountInfo.innerHTML = `Your Account Info <br><br> ${user.name} <br><br> ${user.email} <br><br>
  ${user.address} <br><br> Your Friends Are: <br> ${user.returnFriendName(repository.userData)}`;
};

const displayStepGoal = (user, repository) => {
  stepGoalDisplay.innerHTML = `The average of all our users' daily step goals is: ${repository.calculateAverageStepGoals()} steps. <br>
  Your daily step goal is: ${user.dailyStepGoal} steps. <br>
  Your stride length is: ${user.strideLength} feet.`;
};

const displayDailyHydration = (user) => {
  let recentDate = '2020/01/22';
  dailyHydrationDisplay.innerHTML = `You consumed ${user.hydrationData.returnDailyOunces(recentDate)} of water today.`
}
