
export class DecisionMaker {
  constructor(destinations) {
      this.destinations = destinations;
      this.userInputsAndResults = [];
      this.savedDestinations = [];
  }

  findSuitableDestinations(budget, prefersWarmWeather) {
      return this.destinations.filter((destination) => (
          destination.cost <= budget &&
          destination.warm === prefersWarmWeather
      ));
  }

  saveSuggestion(index) {
      const destinationToSave = this.userInputsAndResults[index];

      if (!this.savedDestinations.some(dest => dest.name === destinationToSave.name)) {
          this.savedDestinations.push(destinationToSave); 
          this.userInputsAndResults.splice(index, 1); 
      }
  }

  deleteSuggestion(index) {
      this.userInputsAndResults.splice(index, 1); 
  }

  removeFromSaved(index) {
      this.savedDestinations.splice(index, 1); 
  }

  getUserInputsAndResults() {
      return this.userInputsAndResults;
  }

  getSavedDestinations() {
      return this.savedDestinations;
  }

  setUserInputsAndResults(inputs) {
      this.userInputsAndResults = inputs;
  }

  setSavedDestinations(saved) {
      this.savedDestinations = saved;
  }

  // Packing List Generator method inside the class
  generatePackingList(destination, activities) {
      const baseItems = ["Passport", "Phone charger", "Toiletries", "Clothing"];
      const weatherSpecificItems = destination.warm
          ? ["Sunscreen", "Light clothing", "Hat"]
          : ["Thermal clothing", "Jacket", "Boots"];
      const activitySpecificItems = activities.includes("skiing")
          ? ["Ski gear", "Snow gloves"]
          : activities.includes("surfing")
          ? ["Swimsuit", "Towel"]
          : [];

      return [...baseItems, ...weatherSpecificItems, ...activitySpecificItems];
  }
}
