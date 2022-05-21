class Sleep {
  constructor(sleepData, userID) {
    this.sleepData = sleepData.filter((data) => data.userID === userID);
    this.userID = userID;
  }
  calculateAverageHoursSlept() {
    let sum = 0;
    this.sleepData.forEach((datum) => {
      sum += datum.hoursSlept;
    });
    return `${(sum / this.sleepData.length).toFixed(1)} hours`;
  }
  calculateAverageSleepQuality() {
    let sum = 0;
    this.sleepData.forEach((datum) => {
      sum += datum.sleepQuality;
    });
    return (sum / this.sleepData.length).toFixed(1);
  }
  returnNightlyHoursSlept(date) {
    const nightlyHours = this.sleepData.find((datum) => {
      return datum.date === date;
    });
    return `${nightlyHours.hoursSlept} hours`;
  }
  returnNightlySleepQuality(date) {
    const nightlyQuality = this.sleepData.find((datum) => {
      return datum.date === date;
    });
    return nightlyQuality.sleepQuality;
  }
  getPastWeekNightlyHours(date) {
    const startDate = this.sleepData.findIndex((night) => night.date === date);
    const weeklyRange = this.sleepData.slice(startDate, 7);
    const weeklyHours = weeklyRange.map((date) => ({
      [date.date]: `${date.hoursSlept} hours`,
    }));
    return weeklyHours;
  }
  getPastWeekNightlyQuality(date) {
    const startDate = this.sleepData.findIndex((night) => night.date === date);
    const weeklyRange = this.sleepData.slice(startDate, 7);
    const weeklyQuality = weeklyRange.map((date) => ({
      [date.date]: date.sleepQuality,
    }));
    return weeklyQuality;
  }
  calculateAverageSleepQualityAll() {
    const averageQuality = this.sleepData.reduce((avg, user) => {
      avg += user.sleepQuality / this.sleepData.length;
      return avg;
    }, 0);
    return averageQuality.toFixed(1);
  }
}

export default Sleep;
