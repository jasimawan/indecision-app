console.log("App is running")
const appObject = {
    Title: 'Indecision App',
    Subtitle: 'Hello to the React App',
    options: []
};
//JSX = JavaScript XML

function getSubtitle(Subtitle){
    if(Subtitle){
        return <p>{Subtitle}</p>
    }
}

const onFormSubmit = (e) => {

    e.preventDefault();
    const option = e.target.elements.option.value;
    //console.log('Form Submitted.');
    if(option){
        appObject .options.push(option);
        e.target.elements.option.value = '';
        renderTempFunct();
    }
};

const resetList = (e) => {
    e.preventDefault();
    appObject.options = [];
    renderTempFunct();
};

const onMakeDecision = () => {
    const  randNum = Math.floor(Math.random()* appObject.options.length);
    const option = appObject.options[randNum];
    alert(option)
    //console.log(randNum)
}
const appRoot = document.getElementById('app');

//const numbers = [10,20,30];

const renderTempFunct = () => {
    const temp = (
        <div>
            <h1>{appObject.Title}</h1>
            {getSubtitle(appObject.Subtitle)}
            <p>{appObject.options.length>0 ? 'Here are your Options:' + appObject.options : 'No options' }</p>
            <p>{appObject.options.length}</p>
            <button onClick = {resetList}>Reset</button>

            <button disabled = {appObject.options.length===0}  onClick={onMakeDecision}>What should I do?</button>

            <ol>
                {
                    appObject.options.map((option) =><li key = {option}>{option}</li>)
                }
            </ol>
            <form onSubmit = {onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );


    ReactDOM.render(temp, appRoot);
};

renderTempFunct();

const user = {
    name : 'M.Jasim',
    age :'24',
    location: 'Islamabad'
};

function getLoc(location){
    if (location){
        return <p>Location: {location}</p>;

    }
}
//var userNamr = 'Jasim';
//var userAge = 23;
//var userloc = 'Islamabad,Pakustan';

const temp2 = (
    <div>
        <h1>{user.name ? user.name : 'Annonymouse'}</h1>
        {(user.age && user.age>=18) && <p>Age: {user.age}</p>}
        {getLoc(user.location)}
    </div>
);


const appRoot1 = document.getElementById('app2');

ReactDOM.render(temp2, appRoot1);





