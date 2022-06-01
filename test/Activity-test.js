import { expect } from "chai";
import UserRepository from "../src/UserRepository";
import User from "../src/User";
import Hydration from "../src/Hydration";
import Sleep from "../src/Sleep";
import Activity from "../src/Activity";
// import activityData from "../src/sampleData/activity-sample-data";


describe("Activity", () => {
    let activityData, user31, user32, user33, singleUserData31, singleUserData32, singleUserData33, activity31, activity32, activity33;

    beforeEach(() => {
        activityData = [
            {
                userID: 31,
                date: "2019/06/16",
                numSteps: 4720,
                minutesActive: 194,
                flightsOfStairs: 28,
            },
            {
                userID: 32,
                date: "2019/06/16",
                numSteps: 14283,
                minutesActive: 264,
                flightsOfStairs: 22,
            },
            {
                userID: 33,
                date: "2019/06/16",
                numSteps: 11246,
                minutesActive: 216,
                flightsOfStairs: 11,
            },
            {
                userID: 31,
                date: "2019/06/17",
                numSteps: 7854,
                minutesActive: 199,
                flightsOfStairs: 42,
            },
            {
                userID: 32,
                date: "2019/06/17",
                numSteps: 8183,
                minutesActive: 85,
                flightsOfStairs: 3,
            },
            {
                userID: 33,
                date: "2019/06/17",
                numSteps: 11435,
                minutesActive: 115,
                flightsOfStairs: 16,
            },
            {
                userID: 31,
                date: "2019/06/18",
                numSteps: 7982,
                minutesActive: 124,
                flightsOfStairs: 17,
            },
            {
                userID: 32,
                date: "2019/06/18",
                numSteps: 14745,
                minutesActive: 227,
                flightsOfStairs: 5,
            },
            {
                userID: 33,
                date: "2019/06/18",
                numSteps: 6650,
                minutesActive: 220,
                flightsOfStairs: 6,
            }, {
                userID: 31,
                date: "2019/06/19",
                numSteps: 4950,
                minutesActive: 229,
                flightsOfStairs: 48,
            },
            {
                userID: 32,
                date: "2019/06/19",
                numSteps: 2426,
                minutesActive: 137,
                flightsOfStairs: 47,
            },
            {
                userID: 33,
                date: "2019/06/19",
                numSteps: 10293,
                minutesActive: 63,
                flightsOfStairs: 29,
            },
            {
                userID: 31,
                date: "2019/06/20",
                numSteps: 6521,
                minutesActive: 212,
                flightsOfStairs: 31,
            },
            {
                userID: 32,
                date: "2019/06/20",
                numSteps: 8071,
                minutesActive: 203,
                flightsOfStairs: 42,
            },
            {
                userID: 33,
                date: "2019/06/20",
                numSteps: 4060,
                minutesActive: 275,
                flightsOfStairs: 24,
            }, {
                userID: 31,
                date: "2019/06/21",
                numSteps: 4206,
                minutesActive: 169,
                flightsOfStairs: 5,
            },
            {
                userID: 32,
                date: "2019/06/21",
                numSteps: 8913,
                minutesActive: 105,
                flightsOfStairs: 39,
            },
            {
                userID: 33,
                date: "2019/06/21",
                numSteps: 6195,
                minutesActive: 195,
                flightsOfStairs: 45,
            }, {
                userID: 31,
                date: "2019/06/22",
                numSteps: 2393,
                minutesActive: 238,
                flightsOfStairs: 16,
            },
            {
                userID: 32,
                date: "2019/06/22",
                numSteps: 14410,
                minutesActive: 276,
                flightsOfStairs: 28,
            },
            {
                userID: 33,
                date: "2019/06/22",
                numSteps: 3157,
                minutesActive: 120,
                flightsOfStairs: 35,
            }, {
                userID: 31,
                date: "2019/06/23",
                numSteps: 9942,
                minutesActive: 62,
                flightsOfStairs: 20,
            },
            {
                userID: 32,
                date: "2019/06/23",
                numSteps: 9104,
                minutesActive: 300,
                flightsOfStairs: 30,
            },
            {
                userID: 33,
                date: "2019/06/23",
                numSteps: 0,
                minutesActive: 0,
                flightsOfStairs: 0,
            }
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
        
        activity31 = new Activity(activityData, 31)
        activity32 = new Activity(activityData, 32);
        activity33 = new Activity(activityData, 33);

        user31 = new User(singleUserData31, activityData);
        user32 = new User(singleUserData32, activityData);
        user33 = new User(singleUserData33, activityData);
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
        expect(activity32.activityData).to.deep.equal([
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
         ])
        })

        it ("should be able to return how much a user has walked in miles", () => {
            expect(activity32.returnDailyMilesWalked("2019/06/23", user32)).to.equal("7.41 miles")
        })

        it("should be able to return a message to the user if they have walked 0 steps", () => {
            expect(activity33.returnDailyMilesWalked("2019/06/23", user33)).to.equal("You have not logged any steps today.")
        })

        it("should be able to return a user's active minutes in a day", () => {
            expect(activity32.returnDailyActiveMins("2019/06/23")).to.equal("300 mins.")
        })

        it("should return a message if there are no active minutes logged for that day", () => {
            expect(activity33.returnDailyActiveMins("2019/06/23")).to.equal("You have not logged any active minutes for today.")
        })

        it("should be able to calculate a user's weekly active time in minutes", () => {
            expect(activity32.calculateWeeklyActiveMins("2019/06/16")).to.equal(185)
        })
})
