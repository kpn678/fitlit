import { expect } from "chai";
import UserRepository from "../src/UserRepository";
import { userData } from "../src/sampleData/user-sample-data";

describe("User Repository", () => {
  let userRepository;

  beforeEach(() => {
    userRepository = new UserRepository(userData);
  });

  it("should be a function", () => {
    expect(UserRepository).to.be.a("function");
  });

  it("should be an instance of UserRepository", () => {
    expect(userRepository).to.be.an.instanceof(UserRepository);
  });

  it("should hold all users data", () => {
    expect(userRepository.userData).to.equal(userData);
  });

  it("should return a user's data when given that user's ID", () => {
    expect(userRepository.getUserData(31)).to.deep.equal(
      {
        id: 31,
        name: "Bert Yund",
        address: "0032 Claudia Plain, Delfinaland RI 22298-3685",
        email: "Sibyl.Schmidt39@yahoo.com",
        strideLength: 3.4,
        dailyStepGoal: 7000,
        friends: [32, 33],
      }
    );
  });

  it("should return average step goal amongst all users", () => {
    expect(userRepository.calculateAverageStepGoals()).to.equal(5000);
  });
});
