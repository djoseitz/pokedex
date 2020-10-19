alert('Hello world');

//Favorite food
let favoriteFood = 'Papa Leo\'s Pizza'

//Name
let myName = 'Dave'

//Template literals
let message = `Hello!
My name is 
${myName},
 and my favorite food is 
 ${favoriteFood}.`;

 document.write(message);

//Complex Data
let dave = {
    name: myName,
    food: favoriteFood,
    age: 35,
    spouse: 'Bonnie',
};

document.write(dave.spouse);
dave.age = 36;
document.write(dave.age);

let currentUserName = 'sam';

let userAges = {
  anne: 27,
  sam: 112,
  megan: 97
};

userAges[currentUserName] = 113;
document.write(userAges[currentUserName]);