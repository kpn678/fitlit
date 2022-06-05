import { expect } from "chai";
import User from "../src/User";
import Sleep from "../src/Sleep";
import { sleepData, singleUserData31, singleUserData32, singleUserData33 } from "../src/sampleData/sleep-sample-data";

describe("Sleep", () => {
  let user31, user32, user33, sleep31, sleep32, sleep33;

  beforeEach(() => {

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
    expect(sleep33.returnNightlyHoursSlept("2019/06/16")).to.equal("10.1 hours");
    expect(sleep33.returnNightlyHoursSlept("2019/06/15")).to.equal("9.5 hours");
    expect(sleep32.returnNightlyHoursSlept("2019/06/18")).to.equal("7.7 hours");
  });

  it("should be able to return 0 if there is no sleep hours data for that night", () => {
    expect(sleep31.returnNightlyHoursSlept("2019/06/19")).to.equal(0);
  });

  it("should be able to return the sleep quality for a specific night", () => {
    expect(sleep33.returnNightlySleepQuality("2019/06/16")).to.equal(3.8);
    expect(sleep33.returnNightlySleepQuality("2019/06/15")).to.equal(4.2);
    expect(sleep32.returnNightlySleepQuality("2019/06/18")).to.equal(2.7);
  });

  it("should be able to return 0 if there is no sleep quality data for that night", () => {
    expect(sleep31.returnNightlySleepQuality("2019/06/19")).to.equal(0);
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
    expect(sleep31.calculateAverageSleepQualityAll()).to.equal(3);
  });
});
