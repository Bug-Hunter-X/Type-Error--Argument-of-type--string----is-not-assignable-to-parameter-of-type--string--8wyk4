function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane User", "John Smith"];

// Solution 1: Iterate through the array
user.forEach(name => console.log(greeter(name)));

// Solution 2:  Handle the first element only (if that's intended)
 if (user.length > 0) {
    console.log(greeter(user[0]));
 } else {
    console.log("No users found");
}

// Solution 3:  Change the function signature to accept an array
function greeterArray(people: string[]): string[] {
    return people.map(person => "Hello, " + person);
}
console.log(greeterArray(user));