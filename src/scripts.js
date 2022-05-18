import "./css/styles.css";
import "./images/turing-logo.png";
// import userData from "./data/users";
import {
  apiCalls,
  fetchData,
  fetchAll,
  apiUserData,
  apiSleepData,
  apiActivityData,
  apiHydrationData,
} from "./apiCalls.js";

import UserRepository from "./UserRepository";
import User from "./User";

//Gloabal variables//
let userData, sleepData, activityData, hydrationData;

// const userRepository = new UserRepository(userData);
// const user = new User(userRepository.getUserData(33));
// **** //
// console.log("before");
// const randomUser = new User(
//   userData[Math.floor(Math.random() * userData.length)]
// );
// console.log(randomUser);

const welcomeMessage = document.querySelector("h2");
const openProfileButton = document.querySelector(".profile-button");
const closeProfileButton = document.querySelector(".close-profile-button");
const stepGoalDisplay = document.querySelector("#stepGoals");
const accountInfo = document.querySelector("#accountInfo");

window.addEventListener("load", (event) => {
  console.log("window");
  loadData();
});

const loadData = () => {
  fetchAll().then((data) => {
    console.log(data);
    userData = apiUserData.userData;
    sleepData = apiSleepData.sleepData;
    activityData = apiActivityData.activityData;
    hydrationData = apiHydrationData.hydration;
    beginApplication();
  });
};

const beginApplication = () => {
  generateWelcomeMessage();
  displayStepGoal();
};

const generateWelcomeMessage = () => {
  welcomeMessage.innerText = `Welcome back, ${randomUser.returnUserFirstName()}!`;
};

const displayStepGoal = () => {
  stepGoalDisplay.innerHTML = `The average of all our users' daily step goals is: ${userRepository.calculateAverageStepGoals()} steps. <br> Your daily step goal is: ${
    randomUser.dailyStepGoal
  } steps. <br> Your stride length is: ${randomUser.strideLength} feet.`;
};

const displayAccountInfo = () => {
  accountInfo.innerHTML = `Your Account Info <br><br> ${
    randomUser.name
  } <br><br> ${randomUser.email} <br><br> ${
    randomUser.address
  } <br><br> Your Friends Are: ${randomUser.returnFriendName(
    userRepository.userData
  )}`;
};

openProfileButton.addEventListener("click", (event) => {
  overlay.style.display = "block";
  displayAccountInfo();
});

closeProfileButton.addEventListener("click", (event) => {
  overlay.style.display = "none";
});
