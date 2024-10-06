import { renderTbl } from "./render.js";
import { determineHouseSizePts, determineHouseHoldPts } from "./cfp.js";
import { FORM } from "./global.js";
import { saveLS, cfpData } from "./storage.js";

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const submit = document.getElementById("submitError");

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

// Function to validate a single field
function validateField(event) {
  const field = event.target.value;
  const fieldId = event.target.id;
  const fieldError = document.getElementById(`${fieldId}Error`);

  if (field === "") {
    fieldError.textContent = `${fieldId} is required`;
    event.target.classList.add("invalid");
  } else {
    fieldError.textContent = '';
    event.target.classList.remove("invalid");
  }
}

// Attach blur event listeners
firstName.addEventListener("blur", validateField);
lastName.addEventListener("blur", validateField);

FORM.addEventListener("submit", function (e) {
  e.preventDefault();

  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;

  const firstNameIsValid = firstName.value !== '';
  const lastNameIsValid = lastName.value !== '';

  if (firstNameIsValid && lastNameIsValid) {
    submit.textContent = "Form requires first name and last name.";
    return
  }
    submit.textContent = '' ;
    const houseMembers = parseInt(FORM.housem.value);
    const houseSize = FORM.houseS.value;
    start(firstName, lastName, houseMembers, houseSize);
    saveLS(cfpData);
    renderTbl(cfpData);
    FORM.reset();
});
