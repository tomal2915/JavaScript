var Age = [10, 15, 20, 25, 30];
var age = Age[3];
Age[2] = 45;
console.log(age);

console.log("Replace array item:",Age);
console.log("Length:",Age.length);


Age.push("Double push:",15);
console.log("After push:",Age);

console.log("Length:",Age.length);
console.log("Remove last element:",Age.pop());
console.log(Age);
console.log("Remove first element:",Age.shift());
console.log(Age);
console.log("Add first element:",Age.unshift(40));
console.log(Age);
console.log(Age.splice(0,2));//sclice

console.log("Length:",Age.length);
