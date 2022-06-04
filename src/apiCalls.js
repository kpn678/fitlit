let apiUserData, apiSleepData, apiActivityData, apiHydrationData;

const fetchData = (dataSet) => {
  return fetch(`https://fitlit-api.herokuapp.com/api/v1/${dataSet}`)
    .then((response) => response.json());
};

const fetchAll = () => {
  apiUserData = fetchData("users");
  apiSleepData = fetchData("sleep");
  apiActivityData = fetchData("activity");
  apiHydrationData = fetchData("hydration");
  return Promise.all([
    apiUserData,
    apiSleepData,
    apiActivityData,
    apiHydrationData,
  ]);
};

const postHydration = (id, date, numOunce) => {
  fetch("http://localhost:3001/api/v1/hydration", {
    method: "POST",
    body: JSON.stringify({
      userID: id, date: date, numOunces: numOunce
    }),
    headers: { "Content-type": "application/json" },
  })
    .then(res => {
      console.log("hydration response", res)
      if (!res.ok) {
      throw new Error("Please make sure all fields are filled out.")
    } else {
      return res.json()
    }
    })
    .then(json => data)
    .catch(error => {
      console.warn(error.message);
      displayErrorMessage(error)
    })
}

const postSleep = (id, date, hoursSlept, sleepQual) => {
  fetch("http://localhost:3001/api/v1/sleep", {
    method: "POST",
    body: JSON.stringify({
      userID: id, date: date, hoursSlept: hoursSlept, sleepQuality: sleepQual
    }),
    headers: { "Content-type": "application/json" },
  })
  .then(res => {
    console.log("sleep response", res)
    if (!res.ok) {
    throw new Error("Please make sure all fields are filled out.")
  } else {
    return res.json()
  }
  })
    .then(json => data)
    .catch(error => {
      console.warn(error.message);
      displayErrorMessage(error)
    })
}

const postActivity = (id, date, flights, mins, steps) => {
  fetch("http://localhost:3001/api/v1/activity", {
    method: "POST",
    body: JSON.stringify({
      userID: id, date: date, flightsOfStairs: flights, minutesActive: mins, numSteps: steps
    }),
    headers: { "Content-type": "application/json" },
  })
  .then(res => {
    console.log("activity response", res)
    if (!res.ok) {
    throw new Error("Please make sure all fields are filled out.")
  } else {
    return res.json()
  }
  })
    .then(json => data)
    .catch(error => {
      console.warn(error.message);
      displayErrorMessage(error)
    })
}

export { fetchAll };
