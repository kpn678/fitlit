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

    returnDailyOunces(date) {
          const dailyOz = this.hydrationData.find((datum) => {
           return  datum.date === date;
        });
        return `${dailyOz.numOunces} oz.`
    };
}




// For a user, how many fluid ounces of water consumed each day over the course of a week (7 days) - 
// return the amount for each day
//getPastWeekDailyOunces

// You have to decide which classes should contain each method. 
// Think about whose responsibility it is to own the method.

export default Hydration;