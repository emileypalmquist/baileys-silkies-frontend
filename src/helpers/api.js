const BASE_URL = "http://localhost:3000";

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

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

function login(user, handleOk, handleErrors) {
  fetch(BASE_URL + "/login", {
    method: "POST",
    headers: headers,
    body: JSON.stringify(user),
  }).then((response) => handleResponse(response, handleOk, handleErrors));
}

function reAuth(handleOk) {
  let token = localStorage.token;
  fetch(BASE_URL + "/reAuth", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => handleResponse(response, handleOk, console.log));
}

function createCoop(coop, onSuccess, setErrors) {
  const formData = new FormData();
  formData.append("name", coop.name);
  formData.append("photo", coop.photo);
  formData.append("supplier", coop.supplier);
  formData.append("description", coop.description);

  fetch(BASE_URL + "/coops", {
    method: "POST",
    body: formData,
  }).then((response) => handleResponse(response, onSuccess, setErrors));
}

function createChicken(chicken, onSuccess, setErrors) {
  const formData = new FormData();
  formData.append("sex", chicken.sex);
  formData.append("photo", chicken.photo);
  formData.append("feather_type", chicken.featherType);
  formData.append("hatch_date", chicken.hatchDate);
  formData.append("color", chicken.color);
  formData.append("coop_id", chicken.coopId);
  formData.append("available", chicken.available);
  formData.append("naked_neck", chicken.nakedNeck);
  fetch(BASE_URL + "/available_chickens", {
    method: "POST",
    body: formData,
  }).then((response) => handleResponse(response, onSuccess, setErrors));
}

function deleteChicken(id, handleDeleted) {
  return fetch(BASE_URL + `/available_chickens/${id}`, {
    method: "DELETE",
  }).then((response) => handleResponse(response, handleDeleted, console.log));
}

export {
  getCoops,
  getAvailableChicksCoop,
  getAllAvailableChicks,
  login,
  reAuth,
  createCoop,
  createChicken,
  deleteChicken,
};
