import React, { Component } from 'react';
import './App.css';
import Range from './components/Range';
import Output from './components/Output';
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      height:170,
      weight:65,
      bmi: 22.49,
      bmiClass: 'Normal'
    }
  }

heightChange = (height) => {
  this.setState({height : height },this.setBmi);
} 

weightChange = (weight) => {
  this.setState({weight : weight },this.setBmi);
}  

setBmi () {
  let bmi = ((this.state.weight / this.state.height/ this.state.height) * 1000).toFixed(2);
  this.setState({bmi:bmi,bmiClass: this.setBmiClass(bmi)},()=>{
    console.log(this.state)
  })
}

setBmiClass(bmi){
  if(bmi < 18.5 ) return "Underweight";
  if(bmi >= 18.5 && bmi <= 24.9 ) return "Normal";
  if(bmi >= 25 && bmi <= 29.9 ) return "Overweight";
  if(bmi >= 30) return "Obese";
}

  render(){
    const {height,weight} = this.state;

    return (
      <div className="App">
      <h1>BMI Calculator</h1>
      <form >
        <div>
          <label>Height</label>
          <Range value={height} onChange={this.heightChange}/>
        </div>
        <div>
          <label>Weight</label>
          <Range value={weight} onChange={this.weightChange}/>
        </div>
      </form>
      <br/><br/>
      <Output data={this.state}/>
      </div>
    );
  }
}

export default App;
