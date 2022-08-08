import readlineSync from 'readline-sync';

let resp = "";
let arr = [];

console.log("Input:\n");

while (!resp.toLowerCase().includes( "sair".toLowerCase())) {
    resp = readlineSync.question("");
    arr.push(resp);
}
arr.pop();
console.log(arr.sort());



