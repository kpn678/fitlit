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
           return  datum.date === date && datum.numOunces > 0 ;
        })
        return `${dailyOz.numOunces} oz.` 
    }
    getPastWeekDailyOunces(date, week) {
        this.hydrationData.filter((datum) => {
            (datum.date === a) && (< b)

            //reduce?
            //DO WE WANT A FOR LOOP? to break after 7 days??? FORbidden?
            //dates are in this range, put em in the array and then map that to make the KVPs
        })
    }
    //hydrationData array: 
    //I: array of user's Dates datum.
    //O: array of objects of 7 dates where key is date and value is oz consumed
    //top= oldest date
}




// For a user, how many fluid ounces of water consumed each day over the course of a week (7 days) - 
// return the amount for each day
//

// You have to decide which classes should contain each method. 
// Think about whose responsibility it is to own the method.

export default Hydration;