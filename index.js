import readlineSync from 'readline-sync';

let resp = "";
let arr = [];

console.log("Input:\n");

while (resp != "SAIR") {
    resp = readlineSync.question("");
    arr.push(resp);
}
console.log(arr.sort());
arr.splice("SAIR");


