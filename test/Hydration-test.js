import { expect } from "chai";
//import UserRepository from "../src/UserRepository";
import User from "../src/User";
import Hydration from "../src/Hydration";

describe("Hydration", () => {
    
    let hydrationData, singleUserData, user33, hydration;

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
                    }];
                   
        singleUserData = { 
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
              30
            ]
          };

        user33 = new User(singleUserData);
        hydration = new Hydration()
    });

    it("should be a function", () => {
      expect(Hydration).to.be.a("function");
    });

    it("should be an instance of Hydration", () => {
      expect(hydration).to.be.an.instanceof(Hydration);
    });

    
})
