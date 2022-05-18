// Your fetch requests will live here!
const fetchData = (dataSet) => {
  return fetch(`https://fitlit-api.herokuapp.com/api/v1/${dataSet}`)
    .then((resopnse) => response.json())
    .catch((err) => console.log("There has been an error!"));
};

console.log("I will be a fetch request!");
