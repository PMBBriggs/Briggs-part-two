
let name = prompt("Welcome to GC mini-golf! What's your name?");

console.log ("User's Name: " + name)

let holeCount = prompt("Hi " + name + "! Would you like to play 3 or 6 holes?");

console.log ("Number of Holes : " + holeCount)

let total = 0;

for (let i = 1; i <= holeCount; i++) {
    let score = Number(prompt("How many puts for Hole " + i + "?"));
    total += score;
}

console.log ("Total Score: " + total)

let par = (holeCount *= 3);

console.log ("Par: " + par);

if (total <= par){
    console.log ("Great job, " + name + "! Your total par was: " + (total -= par));
} else if (total >= par) {
    console.log ("Nice try " + name + ", your total par was: +" + (total -= par));
} else if (total === par) {
    console.log ( "Good game," + name + " Your total par was: 0")
}
   