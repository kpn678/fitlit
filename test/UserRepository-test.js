import { expect } from "chai";
import UserRepository from "../src/UserRepository";

describe("User Repository", () => {
  let userData;

  beforeEach(() => {
    {
      [
        {
          id: 31,
          name: "Bert Yund",
          address: "0032 Claudia Plain, Delfinaland RI 22298-3685",
          email: "Sibyl.Schmidt39@yahoo.com",
          strideLength: 3.4,
          dailyStepGoal: 7000,
          friends: [16, 41, 9],
        },
        {
          id: 32,
          name: "Carrie Smith",
          address: "408 Windler Camp, Eddietown MA 11960",
          email: "Nikolas.Brakus31@yahoo.com",
          strideLength: 4.3,
          dailyStepGoal: 3000,
          friends: [47, 33],
        },
        {
          id: 33,
          name: "Lani Quitt",
          address: "60013 Golden Overpass, Lake Dejon WI 77309-0820",
          email: "Trinity_Rowe@hotmail..com",
          strideLength: 3.5,
          dailyStepGoal: 0,
          friends: [],
        },
      ];
    }
  });
  it("should be a function", function () {
    expect(UserRepository).to.be.a("function");
  });
});
