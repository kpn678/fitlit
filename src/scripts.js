import './css/styles.css';
import './images/turing-logo.png'
import userData from './data/users';

import UserRepository from './UserRepository';
import User from './User';

const userRepository = new UserRepository(userData);

const welcomeMessage = document.querySelector('h2');
const user = new User(userRepository.userData[22]);

const generateWelcomeMessage = () => {
  console.log(userRepository);
  console.log(user);
  welcomeMessage.innerText = `Welcome, ${user.returnUserFirstName()}`;
};

window.addEventListener('load', (event) => {
  generateWelcomeMessage();
});
