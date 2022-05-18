import "./css/styles.css";
import "./images/turing-logo.png";
// import userData from "./data/users";
import { fetchAll } from "./apiCalls.js";

import UserRepository from "./UserRepository";
import User from "./User";

//Gloabal variables//
let userData, sleepData, activityData, hydrationData;

// const userRepository = new UserRepository(userData);
// const user = new User(userRepository.getUserData(33));
//**** //
// console.log("before");
// const randomUser = new User(
//   userData[Math.floor(Math.random() * userData.length)]
// );

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
    console.log(data[0]);
    userData = data[0];
    sleepData = data[1];
    activityData = data[2];
    hydrationData = data[3];
    const userRepository = new UserRepository(userData.userData);
    console.log(userRepository);
    const randomUser = new User(
      userRepository.userData[
        Math.floor(Math.random() * userRepository.userData.length)
      ]
    );
    // console.log(randomUser);
    beginApplication(randomUser, userRepository);
  });
};

const beginApplication = (user, repository) => {
  generateWelcomeMessage(user);
  displayStepGoal(user, repository);
};

const generateWelcomeMessage = (user) => {
  welcomeMessage.innerText = `Welcome back, ${user.returnUserFirstName()}!`;
};

const displayStepGoal = (user, repository) => {
  stepGoalDisplay.innerHTML = `The average of all our users' daily step goals is: ${repository.calculateAverageStepGoals()} steps. <br> Your daily step goal is: ${
    user.dailyStepGoal
  } steps. <br> Your stride length is: ${user.strideLength} feet.`;
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
