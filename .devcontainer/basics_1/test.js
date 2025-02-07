console.log("sahil")
let obj1 = { name: "Alice" };
let obj2 = obj1; // obj2 points to the same memory location as obj1
obj2.name = "Bob";
console.log(obj1.name); // "Bob" (changed)
