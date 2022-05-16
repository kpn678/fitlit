class User {
    constructor(singleUserData) {
        this.id = singleUserData.id;
        this.name = singleUserData.name;
        this.address = singleUserData.address;
        this.email = singleUserData.email;
        this.strideLength = singleUserData.strideLength;
        this.dailyStepGoal = singleUserData.dailyStepGoal;
        this.friends = singleUserData.friends;


    }

    returnUserFirstName() {
        const splitName = this.name.split(" ");
        return splitName[0];
      }
}




export default User;