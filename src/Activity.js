
class Activity {
    constructor(activityData, userID) {
        this.allUserActivityData = activityData;
        this.activityData = activityData.filter((data) => data.userID === userID);
        this.userID = userID;
    }

    returnDailyMilesWalked(date, user) {
        const day = this.activityData.find((datum) => {
            return datum.date === date;
        });
        if(day.numSteps === 0){
            return "You have not logged any steps today."
        } else {
            const dailyMiles = day.numSteps * user.strideLength / 5280
            return `${dailyMiles.toFixed(2)} miles`
        }
    };

    returnDailyActiveMins(date) { 
        const day = this.activityData.find((datum) => {
            return datum.date === date;
        })
        if(day.minutesActive === 0){
            return "You have not logged any active minutes for today."
        } else {
            return `${day.minutesActive} mins.`
        }
    }
    calculateWeeklyActiveMins(date) {
    const startDate = this.activityData.findIndex((day) => day.date === date);
    const weeklyRange = this.activityData.slice(startDate, startDate + 7);
    const weeklyTotalActiveMins = weeklyRange.reduce((sum, date) => {
        sum += date.minutesActive
        return sum
    }, 0);
        const weeklyAverageActiveMins = weeklyTotalActiveMins / 7
        return Math.round(weeklyAverageActiveMins)
  };

}
export default Activity;