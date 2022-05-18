// Your fetch requests will live here!
let apiUserData, apiSleepData, apiActivityData, apiHydrationData;

const fetchData = (dataSet) => {
  return fetch(`https://fitlit-api.herokuapp.com/api/v1/${dataSet}`)
    .then((response) => response.json())

    .catch((err) => console.log("There has been an error!"));
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
// console.log("I will be a fetch request!");

export {
  fetchData,
  fetchAll,
  apiUserData,
  apiSleepData,
  apiActivityData,
  apiHydrationData,
};

console.log("I will be a fetch request!");
