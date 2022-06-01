import { expect } from "chai";
import UserRepository from "../src/UserRepository";
import User from "../src/User";
import Hydration from "../src/Hydration";
import Sleep from "../src/Sleep";

describe("User", () => {
  let user1, user2, user3, user31, user32, user33, hydrationData, sleepData, userData, userRepository, hydration, sleep;

  beforeEach(() => {
    user1 = {
      id: 31,
      name: "Bert Yund",
      address: "0032 Claudia Plain, Delfinaland RI 22298-3685",
      email: "Sibyl.Schmidt39@yahoo.com",
      strideLength: 3.4,
      dailyStepGoal: 7000,
      friends: [32, 33],
    };
    user2 = {
      id: 32,
      name: undefined,
      address: "408 Windler Camp, Eddietown MA 11960",
      email: "Nikolas.Brakus31@yahoo.com",
      strideLength: 4.3,
      dailyStepGoal: 3000,
      friends: [31, 32],
    };
    user3 = {
      id: 33,
      name: "Lani Quitt",
      address: "60013 Golden Overpass, Lake Dejon WI 77309-0820",
      email: "Trinity_Rowe@hotmail..com",
      strideLength: 3.5,
      dailyStepGoal: 5000,
      friends: [],
    };

    hydrationData = [
      {
        userID: 32,
        date: "2019/06/15",
        numOunces: 51,
      },
      {
        userID: 33,
        date: "2019/06/16",
        numOunces: 89,
      },
      {
        userID: 33,
        date: "2019/06/17",
        numOunces: 23,
      },
    ];

    sleepData = [
      {
        userID: 33,
        date: "2019/06/15",
        hoursSlept: 9.5,
        sleepQuality: 4.2,
      },
      {
        userID: 33,
        date: "2019/06/16",
        hoursSlept: 10.1,
        sleepQuality: 3.8,
      },
      {
        userID: 32,
        date: "2019/06/16",
        hoursSlept: 7,
        sleepQuality: 4.8,
      },
      {
        userID: 32,
        date: "2019/06/17",
        hoursSlept: 9.1,
        sleepQuality: 1.9,
      },
    ];

    user31 = new User(user1);
    user32 = new User(user2);
    user33 = new User(user3, hydration, sleep);
    userData = [user1, user2, user3];
    userRepository = new UserRepository(userData);
    hydration = new Hydration(hydrationData, 33);
    sleep = new Sleep(sleepData, 33);
  });

  it("should be a function", () => {
    expect(User).to.be.a("function");
  });

  it("should be an instance of User", () => {
    expect(user33).to.be.an.instanceof(User);
  });

  it.skip("should represent a single user's data", () => {
    expect(user33).to.deep.equal({
      id: 33,
      name: "Lani Quitt",
      address: "60013 Golden Overpass, Lake Dejon WI 77309-0820",
      email: "Trinity_Rowe@hotmail..com",
      strideLength: 3.5,
      dailyStepGoal: 5000,
      friends: [],
      hydrationData: {
        hydrationData: [
          {
            userID: 33,
            date: "2019/06/16",
            numOunces: 89,
          },
          {
            userID: 33,
            date: "2019/06/17",
            numOunces: 23,
          },
        ],
        userID: 33,
      },
      sleepData: {
        allUserSleepData:[
          {
            userID: 33,
            date: "2019/06/15",
            hoursSlept: 9.5,
            sleepQuality: 4.2,
          },
          {
            userID: 33,
            date: "2019/06/16",
            hoursSlept: 10.1,
            sleepQuality: 3.8,
          },
          {
            userID: 32,
            date: "2019/06/16",
            hoursSlept: 7,
            sleepQuality: 4.8,
          },
          {
            userID: 32,
            date: "2019/06/17",
            hoursSlept: 9.1,
            sleepQuality: 1.9,
          },
      ],

        sleepData: [
          {
            userID: 33,
            date: "2019/06/15",
            hoursSlept: 9.5,
            sleepQuality: 4.2,
          },
          {
            userID: 33,
            date: "2019/06/16",
            hoursSlept: 10.1,
            sleepQuality: 3.8,
          },
        ],
        userID: 33,
      },
    });
  });

  it("should be able to store a user's hydration data", () => {
    expect(user33.hydrationData).to.deep.equal(hydration);
  });

  it("should be able to store a user's sleep data", () => {
    expect(user33.sleepData).to.deep.equal(sleep);
  });

  it("should be able to return a user's first name", () => {
    expect(user33.returnUserFirstName()).to.equal("Lani");
  });

  it("should be able to return a message if a user has no first name", () => {
    expect(user32.returnUserFirstName()).to.equal("Oops it looks like your name is missing from our database");
  });

  it("should be able to return a list of friends' names", () => {
    expect(user31.returnFriendName(userData)).to.deep.equal([
      undefined,
      "Lani Quitt",
    ]);
  });

  it("should be able to return a message if a user has no friends", () => {
    expect(user33.friends).to.deep.equal([]);
    expect(user33.returnFriendName(userData)).to.equal("You haven't added any friends yet!");
  });
});
