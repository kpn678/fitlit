class Activity {
  constructor(activityData, userID) {
    this.allUserActivityData = activityData;
    this.activityData = activityData.filter((data) => data.userID === userID);
    this.userID = userID;
  };

  findData(date) {
    return this.activityData.find(datum => datum.date === date);
  };

  returnDailyMilesWalked(date, user) {
    const dayData = this.findData(date);
    if (!dayData) {
      return 0;
    };
    const dailyMiles = dayData.numSteps * user.strideLength / 5280;
    return `${dailyMiles.toFixed(2)} miles`;
  };

  returnDailySteps(date){
    const dayData = this.findData(date);
    if (!dayData) {
      return 0;
    };
    return dayData.numSteps;
  };

  returnDailyActiveMins(date) {
    const dayData = this.findData(date);
    if (!dayData) {
      return 0;
    };
    return `${dayData.minutesActive} mins.`;
  };

  calculateWeeklyActiveMins(date) {
    const startDate = this.activityData.findIndex(day => day.date === date);
    const weeklyRange = this.activityData.slice(startDate, startDate + 7);
    const weeklyTotalActiveMins = weeklyRange.reduce((sum, date) => {
      sum += date.minutesActive;
      return sum;
    }, 0);
    const weeklyAverageActiveMins = weeklyTotalActiveMins / 7;
    return Math.round(weeklyAverageActiveMins);
  };

  determineIfStepGoalMet(date, user) {
    const dayData = this.findData(date);
    if (dayData.numSteps >= user.dailyStepGoal) {
      return true;
    } else {
      return false;
    };
  };

  returnAllDaysStepGoalMet(user) {
    let allDaysStepsMet = [];
    this.activityData.forEach(datum => {
      if(datum.numSteps >= user.dailyStepGoal) {
        allDaysStepsMet.push(datum.date);
      };
    });
    return allDaysStepsMet;
  };

  returnDailyFlights(date) {
    const dayData = this.findData(date);
    if (!dayData) {
      return 0;
    };
    return dayData.flightsOfStairs;
  };

  findAllTimeStairRecord() {
    let stairArray = [];
    this.activityData.forEach(datum => stairArray.push(datum.flightsOfStairs));
    const bestStairDay = Math.max(...stairArray);
    return `Your all-time best climb was ${bestStairDay} flights of stairs.`;
  };

  calculateActivityAverages(date) {
    const days = this.allUserActivityData.filter(datum =>  date === datum.date);
    let totalSteps = 0;
    let totalStairs = 0;
    let totalMins = 0;
    const averageAllUserData = days.reduce((acc, user) => {
      acc["allUsersNumSteps"] = Math.round((totalSteps += user.numSteps) / days.length);
      acc["allUsersFlightsStairs"] = Math.round((totalStairs += user.flightsOfStairs) / days.length);
      acc["allUsersMinsActive"] = Math.round((totalMins += user.minutesActive) / days.length);
      return acc;
    }, {});
    return averageAllUserData;
  };

};

export default Activity;
