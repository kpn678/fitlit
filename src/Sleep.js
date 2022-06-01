class Sleep {
  constructor(sleepData, userID) {
    this.allUserSleepData = sleepData;
    this.sleepData = sleepData.filter((data) => data.userID === userID);
    this.userID = userID;
  };
  calculateAverageHoursSlept() {
    let sum = 0;
    this.sleepData.forEach((datum) => {
      sum += datum.hoursSlept;
    });
    return `${(sum / this.sleepData.length).toFixed(1)} hours`;
  };
  calculateAverageSleepQuality() {
    let sum = 0;
    this.sleepData.forEach((datum) => {
      sum += datum.sleepQuality;
    });
    return (sum / this.sleepData.length).toFixed(1);
  };
  returnNightlyHoursSlept(date) {
    const nightlyHours = this.sleepData.find((datum) => {
      return datum.date === date;
    });
    if (nightlyHours.hoursSlept > 0) {
      return `${nightlyHours.hoursSlept} hours`;
    } else {
      return "You have not entered your amount of sleep for last night.";
    };
  };
  returnNightlySleepQuality(date) {
    const nightlyQuality = this.sleepData.find((datum) => {
      return datum.date === date;
    });
    if (nightlyQuality.sleepQuality > 0) {
      return nightlyQuality.sleepQuality;
    } else {
      return "You have not entered your sleep quality for last night.";
    };
  };
  getPastWeekNightlyHours(date) {
    const startDate = this.sleepData.findIndex((night) => night.date === date);
    const weeklyRange = this.sleepData.slice(startDate, startDate + 7);
    const weeklyHours = weeklyRange.map((date) => date.hoursSlept);
    return weeklyHours;
  };
  getPastWeekNightlyQuality(date) {
    const startDate = this.sleepData.findIndex((night) => night.date === date);
    const weeklyRange = this.sleepData.slice(startDate, startDate + 7);
    const weeklyQuality = weeklyRange.map((date) => date.sleepQuality);
    return weeklyQuality;
  };
  calculateAverageSleepQualityAll() {
    const totalQuality = this.allUserSleepData.reduce((sum, night) => {
      sum += night.sleepQuality ;
      return sum;
    }, 0);
    const averageQuality = totalQuality / this.allUserSleepData.length;
    return Math.round(averageQuality * 10) / 10 ;
  };
};

export default Sleep;
