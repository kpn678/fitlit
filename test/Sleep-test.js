import { expect } from "chai";
import User from "../src/User";
import Sleep from "../src/Sleep";

describe("Sleep", () => {
  let sleep31,
    sleep32,
    sleep33,
    sleepData,
    singleUserData33,
    singleUserData32,
    singleUserData31,
    user31,
    user32,
    user33;
  beforeEach(() => {
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
        userID: 33,
        date: "2019/06/17",
        hoursSlept: 4.5,
        sleepQuality: 3.7,
      },
      {
        userID: 33,
        date: "2019/06/18",
        hoursSlept: 5.4,
        sleepQuality: 3.2,
      },
      {
        userID: 33,
        date: "2019/06/19",
        hoursSlept: 4.2,
        sleepQuality: 2.6,
      },
      {
        userID: 33,
        date: "2019/06/20",
        hoursSlept: 4,
        sleepQuality: 1.8,
      },
      {
        userID: 33,
        date: "2019/06/21",
        hoursSlept: 10.1,
        sleepQuality: 4.6,
      },
      {
        userID: 33,
        date: "2019/06/22",
        hoursSlept: 8,
        sleepQuality: 1.4,
      },
      {
        userID: 32,
        date: "2019/06/15",
        hoursSlept: 6.6,
        sleepQuality: 4.4,
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
      {
        userID: 32,
        date: "2019/06/18",
        hoursSlept: 7.7,
        sleepQuality: 2.7,
      },
      {
        userID: 31,
        date: "2019/06/15",
        hoursSlept: 5,
        sleepQuality: 3.6,
      },
      {
        userID: 31,
        date: "2019/06/16",
        hoursSlept: 9.7,
        sleepQuality: 1.5,
      },
      {
        userID: 31,
        date: "2019/06/17",
        hoursSlept: 9.8,
        sleepQuality: 1.4,
      },
      {
        userID: 31,
        date: "2019/06/18",
        hoursSlept: 7.6,
        sleepQuality: 4.9,
      },
    ];

    singleUserData33 = {
      id: 33,
      name: "Leilani Quitzon",
      address: "60013 Golden Overpass, Lake Dejon WI 77309-0820",
      email: "Trinity_Rowe@hotmail.com",
      strideLength: 3.5,
      dailyStepGoal: 8000,
      friends: [4, 18, 36, 30],
    };

    singleUserData32 = {
      id: 32,
      name: "Carrie Smith",
      address: "408 Windler Camp, Eddietown MA 11960",
      email: "Nikolas.Brakus31@yahoo.com",
      strideLength: 4.3,
      dailyStepGoal: 3000,
      friends: [47, 33],
    };

    singleUserData31 = {
      id: 31,
      name: "Bertrand Yundt",
      address: "0032 Claudia Plain, Delfinaland RI 22298-3685",
      email: "Sibyl.Schmidt39@yahoo.com",
      strideLength: 3.4,
      dailyStepGoal: 7000,
      friends: [16, 41, 9],
    };
    user31 = new User(singleUserData31);
    user32 = new User(singleUserData32);
    user33 = new User(singleUserData33);
    sleep31 = new Sleep(sleepData, 31);
    sleep32 = new Sleep(sleepData, 32);
    sleep33 = new Sleep(sleepData, 33);
  });

  it("should be a function", () => {
    expect(Sleep).to.be.a("function");
  });

  it("should be an instance of Sleep", () => {
    expect(sleep32).to.be.an.instanceof(Sleep);
  });

  it("should gather information based on the user's id", () => {
    expect(sleep32.userID).to.equal(32);
  });

  it("should only store this specific user's information based on the user's id", () => {
    expect(sleep32.sleepData).to.deep.equal([
      {
        userID: 32,
        date: "2019/06/15",
        hoursSlept: 6.6,
        sleepQuality: 4.4,
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
      {
        userID: 32,
        date: "2019/06/18",
        hoursSlept: 7.7,
        sleepQuality: 2.7,
      },
    ]);
  });

  it("should be able to calculate the average number of hours slept per night for all time", () => {
    expect(sleep32.calculateAverageHoursSlept()).to.equal("7.6 hours");
  });

  it("should be able to calculate the average sleep quality per night for all time", () => {
    expect(sleep32.calculateAverageSleepQuality()).to.equal("3.5");
  });

  it("should be able to return how many hours they slept for a specific night", () => {
    expect(sleep33.returnNightlyHoursSlept("2019/06/16")).to.equal(
      "10.1 hours"
    );
    expect(sleep33.returnNightlyHoursSlept("2019/06/15")).to.equal("9.5 hours");
    expect(sleep32.returnNightlyHoursSlept("2019/06/18")).to.equal("7.7 hours");
  });

  it("should be able to return the sleep quality for a specific night", () => {
    expect(sleep33.returnNightlySleepQuality("2019/06/16")).to.equal(3.8);
    expect(sleep33.returnNightlySleepQuality("2019/06/15")).to.equal(4.2);
    expect(sleep32.returnNightlySleepQuality("2019/06/18")).to.equal(2.7);
  });

  it("should be able to return the hours slept each night over the course of any given week", () => {
    expect(sleep33.getPastWeekNightlyHours("2019/06/15")).to.deep.equal([
      9.5,
      10.1,
      4.5,
      5.4,
      4.2,
      4,
      10.1,
    ]);
  });

  it("should be able to return the quality of sleep for each night over the course of any given week", () => {
    expect(sleep33.getPastWeekNightlyQuality("2019/06/15")).to.deep.equal([
      4.2,
      3.8,
      3.7,
      3.2,
      2.6,
      1.8,
      4.6,
    ]);
  });

  it("should return average sleep quality amongst all users", () => {
    expect(sleep31.calculateAverageSleepQualityAll()).to.equal("2.9");
  });
});
