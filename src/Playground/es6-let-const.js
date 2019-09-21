var nameVar = 'Jasim';
var nameVar = 'Awan';
console.log('nameVar', nameVar);

let nameLet = 'Ahmed';
nameLet = 'yar';
console.log('nameLet' , nameLet);

const nameConst = 'Saqib';
console.log('nameConst',nameConst);

function getPetName(){
    var petName = 'Milo';
    return petName;
}

var pet = getPetName();
console.log(pet)

//Block Level Scoping

var fullName = 'Muhammad Jasim';
let firstName;

if(fullName){
     firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);