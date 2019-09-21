// arguments obj - no longer bound with arrow functs
const add = (a,b)  => {
    //console.log(arguments);
    return a+b;
};

console.log(add(5,2)); 

// this keyword - no longer bound 

const user = {
    name: 'Jasim',
    cities: ['Lahore','Gujranwala','Islamabad'],
    printPlacesLived(){

        return this.cities.map((city) => this.name + ' has lived in ' + city);
         
        //console.log(this.name);
        //console.log(this.cities);
        //const that = this;
    
        //this.cities.forEach((city)=>{
        //console.log(this.name+ ' has lived in ' + city)
        //});
}
};

console.log(user.printPlacesLived());


const multiplier = {
    numbers : [1,2,3],
    multiplyBy : 2 ,
    multiply(){
        return this.numbers.map((numbers) =>  numbers * this.multiplyBy);
    }
};

console.log(multiplier.multiply());