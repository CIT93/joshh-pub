console.log("hello from the inside the main.js file");

// let myVar; 

const myVar = "Josh";
const myVarType = typeof(myVar);
console.log("myVarType" + myVarType); //Old Way template strings
console.log('myVarType ${myVarType}'); //New way template strings



function runNow () {
    if(myVarType === "number") {
        console.log('will 11 this one run?')
    } else {
        console.log('this 13 line will run')
    }
}

runNow();
runNow();
