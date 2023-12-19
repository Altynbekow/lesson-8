// // методы массива
// const array = [1]

// console.log(array);

// array.push(2);
// array.push(3);
// array.unshift(100);
// console.log(array);
// array.pop();
// array.pop();
// array.shift()

// console.log(array)
// []<----push(45) je push("text")
// [45,'text']->pop()-text ,pop()---45

// unshift(100)-->[]-->[100]
// unshit(101)-->[100]-->[100,101]

// shift()-->[101,100]-->[100]
// shift()-->[101] ->[]


const users = [
    { name: 'user 1',
        age: 45,
        // cars:67,
    },
    {
        name: 'user 2',
        age: 41,
        // cars:67,
    },
    {
        name: 'user 3',
        age: 25,
        // cars:67,
    },
    {
        name: 'kolbai',
        age: 25,
        // cars:67,
    },
    {
        name: 'Salamat',
        age: 25,
        // cars:67,
    }
]
// .map(function(value,index,array) {})-синтаксис

const userNames = users.map(getNames)

function getNames(user){
    console.log(user,'-------value--------');
    return user.age
    // console.log(index,'-------index--------');
    // console.log(array,'-------array--------');
}
console.log(userNames);
// .filter(callbackfunction(value,index,array) {})
const aldman = users.filter((users)=>{
    return users.name  === 'kolbai'
})
console.log(aldman)

const Numbers = [2,4,6,8]

const evenNumbers = Numbers.map((number)=>{
    return number *2 
})
console.log(evenNumbers)

const fruits = ["banana","Apple","PinApple","Strawberry"];

const filteredFruits = fruits.filter(fruit => fruit!== "Apple");

console.log(filteredFruits)