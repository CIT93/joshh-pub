const determineHouseSizePoints = (size = "small") => { //Default to small.
    let houseSizePoints = 0;
    if (size === "large") {
      houseSizePoints = 10;
    } else if (size === "medium") {
      houseSizePoints = 7;
    } else if (size === "small") {
      houseSizePoints = 4;
    } else if (size === "apt") {
      houseSizePoints = 2;
    }
    return houseSizePoints;
  }
  
  const determineHouseHoldPoints = (numberInHousehold = 1) => { // Default to 1 Person.
    let houseHoldPoints = 0;
    if (numberInHousehold === 1) {
      houseHoldPoints = 14;
    } else if (numberInHousehold === 2) {
      houseHoldPoints = 12;
    } else if (numberInHousehold === 3) {
      houseHoldPoints = 10;
    } else if (numberInHousehold === 4) {
      houseHoldPoints = 8;
    } else if (numberInHousehold === 5) {
      houseHoldPoints = 6;
    } else if (numberInHousehold === 6) {
      houseHoldPoints = 4;
    } else if (numberInHousehold > 6) {
      houseHoldPoints = 2;
    }
   
    return houseHoldPoints; 
}
const determineFoodFootprintPoints = (meatConsumption = "vegetarian", foodType = "balanced") => { // Default to vegetarian and balanced diet.
  let meatPoints = 0;
  let foodTypePoints = 0;

  if (meatConsumption === "daily") {
    meatPoints = 10;
  } else if (meatConsumption === "few") {
    meatPoints = 8;
  } else if (meatConsumption === "vegetarian") {
    meatPoints = 4;
  } else if (meatConsumption === "vegan") {
    meatPoints = 2;
  }


  if (foodType === "prepackaged") {
    foodTypePoints = 12;
  } else if (foodType === "balanced") {
    foodTypePoints = 6;
  } else if (foodType === "local") {
    foodTypePoints = 2;
  }

  return meatPoints + foodTypePoints; }

export { determineHouseSizePoints, determineHouseHoldPoints, determineFoodFootprintPoints };
