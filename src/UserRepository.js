class UserRepository {
  constructor(userData) {
    this.userData = userData;
  }
  getUserData(id) {
    const singleUserData = this.userData.find((datum) => {
      datum.id === id;
      return datum;
    });
    return singleUserData;
  }
}

export default UserRepository;

// It should have methods to determine:
// Given a user’s ID, what is their user data?
// The average step goal amongst all users
