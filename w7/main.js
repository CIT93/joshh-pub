import { renderTbl } from "./render.js";
import { determineHouseSizePts,determineHouseHoldPts} from "./carbonfp.js";



const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");

const cfpData = [];


function start(firstName, lastName, houseHoldMembers, houseSize) {
  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseSizePTS = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePTS;
  cfpData.push({
    firstName: firstname,
    lastName: lastName,
    houseM: houseHoldMembers,
    houseS: houseSize,
    houseMPTS: houseHoldPTS,
    houseSPTS: houseSizePTS,
    cfpTotal: total,
  });
}
FORM.addEventListener("submit", function (e) {
  e.preventDefault();
  const firstName = document.getElementById("firstname").value;
  const lastName = document.getElementById("lastname").value;
  const houseMembers = parseInt(document.getElementById("housem").value);
  const houseSize = document.getElementById("houseS").value;
  start(firstName, lastName, houseMembers, houseSize);
  OUTPUT.innerHTML = "";
  // displayOutput();
  renderTbl(cfpData);
  FORM.reset();
});

// No since the value of apartment was wrong in html
// In java we had it as apt.

// you have to assume the users will give incorrect data
