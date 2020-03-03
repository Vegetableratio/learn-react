import React from 'react';
import ReactDOM from 'react-dom';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}


class TemperatureInput extends React.Component {
  handleTemperatureChange = (e) => {
    this.props.onTemperatureChange(e.target.value, this.props.scale)
  }
  render() {
    const scale = this.props.scale;
    const temperature = this.props.temperature;

    return (
      <fieldset>
        {this.props.children}
        <legend>Enter temperature in Celsius:{scaleNames[scale]}:</legend>
        <input value={temperature} onChange={this.handleTemperatureChange} />
      </fieldset>
    )
  }
}

class Calculator extends React.Component {
  constructor(props) {
    super(props)
    // 状态提升
    this.state = {
      temperature: '',
      scale: 'c'
    }
  }

  changeTemperature = (temperature, scale) => {
    this.setState({
      temperature, scale
    })
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
    
    return (
      <div>
        <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.changeTemperature} >
          <h1>TEST</h1>
        </TemperatureInput>
        <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.changeTemperature} />
      </div>
    )
  }
}

ReactDOM.render(
  <Calculator />,
  document.getElementById('root')
)