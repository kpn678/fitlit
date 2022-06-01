
class Activity {
    constructor(activityData, userID) {
        this.allUserActivityData = activityData;
        this.activityData = activityData.filter((data) => data.userID === userID);
        this.userID = userID;
    }
}
export default Activity;