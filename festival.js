"use strict"


var main = (function() {

////////////Create consructor function
console.log("Hi!");
function Genre(name) {
    this.name = name;
    this.getData = function (){
        return this.name[0] + this.name[this.name.length -1 ] ///od nama vrati samo prvo i poslednje slovo Add method getData to Genre which returns formatted string as first and last letter of genre name
        // "Action" -> AN
        // "Drama" -> DA
        // "Comedy" -> CY
        
    }
}

function Movie(title,genre,length){
      this.title = title;
      this.duration = duration;
      this.genre = genre;
      this.getData = function (){
          return this.title + ", " + this.duration + ", " + this.genre.getData() + "\n"  ///a ovde vadis sve ove informacije i metodu funckije genre
        }
      }

      /////////////////Create constructor func movie
      
      function Program(date){
          this.date = date;
          this.programLength = 
          this.ListOfMovies = [];
          this.numberOfMovies;
          this.addMovie






}


 }












}