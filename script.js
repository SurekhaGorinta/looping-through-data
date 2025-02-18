// Sample data
const users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 22 }
];

// Using for...in loop to iterate over object properties
console.log("Using for...in loop:");
for (let index in users[0]) {
    console.log(`Property: ${index}`);
}

// Using for...of loop to iterate over array elements
console.log("\nUsing for...of loop:");
for (let user of users) {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
}

// Using while loop to iterate through the array
console.log("\nUsing while loop:");
let i = 0;
while (i < users.length) {
    console.log(`User ${i + 1}: ${users[i].name}`);
    i++;
}
 
