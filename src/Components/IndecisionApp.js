import React from "react";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import AddOption from "./AddOption";
import OptionModal from './OptionModal';

export  default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption : undefined
    };

    /*constructor(props){
        super(props);

        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePickOptions = this.handlePickOptions.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteSingleOpt = this.handleDeleteSingleOpt.bind(this);

        this.state = {
            options : []
        };
    }*/

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

    handleSelectedOption = () => {
      this.setState(() => ({
        selectedOption : undefined
      }));
    };

    handleDeleteOptions = () => {

        this.setState (() => ({ options: [] }));
    };
    handleDeleteSingleOpt = (optionToRemove) => {
        //console.log('hdo',option);
        this.setState((prevState) =>({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    };

    handlePickOptions = () => {
        const  randNum = Math.floor(Math.random()* this.state.options.length);
        const option = this.state.options[randNum];
        //alert(option);
        this.setState(() => ({
                selectedOption: option
        }));
    };

    handleAddOption = (option) => {
        if (!option) {
            return 'Enter valid value to add item.';
        }
        else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists.';
        }
        else {

            this.setState((prevState) => ({
                options:prevState.options.concat([option])
            }));
        }
    };

    render() {

        const subTitle = 'Put your life in the hands of Computer.';
        return (
            <div>
                <Header subTitle={subTitle}/>
                <div className="container">
                <Action
                    hasOptions = {this.state.options.length>0}
                    handlePick = {this.handlePickOptions}
                />
                    <div className="widget">
                        <Options
                            options={this.state.options}
                            handleDeleteOpts = {this.handleDeleteOptions}
                            handleDelSingleOpt = {this.handleDeleteSingleOpt}
                        />
                        <AddOption
                            handleAddOpts = {this.handleAddOption}
                        />
                    </div>

                </div>
                <OptionModal
                    selectedOpt = {this.state.selectedOption}
                    handleSelectedOpt = {this.handleSelectedOption}
                />
            </div>
        );
    }
}