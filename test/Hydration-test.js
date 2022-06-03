import { expect } from "chai";
import User from "../src/User";
import Hydration from "../src/Hydration";
import { hydrationData, singleUserData31, singleUserData32, singleUserData33 } from "../src/sampleData/hydration-sample-data";


describe("Hydration", () => {
  let user31, user32, user33, hydration31, hydration32, hydration33;

  beforeEach(() => {

    user31 = new User(singleUserData31);
    user32 = new User(singleUserData32);
    user33 = new User(singleUserData33);

    hydration31 = new Hydration(hydrationData, 31);
    hydration32 = new Hydration(hydrationData, 32);
    hydration33 = new Hydration(hydrationData, 33);
  });

  it("should be a function", () => {
    expect(Hydration).to.be.a("function");
  });

  it("should be an instance of Hydration", () => {
    expect(hydration32).to.be.an.instanceof(Hydration);
  });

  it("should gather information based on the user's id", () => {
    expect(hydration32.userID).to.equal(32);
  });

  it("should only store this specific user's information based on the user's id", () => {
    expect(hydration32.hydrationData).to.deep.equal([
      {
        userID: 32,
        date: "2019/06/15",
        numOunces: 56,
      },
      {
        userID: 32,
        date: "2019/06/16",
        numOunces: 36,
      },
    ]);
  });

  it("should be able to calculate the average fluid ounces consumed per day for all time", () => {
    expect(hydration33.calculateAverageDailyOunces()).to.equal("51.9 oz.");
  });

  it("should be able to return how many fluid ounces they consumed for a specific day", () => {
    expect(hydration33.returnDailyOunces("2019/06/15")).to.equal("51 oz.");
    expect(hydration33.returnDailyOunces("2019/06/17")).to.equal("23 oz.");
    expect(hydration32.returnDailyOunces("2019/06/16")).to.equal("36 oz.");
  });

  it("should be able to return a message if fluid ounces they consumed is zero", () => {
    expect(hydration31.returnDailyOunces("2019/06/16")).to.equal("You have no hydration data. Go drink some water!");
  });

  it("should be able to return the fluid ounces of water for a user consumed each day over the course of the last 7 days", () => {
    expect(hydration33.getPastWeekDailyOunces("2019/06/15")).to.deep.equal([
      51,
      89,
      23,
      26,
      47,
      54,
      84,
    ]);
  });
});
