class  Counter extends React.Component{
    constructor(props){
        super(props);


        this.addOne = this.addOne.bind(this);
        this.subOne = this.subOne.bind(this);
        this.ResetCount = this.ResetCount.bind(this);

        this.state = {
            count : 0
        };
    }
    componentDidMount() {
        try{
            const Strcount = localStorage.getItem('count');
            const count = parseInt(Strcount);
            if(!isNaN(count)) {
                this.setState(() => ({count}));
            }
        }
        catch (e) {
            // DO Nothing!
        }

    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.count!==this.state.count){
            //const json = JSON.stringify(this.state.options);
            console.log('Saving Data.');
            localStorage.setItem('count',this.state.count);
        }


    }

    addOne(){
        this.setState((prevState) => {
           return {
               count: prevState.count +1
           } ;
        });
        //this.state.count = this.state.count + 1;
        console.log(this.state.count)
    }
    subOne(){
        this.setState((prevState) => {
            return {
                count: prevState.count -1
            } ;
        });
        //this.state.count = this.state.count - 1;
        console.log(this.state.count)
    }
    ResetCount(){
        this.setState(() => {
            return {
                count: 0
            } ;
        });
        //this.state.count = 0;
        console.log(this.state.count)
    }
    render(){
        return(
          <div>
              <h1>Count: {this.state.count} </h1>
              <button onClick={this.addOne}>+1</button>
              <button onClick={this.subOne}>-1</button>
              <button onClick={this.ResetCount}>Reset</button>
          </div>
        );
    }
}

/*Counter.defaultProps = {
  count: 0
};*/

ReactDOM.render(<Counter />, document.getElementById('app'));



/*
let count = 0;
const addone = () => {
    count++;
    renderCounterApp();
};

const minusOne = () => {
    count--;
    renderCounterApp();
};

const resetOne = () => {
    count= 0;
    renderCounterApp();
};

const appRoot2 = document.getElementById('app3');

const renderCounterApp = () => {
    const temp3 = (
        <div>
            <h1>
                Count: {count}
            </h1>
            <button id = "my-id" className="button" onClick={addone}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={resetOne}>Reset</button>
        </div>
    );
    ReactDOM.render(temp3, appRoot2);

};

renderCounterApp();
*/
