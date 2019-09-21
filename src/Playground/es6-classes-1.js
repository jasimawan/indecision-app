class Person {
    constructor(name='Anonymous', age= 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting(){
        //return 'Hi, I am ' +this.name+ '!';
        return `Hi, I am ${this.name}!`;
    }
    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`;
    }
}
class Student extends Person {
    constructor(name, age , major){
        super(name,age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription(){
        let desc = super.getDescription();
        if(this.hasMajor()){
            desc += ` His/Her major is ${this.major}`;
        }

        return desc;
    }
}

class Traveler extends Person{
    constructor(name , age , homelocation){
        super(name,age);
        this.homelocation = homelocation;
    }
    hasLocation(){
        return !!this.homelocation;
    }
    getGreeting(){
        let greeting = super.getGreeting();
        if(this.hasLocation()){
            greeting += ` I am visiting from Islamabad.`
        }
        return greeting;
    }
}

const me = new Person('Muhammad Jasim', 22);
console.log(me.getDescription());
const me2 = new Student('Muhammad Jasim');
console.log(me2.getDescription());
const me3 = new Student('Muhammad Jasim',22,'Computer Science');
console.log(me3.getDescription());

const traveler = new Traveler('Muahammad Jasim',22,'Islamabad');
const traveler2 = new Traveler('Jasim',22);
console.log(traveler.getGreeting());
console.log(traveler2.getGreeting());
