import "./css/styles.css";
import "./images/turing-logo.png";
import userData from "./data/users";

import UserRepository from "./UserRepository";
import User from "./User";

const userRepository = new UserRepository(userData);
const user = new User(userRepository.getUserData(33));
const randomUser = new User(
  userData[Math.floor(Math.random() * userData.length)]
);
console.log(randomUser);

const welcomeMessage = document.querySelector("h2");
const openProfileButton = document.querySelector(".profile-button");
const closeProfileButton = document.querySelector(".close-profile-button");
const stepGoalDisplay = document.querySelector("#stepGoals");
const accountInfo = document.querySelector("#accountInfo");

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

window.addEventListener("load", (event) => {
  generateWelcomeMessage();
  displayStepGoal();
});

openProfileButton.addEventListener("click", (event) => {
  overlay.style.display = "block";
  displayAccountInfo();
});

closeProfileButton.addEventListener("click", (event) => {
  overlay.style.display = "none";
});
