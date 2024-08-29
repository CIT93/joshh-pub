// function determineHouseHoldPts(numberInHousehold) {
//     console.log("Inside the function")
//     if(numberInHousehold === 1) {
//         carbonFootprintPoints = carbonFootprintPoints + 14;
//     } else if(numberInHousehold === 2) {
//         carbonFootprintPoints = carbonFootprintPoints + 12;
//     } else if(numberInHousehold === 3) {
//         carbonFootprintPoints = carbonFootprintPoints + 10;
//     } else if(numberInHousehold === 4) {
//         carbonFootprintPoints = carbonFootprintPoints + 8;
//     } else if(numberInHousehold === 5) {
//         carbonFootprintPoints = carbonFootprintPoints + 6;
//     } else if(numberInHousehold === 6) {
//         carbonFootprintPoints = carbonFootprintPoints + 4;
//     } else if(numberInHousehold > 6) {
//         carbonFootprintPoints = carbonFootprintPoints + 2;
//     }
//        console.log(`Based on the number of members of the household of ${numberInHousehold} the points would be ${carbonFootprintPoints}.`)
//     }

//  let carbonFootprintPoints = 0;
// //  const numberInHousehold = 3;

// // Global Scope

// determineHouseHoldPts(3)
// determineHouseHoldPts(4)


function addHomeSizePoints(homeSize) {
    let score = 0

    if (homeSize === 'large') {
        score += 10;
    } else if (homeSize === 'medium') {
        score += 7;
    } else if (homeSize === 'small') {
        score += 4;
    } else if (homeSize === 'apartment') {
        score += 2;
    } else {
        console.error('Invalid home size provided');      
    }

    return score;
}

let homeSize = 'medium';
let totalscore = addHomeSizePoints(homeSize);
console.log(`The score for the ${homeSize} home is: ${totalscore}`);