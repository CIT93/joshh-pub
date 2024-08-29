 let carbonFootprintPoints = 0;
 const numberInHousehold = 1;

 if(numberInHousehold === 1) {
     carbonFootprintPonts = carbonFootprintPoints + 14;
 } else if(numberInHousehold === 2) {
     carbonFootprintPonts = carbonFootprintPoints + 12;
 } else if(numberInHousehold === 3) {
     carbonFootprintPonts = carbonFootprintPoints + 10;
 } else if(numberInHousehold === 4) {
     carbonFootprintPonts = carbonFootprintPoints + 8;
 } else if(numberInHousehold === 5) {
     carbonFootprintPonts = carbonFootprintPoints + 6;
 } else if(numberInHousehold === 6) {
     carbonFootprintPonts = carbonFootprintPoints + 4;
 } else if(numberInHousehold > 6) {
     carbonFootprintPonts = carbonFootprintPoints + 2;
 }

console.log('Based on the number of members of the household of ${numberInHousehold} the points would be ${carbonFootprintPoints}')