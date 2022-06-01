class User {
  constructor(singleUserData, hydrationData, sleepData, activityData) {
    this.id = singleUserData.id;
    this.name = singleUserData.name;
    this.address = singleUserData.address;
    this.email = singleUserData.email;
    this.strideLength = singleUserData.strideLength;
    this.dailyStepGoal = singleUserData.dailyStepGoal;
    this.friends = singleUserData.friends;
    this.hydrationData = hydrationData;
    this.sleepData = sleepData;
    this.activityData = activityData;
  };
  returnUserFirstName() {
    if (this.name === undefined) {
      return "Oops it looks like your name is missing from our database";
    } else {
      const splitName = this.name.split(" ");
      return splitName[0];
    };
  };
  returnFriendName(userRepository) {
    if (this.friends.length === 0) {
      return "You haven't added any friends yet!";
    } else {
      let friendNames = [];
      this.friends.forEach((friend) => {
        userRepository.forEach((user) => {
          if (user.id === friend) {
            friendNames.push(user.name);
          };
        });
      });
      return friendNames;
    };
  };
};

export default User;
