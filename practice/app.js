// const a = 5;
// let b = 10;
// let myName = "jim";

// console.log(a + 2)
// console.log(a - 2)
// console.log(a / 2)
// console.log("hi " + myName)

// myName = "James";

// const amIFat = false;
// console.log(amIFat)

// const nonsense = [1, 2, "hello", false, null, undefined];
// console.log(nonsense[4]);
// nonsense.push("sunday");
// console.log(nonsense);

// const player = {
//     name: "jim",
//     points: 10,
//     fat: false,
// };
// console.log(player);
// console.log(player.name);
// console.log(player.fat);
// player.fat = true;
// console.log(player);

// player.lastName = "tomato";
// console.log(player);


// function sayHello(nameOfPerson, age){
//     console.log("hello, " + nameOfPerson + " is " + age);
// }

// sayHello("jim", 10);
// sayHello("james", 20);
// sayHello("van", 30);

// function plus(a, b){
//     console.log(a, b);
//     console.log(a + b);
//     console.log(a - b);
// }
// plus(5, 10) 

const player = {
    name: "jim",
    sayHello: function(otherPersonsName){
        console.log("hello " + otherPersonsName + " nice to meet you");
    },
};

console.log(player.name);
player.sayHello("koo");
player.sayHello("kang");
