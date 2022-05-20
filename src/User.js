class User {
  constructor(singleUserData, hydrationData) {
    this.id = singleUserData.id;
    this.name = singleUserData.name;
    this.address = singleUserData.address;
    this.email = singleUserData.email;
    this.strideLength = singleUserData.strideLength;
    this.dailyStepGoal = singleUserData.dailyStepGoal;
    this.friends = singleUserData.friends;
    this.hydrationData = hydrationData;
   
  };
  returnUserFirstName() {
    const splitName = this.name.split(" ");
    return splitName[0];
  };
  returnFriendName(userRepository) {
    let friendNames = [];
    this.friends.forEach(friend => {
      userRepository.forEach(user => {
        if (user.id === friend) {
          friendNames.push(user.name);
        };
      });
    });
    return friendNames;
  };
};

export default User;
