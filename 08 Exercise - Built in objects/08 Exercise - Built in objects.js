// var primitiveString = 'Hello';
// console.log (typeof primitiveString);

// var objString = new String('World');
// console.log (typeof objString);

// // string(1)

// console.log(string([1,2,3]))

var str = new String("Potato head")
console.log(str.toUpperCase())

var str = new String("Potato head");
// str.toUpperCase();  

var b = str.toUpperCase()
console.log(b)


var str = new String("Potato head");


var b = str.charAt()
console.log(b)


var str = new String("Potato head");


var b = str.slice(1, 5)
console.log(b)

var str = new String("Potato head");


var b = str.substring(1, 5)
console.log(b)

var str = new String("Potato head");

var b = str.split(" ")
console.log(b)
/////////////////////////////////////////////////////// sva slova a ne reci////// potreban je space////karakter po kojem delis



var a = new Array(1, 2, 3, 'four');
console.log(a);

var a2 = new Array(5);
console.log(a2);

var hero = {
    name: 'Superman',
    sayName: function () {
        return 'Hi I am ' + this.name;
    }
};

console.log(hero)


var hero = new Hero();
hero.occupation;

function Hero() { }
var hero = new Hero();
var obj = {};

console.log(hero instanceof Hero);
hero instanceof Object;
obj instanceof Object;


var original = { howmany: 1 };
var mycopy = original;

mycopy.howmany;
mycopy.howmany = 100;
original.howmany;


var dog = {
    name: 'Rex',
    talk: function () {
        console.log('Woof, woof!');
    }
};
console.log(dog);