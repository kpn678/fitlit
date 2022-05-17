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

const generateWelcomeMessage = () => {
  welcomeMessage.innerText = `Welcome, ${randomUser.returnUserFirstName()}`;
};

window.addEventListener('load', (event) => {
  generateWelcomeMessage();
});

// userData is an array of objects
// userRepository is an object with all of the users in an array
