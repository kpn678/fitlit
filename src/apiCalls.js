import { reloadData } from "./scripts.js"

const postError = document.querySelector(".error")

let apiUserData, apiSleepData, apiActivityData, apiHydrationData;

const fetchData = (dataSet) => {
  return fetch(`http://localhost:3001/api/v1/${dataSet}`)
    .then((response) => response.json())
    .catch((error) => console.log(dataSet))
};

export const fetchAll = () => {
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

export const postAll = (formData => {
  postHydration(formData);
  postSleep(formData);
  postActivity(formData);
})

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
    .then(json => reloadData())
    .catch(error => {
      console.log("THIS", error)
      console.warn("WARN", error.message);
      displayErrorMessage(error)
    })
}

const postSleep = (formData) => {
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
    .then(json => reloadData())
    .catch(error => {
      console.warn(error.message);
      displayErrorMessage(error)
    })
}

const postActivity = (formData) => {
  fetch("http://localhost:3001/api/v1/activity", {
    method: "POST",
    body: JSON.stringify({
      userID: formData.id, date: formData.date, flightsOfStairs: formData.flights, minutesActive: formData.mins,
      numSteps: formData.steps
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
    .then(json => reloadData())
    .catch(error => {
      console.warn(error.message);
      displayErrorMessage(error)
    })
}

const displayErrorMessage = (error) => {
  if (error.message === "Failed to fetch") {
    return postError.innerText = "OOPS something went wrong";
  } else {
    return postError.innerText = error.message;
  };
};
