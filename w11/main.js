import { renderTbl } from "./render.js";
import { determineHouseSizePoints, determineHouseHoldPoints } from "./cfp.js";
import { FORM, FNAME, LNAME, SUBMIT } from "./global.js";
import { saveLS, cfpData } from "./storage.js";
import { FP } from "./fp.js";

const start = (first, last, ...rest) => {
  const [houseHoldMembers, houseSize] = rest;
  const houseHoldPoints = determineHouseHoldPoints(houseHoldMembers);
  const houseSizePoints = determineHouseSizePoints(houseSize);
  const fpObj = new FP(first, last, houseHoldMembers, houseSize, meatConsumption, foodType)
  const total = houseHoldPoints + houseSizePoints + fpObj.calculateFoodFootprint();
  cfpData.push({
    firstName: first, // values
    lastName: last, // values
    houseM: houseHoldMembers, // values
    houseS: houseSize, // values
    houseMPTS: houseHoldPoints, //calculated Values
    houseSPTS: houseSizePoints, //calculated Values
    foodFP: fpObj.calculateFoodFootprint(),
    cfpTotal: total, //calculated Values
  });
}

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
    // start(FNAME.value, LNAME.value,parseInt(FORM.housem.value), FORM.houseS.value);
    const fpObj = new FP(FNAME.value, LNAME.value,parseInt(FORM.housem.value), FORM.houseS.value, FORM.meatConsumption.value, FORM.foodType.value)
    // fpObj.houseHoldPoints();
    // fpObj.houseSizePoints();
    cfpData.push(fpObj)
    saveLS(cfpData);
    renderTbl(cfpData);
    FORM.reset();
  } else {
    SUBMIT.textContent = "Form requires first name and last name.";
  }
});

// const me = {
//   name: "Josh",
//   hairColor: "Brown",
//   location: "Home",
//   sleepScore: 95,
//   introduce: function() {
//     console.log(this)
//     console.log(`This is ${this.name} with ${this.hairColor}, hair color is in ${this.location} right now! `)
//   }
// }

// const you = {
//   name: "Jan",
//   hairColor: "Red",
//   location: "Office",
//   sleepScore: 95,
//   introduce: function() {
//     console.log(this)
//     console.log(`This is ${this.name} with ${this.hairColor}, hair color is in ${this.location} right now! `)
//   }
// }

// me.introduce();
// you.introduce();


// class Human {
//   constructor(name, hairColor, location, sleepScore) {
//     this.name = name
//     this.hairColor = hairColor
//     this.location = location
//     this.sleepScore = sleepScore
//   }
//   introduce() {
//         console.log(`This is ${this.name} with ${this.hairColor}, hair color is in ${this.location} right now!`)
//   }
// }
// const josh = new Human("Josh", "Brown", "home", 95);
// const rio = new Human("Rio", "Red", "office", 55);
// josh.introduce();
// rio.introduce();
// josh.hrv = 50