import { renderTbl } from "./render.js";
import { determineHouseSizePts,determineHouseHoldPts } from "./cfp.js";
import { FORM } from "./global.js";
import { saveLS, cfpData } from "./storage.js";

function start(firstName, lastName, houseHoldMembers, houseSize) {
  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseSizePTS = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePTS;
  cfpData.push({
    firstName: firstName,
    lastName: lastName,
    houseM: houseHoldMembers,
    houseS: houseSize,
    houseMPTS: houseHoldPTS,
    houseSPTS: houseSizePTS,
    cfpTotal: total,
  });
}

renderTbl(cfpData);

function showError(message) {
  const errorDiv = document.getElementById("error-message");
  errorDiv.textContent = message;
  errorDiv.style.color = "red";
}

FORM.addEventListener("submit", function (e) {
  e.preventDefault();
  const errorDiv = document.getElementById("error-message");
  errorDiv.textContent = "";

  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
  const houseMembers = parseInt(document.getElementById("housem").value);
  const houseSize = FORM.houseS.value;

  if (firstName === "") {
  showError("First Name is required.")
}
  if (lastName === "") {
  showError("Last Name is required.")
}
  start(firstName, lastName, houseMembers, houseSize);
  saveLS(cfpData);
  renderTbl(cfpData);
  FORM.reset();
});
