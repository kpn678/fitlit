import { expect } from "chai";
import UserRepository from "../src/UserRepository";
import User from "../src/User";

describe("User", () => {
    let user , userData, userRepository, user31, user32, user33

    beforeEach(() => {
        user31 =
            {
              id: 31,
              name: "Bert Yund",
              address: "0032 Claudia Plain, Delfinaland RI 22298-3685",
              email: "Sibyl.Schmidt39@yahoo.com",
              strideLength: 3.4,
              dailyStepGoal: 7000,
              friends: [16, 41, 9],
            },

            user32 = 
            {
              id: 32,
              name: "Carrie Smith",
              address: "408 Windler Camp, Eddietown MA 11960",
              email: "Nikolas.Brakus31@yahoo.com",
              strideLength: 4.3,
              dailyStepGoal: 3000,
              friends: [47, 33],
            },

            user33 = 
            {
              id: 33,
              name: "Lani Quitt",
              address: "60013 Golden Overpass, Lake Dejon WI 77309-0820",
              email: "Trinity_Rowe@hotmail..com",
              strideLength: 3.5,
              dailyStepGoal: 5000,
              friends: [],
            },
          
            user = new User(user33)
            //userRepository = new UserRepository(userData);
    })

    it("should be a function", () => {
        expect(User).to.be.a("function");
      });
    
      it("should be an instance of User", () => {
        expect(user).to.be.an.instanceof(User);
      });
    
       it("should represent a single user's data", () => {
        expect(user).to.deep.equal({
            id: 33,
            name: "Lani Quitt",
            address: "60013 Golden Overpass, Lake Dejon WI 77309-0820",
            email: "Trinity_Rowe@hotmail..com",
            strideLength: 3.5,
            dailyStepGoal: 5000,
            friends: [],
          },);
       });
    
      it("should be able to return a user's first name", () => {
        expect(user.returnUserFirstName()).to.equal("Lani");
     });
    
})