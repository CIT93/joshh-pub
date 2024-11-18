import { renderTbl } from "./render.js";
import { FORM, FNAME, LNAME, SUBMIT } from "./global.js";
import { saveLS, cfpData } from "./storage.js";
import { FP } from "./fp.js";
import { calculateAverageFootprint } from "./avg.js";

renderTbl(cfpData);

// Function to validate a single field
const validateField = event => {
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
FNAME.addEventListener("blur", validateField);
LNAME.addEventListener("blur", validateField);

FORM.addEventListener("submit", e => {
  e.preventDefault();
  if (FNAME.value !== '' && LNAME.value !== '') {
    SUBMIT.textContent = '';
    const fpObj = new FP(FNAME.value, LNAME.value,parseInt(FORM.housem.value), FORM.houseS.value, FORM.food.value)
    cfpData.push(fpObj)
    saveLS(cfpData);
    renderTbl(cfpData);

    const averageFootprint = calculateAverageFootprint(cfpData);
    insertAverageFootprint(averageFootprint)

    FORM.reset();
  } else {
    SUBMIT.textContent = "Form requires first name and last name.";
  }
});

// Function to insert average footprint score into the table
const insertAverageFootprint = (averageFootprint) => {
  const table = document.querySelector("table");
  const tbody = table.querySelector("tbody");
  const lastRow = tbody.querySelector("tr:last-child");

  // Create a new row for the average
  const newRow = table.insertRow(tbody.rows.length);

  const td1 = newRow.insertCell(0);
  td1.textContent = "Average Footprint";
  td1.colSpan = 4; // Span over the columns for name, household, etc.

  const td2 = newRow.insertCell(1);
  td2.textContent = averageFootprint;
  td2.style.fontWeight = "bold"; // Make average value bold
};
