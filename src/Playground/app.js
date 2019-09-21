class IndecisionApp extends React.Component {
    constructor(props){
        super(props);

        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePickOptions = this.handlePickOptions.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handlrDeleteSingleOpt = this.handlrDeleteSingleOpt.bind(this);

        this.state = {
            options : []
        };
    }

    componentDidMount() {
        try{
            console.log('Fetching Data.');
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options) {
                this.setState(() => ({options}));
            }
        }
        catch (e) {
            // DO Nothing!
        }

    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.options.length!== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            console.log('Saving Data.');
            localStorage.setItem('options',json);
        }


    }
    componentWillUnmount(){
        console.log('Unmount');
    }

    handleDeleteOptions(){
        /*this.setState(() => {
            return{
              options: []
            };
        });*/
        this.setState (() => ({ options: [] }));
    }
    handlrDeleteSingleOpt(optionToRemove){
        //console.log('hdo',option);
        this.setState((prevState) =>({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }

    handlePickOptions(){
        const  randNum = Math.floor(Math.random()* this.state.options.length);
        const option = this.state.options[randNum];
        alert(option);
    }


    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add item.';
        }
        else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists.';
        }
        else {
            /*this.setState((prevState) => {
                return {
                    options: prevState.options.concat([option])
                };
            });*/
            this.setState((prevState) => ({
                options:prevState.options.concat([option])
            }));
        }
    }
    render() {
        //const title ='Indecision App';
        const subTitle = 'Put your life in the hands of Computer.';
        return (
            <div>
                <Header subTitle={subTitle}/>
                <Action
                    hasOptions = {this.state.options.length>0}
                    handlePick = {this.handlePickOptions}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOpts = {this.handleDeleteOptions}
                    handleDelSingleOpt = {this.handlrDeleteSingleOpt}
                />
                <AddOption
                    handleAddOpts = {this.handleAddOption}

                />
            </div>
        );
    }
}

/*IndecisionApp.defaultProps = {
  options: []
};*/
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subTitle && <h2>{props.subTitle}</h2>}
        </div>
    );
};

Header.defaultProps = {
  title:'Indecision App'
};
/*class Header extends React.Component{
    render(){
        //console.log(this.props);
        return (
          <div>
              <h1>{this.props.title}</h1>
              <h2>{this.props.subTitle}</h2>
          </div>
        );
    }
}*/

const Action = (props) => {
    return (
        <div>
            <button onClick={props.handlePick}
                    disabled={!props.hasOptions}>
                What should I do?
            </button>
        </div>
    );
};
/*class  Action extends React.Component{
   /!* handlePick(){
        //alert('handlePick')

    }*!/
    render(){
        return (
          <div>
              <button onClick={this.props.handlePick}
              disabled={!this.props.hasOptions}>
                  What should I do?
              </button>
          </div>
        );
    }
}*/

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOpts}>Remove All</button>
            {props.options.length===0 && <p>Please add an option to get Started!</p>}
            {
                props.options.map((option) => (
                    <Option
                        key = {option}
                        optionText={option}
                        handleDelSingleOpt = {props.handleDelSingleOpt}
                    />
                ))
            }

        </div>
    );
};

/*class Options extends React.Component{
/!*    removeOption(){
        console.log(this.props.options);
        //alert('Remove Option')
    }*!/
    render(){
        return (
            <div>
                {
                    this.props.options.map((option) => <Option key = {option} optionText={option}/>)
                }
                <button onClick={this.props.handleDeleteOpts}>Remove</button>
            </div>
        );
    }
}*/

const Option = (props) => {
    return (
        <div>
            Options: {props.optionText}
            <button onClick={(e) => {
                props.handleDelSingleOpt(props.optionText)
            }}
            >
                Remove
            </button>
        </div>
    );
};


/*class Option extends React.Component{
    render(){
        return (
          <div>
              Options: {this.props.optionText}
          </div>
        );
    }
}*/


class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.formSubmit = this.formSubmit.bind(this);
        this.state = {
            error:undefined
        };
    }
    formSubmit(e){
    e.preventDefault();
    const option = e.target.elements.option.value.trim();

    const error = this.props.handleAddOpts(option);
    /*this.setState(() => {
        return {error};
    });*/
    this.setState(() => ({error}));
    if(!error){
        e.target.elements.option.value = '';
    }

}
    render(){
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.formSubmit}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

/*const User = (props) => {
  return (
      <div>
          <p>Name: {props.name}</p>
          <p>Age: {props.age}</p>
      </div>
  );
};*/

ReactDOM.render(<IndecisionApp options={['One','Two','Three']}/>,document.getElementById('app'));