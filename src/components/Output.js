import React, { Component } from 'react';

class Output extends Component {

  render() {

    let{height,weight,bmi,bmiClass} = this.props.data;

    return (
      <div className="output">
      <h3>{height}</h3>
      <h3>{weight}</h3>
      <h3>{bmi}</h3>
      <h3 className={bmiClass === 'Obese' ? "danger" : ""}>{bmiClass}
      {bmiClass === 'Obese' ? 
      <a href='https://www.who.int/topics/obesity/en/'>What Can You do ?</a> : ""}
      </h3>
      </div>
    );
  }
}

export default Output;