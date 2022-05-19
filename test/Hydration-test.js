import { expect } from "chai";
//import UserRepository from "../src/UserRepository";
import User from "../src/User";
import Hydration from "../src/Hydration";

describe("Hydration", () => {
    
    let hydration32, hydration33, hydrationData, singleUserData32, singleUserData33, user32, user33;

    beforeEach(() => {
        hydrationData = [
        {
            userID: 33,
            date: "2019/06/15",
            numOunces: 51
            },
            {
                userID: 33,
                date: "2019/06/16",
                numOunces: 89
                },
                {
                    userID: 33,
                    date: "2019/06/17",
                    numOunces: 23
                    },
                    {
                        userID: 32,
                        date: "2019/06/15",
                        numOunces: 56
                        },
                        {
                            userID: 32,
                            date: "2019/06/16",
                            numOunces: 36
                            }];
                   
        singleUserData33 = { 
            "id": 33,
            "name": "Leilani Quitzon",
            "address": "60013 Golden Overpass, Lake Dejon WI 77309-0820",
            "email": "Trinity_Rowe@hotmail.com",
            "strideLength": 3.5,
            "dailyStepGoal": 8000,
            "friends": [
              4,
              18,
              36,
              30]
          };

          singleUserData32 = { 
            "id": 32,
            "name": "Carrie Smith",
            "address": "408 Windler Camp, Eddietown MA 11960",
            "email": "Nikolas.Brakus31@yahoo.com",
            "strideLength": 4.3,
            "dailyStepGoal": 3000,
            "friends": [
              47,
              33
            ]
          };

        user32 = new User(singleUserData32);
        user33 = new User(singleUserData33);
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
        expect(hydration32.userID).to.equal(32)
    });

    it("should only store this specific user's information based on the user's id", () => {
        expect(hydration32.hydrationData).to.deep.equal( [{
            userID: 32,
            date: "2019/06/15",
            numOunces: 56
            },
            {
                userID: 32,
                date: "2019/06/16",
                numOunces: 36
                }])
     });

     it("should be able to calculate the average fluid ounces consumed per day for all time", () => {
         expect(hydration33.calculateAverageDailyOunces()).to.equal("54.3 oz.")
     });

    
})
