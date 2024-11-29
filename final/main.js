import {
  winterDestinations,
  warmDestinations,
  touristyDestinations,
} from "./destinations.js";
import { travelForm, budgetInput, outputDiv } from "./global.js";
import { displayTable } from "./render.js";
import { DecisionMaker } from "./DecisionMaker.js";

const destinations = [...winterDestinations, ...warmDestinations, ...touristyDestinations];

const decisionMaker = new DecisionMaker(destinations);

const loadFromLocalStorage = () => {
  const savedDestinationsData = localStorage.getItem("savedDestinations");
  const userInputsAndResultsData = localStorage.getItem("userInputsAndResults");

  decisionMaker.setSavedDestinations(
    savedDestinationsData ? JSON.parse(savedDestinationsData) : []
  );
  decisionMaker.setUserInputsAndResults(
    userInputsAndResultsData ? JSON.parse(userInputsAndResultsData) : []
  );
};

const saveToLocalStorage = () => {
  localStorage.setItem("savedDestinations", JSON.stringify(decisionMaker.getSavedDestinations()));
  localStorage.setItem("userInputsAndResults", JSON.stringify(decisionMaker.getUserInputsAndResults()));
};

const displaySavedDestinations = () => {
  const savedDestinationsDiv = document.getElementById("savedDestinations");

  if (!savedDestinationsDiv) {
    console.error('Element with id "savedDestinations" not found.');
    return;
  }

  savedDestinationsDiv.innerHTML = "";

  const savedHeading = document.createElement("h1");
  savedHeading.textContent = "Destination Wish List";
  savedDestinationsDiv.appendChild(savedHeading);

  const savedDestinations = decisionMaker.getSavedDestinations();

  if (savedDestinations.length > 0) {
    const savedTable = displayTable(
      savedDestinations,
      (index) => {
        decisionMaker.removeFromSaved(index);
        saveToLocalStorage();
        displaySavedDestinations();
      },
      null,
      (index) => {
        const selectedDestination = savedDestinations[index];
        const packingList = decisionMaker.generatePackingList(selectedDestination, selectedDestination.activities);
        displayPackingList(packingList);
      }
    );
    savedDestinationsDiv.appendChild(savedTable);
  } else {
    savedDestinationsDiv.innerHTML += "<p>Your wish list is empty</p>";
    // Remove or hide the packing list when no saved destinations are left
    const packingListOutput = document.getElementById("packing-list-output");
    if (packingListOutput) {
      packingListOutput.innerHTML = ""; // Clear the packing list
    }
  }
};


const displaySuggestions = () => {
  outputDiv.innerHTML = "";

  const suggestionsHeading = document.createElement("h1");
  suggestionsHeading.textContent = "Destination Inspirations";
  outputDiv.appendChild(suggestionsHeading);

  const suggestions = decisionMaker.getUserInputsAndResults();

  if (suggestions.length > 0) {
    const suggestionsTable = displayTable(
      suggestions,
      (index) => {
        decisionMaker.deleteSuggestion(index);
        saveToLocalStorage();
        displaySuggestions();
      },
      (index) => {
        decisionMaker.saveSuggestion(index);
        saveToLocalStorage();
        displaySavedDestinations();
        displaySuggestions();
      },
      null // No packing list callback for suggestions table
    );
    outputDiv.appendChild(suggestionsTable);
  } else {
    outputDiv.innerHTML += "<p>No more suggestions available</p>";
    // Remove or hide the packing list when no suggestions are left
    const packingListOutput = document.getElementById("packing-list-output");
    if (packingListOutput) {
      packingListOutput.innerHTML = ""; // Clear the packing list
    }
  }
};

const validateBudget = (budget) => {
  if (budget < 500) {
    outputDiv.innerHTML = `<p style="color:red;">Budget must be at least $500</p>`;
    return false;
  }
  return true;
};

const displayDestinationsSuggestions = (budget, prefersWarmWeather) => {
  const suitableDestinations = decisionMaker.findSuitableDestinations(budget, prefersWarmWeather);

  decisionMaker.setUserInputsAndResults(
    suitableDestinations.map((dest, index) => ({
      ...dest,
      index,
    }))
  );

  saveToLocalStorage();
  displaySuggestions();
};

loadFromLocalStorage();
displaySavedDestinations();
displaySuggestions();

travelForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const budget = parseInt(budgetInput.value);
  const prefersWarmWeather = document.getElementById("warm-weather").checked;

  if (validateBudget(budget)) {
    displayDestinationsSuggestions(budget, prefersWarmWeather);
  }
});

document.getElementById("generate-packing-list").addEventListener("click", () => {
    const selectedDestination = decisionMaker.getSavedDestinations()[0]; // Example: Use the first saved destination
    if (!selectedDestination) {
        alert("Please save a destination first!");
        return;
    }

    const packingList = decisionMaker.generatePackingList(
        selectedDestination,
        selectedDestination.activities
    );

    displayPackingList(packingList);
});

const displayPackingList = (items) => {
  const outputDiv = document.getElementById("packing-list-output");
  outputDiv.innerHTML = items.map(item => `<p>${item}</p>`).join("");
};

