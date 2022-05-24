import { expect } from "chai";
import User from "../src/User";
import Hydration from "../src/Hydration";

describe("Hydration", () => {
  let hydrationData, singleUserData31, singleUserData32, singleUserData33, user31, user32, user33, hydration31, hydration32, hydration33;
  
  beforeEach(() => {
    hydrationData = [
      {
        userID: 33,
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
      {
        userID: 33,
        date: "2019/06/18",
        numOunces: 26,
      },
      {
        userID: 33,
        date: "2019/06/19",
        numOunces: 47,
      },
      {
        userID: 33,
        date: "2019/06/20",
        numOunces: 54,
      },
      {
        userID: 33,
        date: "2019/06/21",
        numOunces: 84,
      },

      {
        userID: 33,
        date: "2019/07/18",
        numOunces: 41,
      },
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
      {
        userID: 31,
        date: "2019/06/16",
        numOunces: 0,
      },
    ];

    singleUserData31 = {
      id: 31,
      name: "Bertrand Yundt",
      address: "0032 Claudia Plain, Delfinaland RI 22298-3685",
      email: "Sibyl.Schmidt39@yahoo.com",
      strideLength: 3.4,
      dailyStepGoal: 7000,
      friends: [16, 41, 9],
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

    singleUserData33 = {
      id: 33,
      name: "Leilani Quitzon",
      address: "60013 Golden Overpass, Lake Dejon WI 77309-0820",
      email: "Trinity_Rowe@hotmail.com",
      strideLength: 3.5,
      dailyStepGoal: 8000,
      friends: [4, 18, 36, 30],
    };

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
