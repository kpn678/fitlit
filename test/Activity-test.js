import { expect } from "chai";
import User from "../src/User";
import Activity from "../src/Activity";
import { activityData, singleUserData31, singleUserData32, singleUserData33 } from "../src/sampleData/activity-sample-data";

describe("Activity", () => {
  let user31, user32, user33, activity31, activity32, activity33;

  beforeEach(() => {
    user31 = new User(singleUserData31, activityData);
    user32 = new User(singleUserData32, activityData);
    user33 = new User(singleUserData33, activityData);

    activity31 = new Activity(activityData, 31)
    activity32 = new Activity(activityData, 32);
    activity33 = new Activity(activityData, 33);
  });

  it("should be a function", () => {
    expect(Activity).to.be.a("function");
  });

  it("should be an instance of Activity", () => {
    expect(activity31).to.be.an.instanceof(Activity);
  });

  it("should gather information based on the user's id", () => {
    expect(activity31.userID).to.equal(31);
  });

  it("should only store this specific user's information based on the user's id", () => {
    expect(activity32.activityData).to.deep.equal(
      [
        {
          userID: 32,
          date: "2019/06/16",
          numSteps: 14283,
          minutesActive: 264,
          flightsOfStairs: 22,
        },
        {
          userID: 32,
          date: "2019/06/17",
          numSteps: 8183,
          minutesActive: 85,
          flightsOfStairs: 3,
        },
        {
          userID: 32,
          date: "2019/06/18",
          numSteps: 14745,
          minutesActive: 227,
          flightsOfStairs: 5,
        },
        {
          userID: 32,
          date: "2019/06/19",
          numSteps: 2426,
          minutesActive: 137,
          flightsOfStairs: 47,
        },
        {
          userID: 32,
          date: "2019/06/20",
          numSteps: 8071,
          minutesActive: 203,
          flightsOfStairs: 42,
        },
        {
          userID: 32,
          date: "2019/06/21",
          numSteps: 8913,
          minutesActive: 105,
          flightsOfStairs: 39,
        },
        {
          userID: 32,
          date: "2019/06/22",
          numSteps: 14410,
          minutesActive: 276,
          flightsOfStairs: 28,
        },
        {
          userID: 32,
          date: "2019/06/23",
          numSteps: 9104,
          minutesActive: 300,
          flightsOfStairs: 30,
        }
      ]
    );
  });

  it ("should be able to return how much a user has walked in miles", () => {
    expect(activity32.returnDailyMilesWalked("2019/06/23", user32)).to.equal("7.41 miles");
  });

  it("should be able to return 0 miles if a user has no information for that day", () => {
      expect(activity33.returnDailyMilesWalked("2019/06/23", user33)).to.equal("0.00 miles");
  });

  it("should be able to return how many steps a user has taken in a day", () => {
    expect(activity32.returnDailySteps("2019/06/23")).to.equal(9104);
  });

  it("should be able to return 0 if a user has no steps information for that day", () => {
    expect(activity33.returnDailySteps("2019/06/23")).to.equal(0);
  });

  it("should be able to return a user's active minutes in a day", () => {
    expect(activity32.returnDailyActiveMins("2019/06/23")).to.equal("300 mins.");
  });

  it("should be able to return 0 mins if a user has no active minutes information for that day", () => {
    expect(activity33.returnDailyActiveMins("2019/06/23")).to.equal("0 mins.");
  });

  it("should be able to calculate a user's weekly active time in minutes", () => {
    expect(activity32.calculateWeeklyActiveMins("2019/06/16")).to.equal(185);
  });

  it("should be able to determine if a user has reached their step goal for a given day", () => {
    expect(activity31.determineIfStepGoalMet("2019/06/23", user31)).to.equal(true);
    expect(activity33.determineIfStepGoalMet("2019/06/23", user33)).to.equal(false);
  });

  it("should return a list of days where the user has met their step goal", () => {
    expect(activity32.returnAllDaysStepGoalMet(user32)).to.deep.equal(["2019/06/16", "2019/06/17", "2019/06/18", "2019/06/20", "2019/06/21", "2019/06/22", "2019/06/23"]);
  });

  it("should be able to return how many flights of stairs a user has climbed in a day", () => {
    expect(activity32.returnDailyFlights("2019/06/23")).to.equal(30);
  });

  it("should be able to return 0 if a user has no flights information for that day", () => {
    expect(activity33.returnDailyFlights("2019/06/23")).to.equal(0);
  });

  it("should be able to find a user's all-time stair climbing record", () => {
    expect(activity31.findAllTimeStairRecord()).to.deep.equal("Your all-time best climb was 48 flights of stairs.");
  });

  it("should be able to calculate the average number of: stairs climbed, steps taken, and minutes active for a specified date for ALL users", () => {
    expect(activity31.calculateActivityAverages("2019/06/19")).to.deep.equal({ allUsersNumSteps: 5890, allUsersMinsActive: 143, allUsersFlightsStairs: 41});
  });
});
