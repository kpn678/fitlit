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



//  formData = {
// id:
// date:
// numOunce:
// hoursSlept:
// sleepQuality:
// flights:
// mins:
// steps:
// }

const postHydration = (formData) => {
  fetch("http://localhost:3001/api/v1/hydration", {
    method: "POST",
    body: JSON.stringify({
      userID: formData.id, date: formData.date, numOunces: formData.numberOunces
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

const postSleep = (formData) => {
  // take in an object of all the form data and pull out only what we need for each function.
  fetch("http://localhost:3001/api/v1/sleep", {
    method: "POST",
    body: JSON.stringify({
      userID: formData.id, date: formData.date, hoursSlept: formData.hoursSlept, sleepQuality: formData.sleepQuality
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

const postActivity = (formData) => {
  fetch("http://localhost:3001/api/v1/activity", {
    method: "POST",
    body: JSON.stringify({
      userID: formData.id, date: formData.date, flightsOfStairs: formData.flights, minutesActive: formData.mins, numSteps: formData.steps
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
