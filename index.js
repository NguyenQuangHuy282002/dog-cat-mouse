var Dog = require('./Dog');
var Cat = require('./Cat');

var cat = new Cat();
var dog = new Dog('Tom');

dog.eat(cat);

console.log(dog);