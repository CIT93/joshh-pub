const cfpData = [];

function determineHouseSizePts(size) {
  let houseSizePTS = 0;
  if (size === "large") {
    houseSizePTS = 10;
  } else if (size === "medium") {
    houseSizePTS = 7;
  } else if (size === "small") {
    houseSizePTS = 4;
  } else if (size === "apt") {
    houseSizePTS = 2;
  }
  return houseSizePTS;
}

function determineHouseHoldPts(numberInHousehold) {
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

function start(houseHoldMembers, houseSize) {
  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseSizePTS = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePTS;
  cfpData.push([
    houseHoldMembers,
    houseSize,
    houseHoldPTS,
    houseSizePTS,
    total,
  ]);
}

function displayOutput() {

}

start(5, "apt");
start(4, "large");
start(3, "medium");
start(2, "small");

displayOutput()