 function sqauare(x) {
    return x*x;
};

//const squareArrow = (x) => {
//    return x*x ;
//};

const squareArrow = (x) => x * x;

console.log(sqauare(3));
console.log(squareArrow(9));



const getFirstName = (fullname) => {
    return fullname.split(' ')[0];
    
}

const getFname = (name) => name.split(' ')[0];


console.log(getFirstName('Muhammad Jasim'));
console.log(getFname('Muhammad Jasim'))