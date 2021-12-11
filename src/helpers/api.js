const BASE_URL = "http://localhost:3000";

const handleResponse = (response, handleOk, handleErrors) => {
  let json = response.json();
  if (response.ok) {
    json.then(handleOk);
  } else {
    json.then((data) => handleErrors(data.errors));
  }
};

function getAllAvailableChicks(handleOk, handleErrors) {
  return fetch(BASE_URL + "/available_chickens").then((response) =>
    handleResponse(response, handleOk, handleErrors)
  );
}

function getAvailableChicksCoop(id, handleOk, handleErrors) {
  return fetch(BASE_URL + `/coops/${id}`).then((response) =>
    handleResponse(response, handleOk, handleErrors)
  );
}

function getCoops(handleOk, handleErrors) {
  return fetch(BASE_URL + "/coops").then((response) =>
    handleResponse(response, handleOk, handleErrors)
  );
}

export { getCoops, getAvailableChicksCoop, getAllAvailableChicks };
