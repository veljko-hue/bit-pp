

var a = "1";
var result = "";

switch (a){
    case 1:
      result = "Number";
      break;
      case "1":
      result = "String 1";
      break;
      default: 
      result = "I don\'t know";
      break;
}

console.log(result);


/////////////////////////////////////////////  Fall-through in switch statement


var car = 'fiat';
 var result = '';

 switch (car) {
   case 'vw':
   case 'audi':
   case 'bmw':
     result = 'Great german car!';
     break;
   case 'fiat':
     result = 'Good Italian car!';
     break;
   default:
     result = 'I don\'t know';
     break;
    }

    console.log(result);
    