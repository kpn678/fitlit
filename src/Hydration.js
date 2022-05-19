class Hydration{
    constructor (hydrationData, userID) {
        this.hydrationData = hydrationData.filter(data => data.userID === userID)
        this.userID = userID;
    }
    calculateAverageDailyOunces() {
        let sum = 0
        this.hydrationData.forEach((datum) => {
        sum += datum.numOunces 
    })
    return `${(sum /this.hydrationData.length).toFixed(1)} oz.`
    }
}




// For a user (identified by their userID - 
//     this is the same for all methods requiring a specific user’s data), 
//     the average fluid ounces consumed per day for all time
//calculateAverageDailyOunces

// For a user, how many fluid ocalculateAverageDailyOuncesunces they consumed for a specific day (identified by a date)
//returnDailyOunces

// For a user, how many fluid ounces of water consumed each day over the course of a week (7 days) - 
// return the amount for each day
//getPastWeekDailyOunces

// You have to decide which classes should contain each method. 
// Think about whose responsibility it is to own the method.

export default Hydration;