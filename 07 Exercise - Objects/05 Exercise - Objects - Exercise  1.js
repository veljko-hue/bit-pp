
// //1.Create an object that represents your favourite coffee. Please include coffee name, strength, flavour, milk, sugar, … everything you like!

// var coffee = {
//     name: "oreo",
//     strength: "7/10",
//     milk: "no",
//     sugar: "no"

// };

// console.log(coffee);

// var coffee2 = {
//     name: "strong",
//     strength: 10,
//     milk: false,
//     sugar: false
// }

// console.log(coffee2);

// //2. Create an object that represents your favourite movie. Please include title, actors, director, genre, popularity. 

// var movie = {
//     title: "bit",
//     actors: ["Brad Pit", "Nolo", "Tarantino"],
//     director: "Who Knows",
//     genre: "Comedy",
//     imdb: "9/10"
// }

// console.log(movie.actors[1]);

// var movie2 = {
//     title: "Citizen Kane",
//     actors: ["Orson Welles", "Joseph Cotten"],
//     director: "Orson Welles",
//     genre: "Drama",
//     imdb: "greatest movie of all time"
// }

// console.log(movie2.actors[1]);

// //3. Write a function that creates an object that represents a project. Each project is described by: description,  
// // programming language, git repository, boolean status that says if the project is in development or not. 
// // Add a method that prints out the project's repository,  a method that checks if the project is written in JavaScript 
// // as well as a method that checks if the project is in development or not.


// function project(pn, ds, pl, gr, bs) {

//     var pr = {
//         projectName: pn,
//         description: ds,
//         programmingLanguage: pl,
//         gitRepository: gr,
//         booleanStatus: bs,

//     }
//     return pr;
// }


// var pro = project("objects", "learning", "js", "objects-git", "true");

// console.log(pro);

//4. Write a function that creates an object that represents a culinary recipe. 
// Each recipe is described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients, preparing time, preparing instruction. 
// Add a method that prints out all the ingredients necessary for the meal preparation. 
// Add a method that checks if a meal can be prepared for 15 minutes. 
// Add a method that changes the type of cuisine to the given value. 
// Add a method that delete a given ingredient from the list of ingredients.


// function buildRecipe(name, c, comp, ing, time, instructions) {
//     return {
//         name: name,
//         cuisine: c,
//         complexity: comp,
//         ingredients: ing,
//         preparingTime: time,
//         instructions: instructions,
//         getIngredinets: function () {
//             return this.ingredients;
//         },
//         canBePreparedFast: function () {
//             if (this.preparingTime < 20) {
//                 return "Can be done quickly"
//             }

//             return "It take\'s more then few minutes"
//         },
//         setCousine: function (cus) {
//             this.cuisine = cus;
//         },
//         deleteIngredient: function (b) {
//             var filterIngredients = []
//             for (var i = 0; i < this.ingredients.length; i++) {
//                 if (this.ingredients[i] !== b) {
//                     filterIngredients[filterIngredients.length] = this.ingredients[i]
//                 }
//             }

//             this.ingredients = filterIngredients;
//         }
//     }
// }






// var carbonara = buildRecipe("Carbonara", "it", 2, ["pasta", "parmezan", "eggs", "sos"], 30, "improvize");


// console.log(carbonara.getIngredinets());
// console.log(carbonara.deleteIngredient("parmezan"));
// console.log(carbonara.getIngredinets());
// console.log(carbonara.canBePreparedFast())
// carbonara.setCousine("de");
// console.log(carbonara.cuisine);

// console.log(carbonara.cuisine);
// console.log(carbonara);


//4. Write a function that creates an object that represents a project. Each project is described by: description,  
// programming language, git repository, boolean status that says if the project is in development or not. 
// Add a method that prints out the project's repository,  a method that checks if the project is written in JavaScript 
// as well as a method that checks if the project is in development or not.


function Project(pn, ds, pl, gr, bs) {

    this.name = pn;
    this.description = ds;
    this.programmingLanguage = pl;
    this.gitRepository = gr;
    this.booleanStatus = bs;

    this.getName = function () {
        return this.name
    }


}



var pro = new Project("objects", "learning", "js", "objects-git", "true");

console.log(pro);
