//import validator from 'validator';
import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './Components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

ReactDOM.render(<IndecisionApp/>,document.getElementById('app'));

/*const Layout = (props) => {
    return (
      <div>
          <p>header</p>
          {props.children}
          <p>footer</p>
      </div>
    );
};
const temp = (
    <div>
        <h1>Page Title</h1>
        <p>This is my page.</p>
    </div>
);
ReactDOM.render((
    <Layout>
        <div>
            <h1>Page Title</h1>
            <p>This is inline</p>
        </div>
    </Layout>
), document.getElementById('app'));*/

/*class oldSyntax {
    constructor(){
        this.name = 'Jasim';
        this.getGreeting = this.getGreeting.bind(this);
    }
    getGreeting(){
        return `Hello. My name is ${this.name}`;
    }
}

class newSyntax {
    name = 'Jasim';
    getGreeting = () => {
        return `Hello. My name is ${this.name}`;
    }

}

const oldSynt = new oldSyntax();
const getGreet = oldSynt.getGreeting;
console.log(oldSyntax);
console.log(getGreet());

const newSynt = new newSyntax();
console.log(newSynt);
const newGetGreet = newSynt.getGreeting;
console.log(newGetGreet());*/


/*
console.log(validator.isEmail('test@gmail.com'));
const temp = <p>Hello from jsx react.</p>;
ReactDOM.render(temp,document.getElementById('app'));

/!*
//import './utils.js';
//import subtract ,{square,add} from "./utils.js";
import isSenior ,{isAdult,canDrink} from "./person.js";

console.log('app.js is running');
//console.log(square(4));
//console.log(add(4,5));
//console.log(subtract(100,20));
console.log(isAdult(12));
console.log(canDrink(22));
// console.log(isSenior(63));

*!/*/

