//ASSIGNMENT NO 1 : BUILDING YOUR FRIEND LIST
const people = {
    friends: [],
};
const friend1 = {
    firstName: "laiba",
    lastName: "tayyaba",
    id: 1,
};
const friend2 = {
    firstName: "laiba",
    lastName: "Bilal",
    id: 2,
};
const friend3 = {
    firstName: "kainat",
    lastName: "Ali",
    id: 3,
};
people.friends.push(friend1, friend2, friend3);
console.log(people);
// //ASSIGNMENT NO 2 : MANIPULATING AN ARRAY : REARRANGING WORDS
const scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];
scrambledArray.splice(2, 2);
scrambledArray.pop();
scrambledArray.unshift("I");
scrambledArray.splice(1, 2);
scrambledArray.splice(3, 0, "student", "of");
console.log(scrambledArray.join(" "));
// ASSIGNMENT NO 3 : COMPANY PRODUCT CATALOG
const inventory = [];
const product1 = {
    name: "Mehraan",
    model: "2007",
    cost: 200000,
    quantity: 4,
};
const product2 = {
    name: "Alto",
    model: "2009",
    cost: 600000,
    quantity: 5,
};
const product3 = {
    name: "Cvic",
    model: "2009",
    cost: 1000000,
    quantity: 2,
};
inventory.push(product1, product2, product3);
console.log(inventory);
console.log(inventory[2].quantity); // accessing quantity of product3
console.log(inventory[1].cost); // accessing cost of product2
//CLASS LIST
let students = [
    {
        name: "fatima",
        seniorStatus: false,
        completedAssignments: true,
    },
    {
        name: "Hira",
        seniorStatus: false,
        completedAssignments: false,
    },
    {
        name: "Aliza",
        seniorStatus: true,
        completedAssignments: true,
    },
    {
        name: "laiba",
        seniorStatus: true,
        completedAssignments: false,
    },
    {
        name: "Afifa",
        seniorStatus: true,
        completedAssignments: false,
    },
];
console.log("THIS IS YOUR CLASS LIST", students);
//FINDING SENIOR STUDENT
let seniorStudent = function (students) {
    return students.filter(student => student.seniorStatus && student.completedAssignments);
};
const seniorstudents = seniorStudent(students);
seniorstudents.forEach(students => {
    console.log("CONGRATULATIONS YOU ARE A SENIOR STUDENT ", students);
});
//UPDATING STUDENT LIST
let updatingList = function (students) {
    return students.filter(students => students.completedAssignments);
};
students = updatingList(students);
console.log("THE UPDATED STUDENT LIST IS ", students);
export {};
