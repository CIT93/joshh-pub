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
function displayOutput() {
  for (obj of cfpData) {
    console.log(obj)
    const output = document.getElementById("output");
    const newH2 = document.createElement("h2");
    newH2.textContent = `Carbon Footprint ${obj.total}`;
     const newH3 = document.createElement("h3");
    newH3.textContent = 'Based on number in and size of home';
     const newP = document.createElement("p");
     newP.textContent = `This number is based on the number of people in the house of ${obj.cfpTotal} (score: ${obj.cfpTotal}),`;
     newP.textContent += ` and a ${obj.cfpTotal} size of home (score:${obj.cfpTotal}).`;
    output.appendChild(newH2);
    output.appendChild(newH3);
     output.appendChild(newP);
}
}

function start(houseHoldMembers, houseSize) {
  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseSizePTS = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePTS;
  // const cfpObj = {
  //   houseM: houseHoldMembers,
  //   houseS: houseSize,
  //   houseMPTS: houseHoldPTS,
  //   houseSPTS: houseSizePTS,
  //   cfpTotal: total
  // };
  cfpData.push({
    houseM: houseHoldMembers,
    houseS: houseSize,
    houseMPTS: houseHoldPTS,
    houseSPTS: houseSizePTS,
    cfpTotal: total
  });


 
}





start(2, "apt");
start(10, "large");
start(2, "small");
start(4, "medium");

displayOutput()
