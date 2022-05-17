import './css/styles.css';
import './images/turing-logo.png'
import userData from './data/users';

import UserRepository from './UserRepository';
import User from './User';

const userRepository = new UserRepository(userData);
const user = new User(userRepository.getUserData(33));
const randomUser = new User(userData[Math.floor(Math.random() * userData.length)]);
console.log(randomUser);

const welcomeMessage = document.querySelector('h2');
const stepGoalDisplay = document.querySelector('p');

const generateWelcomeMessage = () => {
  welcomeMessage.innerText = `Welcome, ${randomUser.returnUserFirstName()}`;
};

const displayStepGoal = () => {
  stepGoalDisplay.innerHTML = `The average of all our users' daily step goal is: ${userRepository.calculateAverageStepGoals()} steps. <br> Your daily step goal is: ${randomUser.dailyStepGoal} steps.`
};

window.addEventListener('load', (event) => {
  generateWelcomeMessage();
  displayStepGoal();
});

// userData is an array of objects
// userRepository is an object with all of the users in an array

console.log("Single User Step Goal:", randomUser.dailyStepGoal);
console.log("All Users' Average Step Goals:", userRepository.calculateAverageStepGoals());
