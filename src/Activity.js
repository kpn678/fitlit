
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

}
export default Activity;