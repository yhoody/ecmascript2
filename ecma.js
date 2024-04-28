const people = [
    {
        fName: 'Ada', 
        age: 12, 
        email: 'me@me.com', 
        phone: 2393838747,
    },
    {
        fName: 'Obi', 
        age: 19, 
        email: 'you@me.com', 
        phone: 3633838747,
    },
    {
        fName: 'Nti', 
        age: 16, 
        email: 'the@you.com', 
        phone: 8839838747,
    },
    {
        fName: 'Eze', 
        age: 17, 
        email: 'her@them.com', 
        phone: 309489747,
    },
    {
        fName: 'Ada', 
        age: 21, 
        email: 'his@me.com', 
        phone: 8793838747,
    },
]

// Array Method .find()
const findPerson = orange => {
    return people.find((stress) => stress.fName === orange)
}
// console.log(findPerson('Ada'))


const calcProfit = (sp, cp) => sp - cp
calcProfit(30,90)

// Array Methos .findIndex()
const showPosition = () => {
    let position = people.findIndex((stress) => stress.age > 18)
    return position 
}
// console.log(showPosition()) 

// Iterative Methods .forEach()
// const showName = () => {
//     return people.forEach((stress) => alert(stress.fName))
// }
// showName()

// Iterative Methods .filter()
const belowVotingAge = people.filter((belowVotingAge => belowVotingAge.age < 18))
console.log(belowVotingAge)

const products = [
    {
        name: 'Milk',
        price: 90,
    },
    {
        name: 'Pap',
        price: 50,
    },
    {
        name: 'Akara',
        price: 20,
    },
    {
        name: 'Dodo',
        price: 5,
    },
    {
        name: 'Moi-moi',
        price: 40,
    },
]
const cheapProduct = products.filter(cheapProduct => cheapProduct.price < 50)
console.log(cheapProduct) 

const updatedPrice = products.map(updatedPrice => ({ ...updatedPrice, price: updatedPrice.price + 5 }));
console.log(updatedPrice);


