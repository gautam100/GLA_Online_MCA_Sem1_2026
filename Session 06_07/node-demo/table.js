var readlineSync = require("readline-sync");

var table = readlineSync.question("Enter number: ");
let res = 1
for(let i=1; i<=10; i++){
    res = parseInt(table) * i
    console.log(`${table} X ${i} = ${res}`)
}
