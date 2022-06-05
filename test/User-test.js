import { expect } from "chai";
import UserRepository from "../src/UserRepository";
import User from "../src/User";
import Hydration from "../src/Hydration";
import Sleep from "../src/Sleep";
import Activity from "../src/Activity";
import { userData } from "../src/sampleData/user-sample-data";
import { hydrationData } from "../src/sampleData/hydration-sample-data";
import { sleepData } from "../src/sampleData/sleep-sample-data";
import { activityData } from "../src/sampleData/activity-sample-data";

describe("User", () => {
  let  user31, user32, user33, userRepository, hydration, sleep, activity;

  beforeEach(() => {
    user31 = new User(userData[0]);
    user32 = new User(userData[1]);
    user33 = new User(userData[2], hydration, sleep, activity);

    userRepository = new UserRepository(userData);
    hydration = new Hydration(hydrationData, 33);
    sleep = new Sleep(sleepData, 33);
    activity = new Activity(activityData, 33)
  });

  it("should be a function", () => {
    expect(User).to.be.a("function");
  });

  it("should be an instance of User", () => {
    expect(user33).to.be.an.instanceof(User);
  });

  it("should represent a single user's data", () => {
    expect(user33.id).to.deep.equal(33);
    expect(user33.email).to.equal("Trinity_Rowe@hotmail..com");
    expect(user33.strideLength).to.equal(3.5);
    expect(user33.dailyStepGoal).to.equal(5000);
    expect(user33.friends).to.deep.equal([]);
  });

  it("should be able to store a user's hydration data", () => {
    expect(user33.hydrationData).to.deep.equal(hydration);
  });

  it("should be able to store a user's sleep data", () => {
    expect(user33.sleepData).to.deep.equal(sleep);
  });

  it("should be able to store a user's activity data", () => {
    expect(user33.activityData).to.deep.equal(activity);
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
