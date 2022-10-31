import React from 'react';

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
  };

  // liftiong the local state temperature to parent calculator and getting change method as well

export class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        // this.state = {
        //     temperature: ''
        // };
        // not keeping state locally
    }
    handleChange(e) {
        console.log("in here handleChange", this.props.onTemperatureChange);
        // this.setState({temperature : e.target.value});   // previous
        this.props.onTemperatureChange(e.target.value);
    }
    render() {
        // const temperature = this.state.temperature;
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter Temp in {scaleNames[scale]}:</legend>
                <input type="number" value={temperature} onChange={this.handleChange} />
            </fieldset>
        )

    }
}
