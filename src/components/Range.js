import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Range extends Component {
  constructor(props){
    super(props)

    this.state = {
      value:props.value
    }
  }

static defaultProps = {
  min: 0,
  max: 245,
  step: 1
}

onChange = (event) => {
  this.props.onChange(this.state.value)
  this.setState({value: event.target.value});
}
  render() {
    const {value} = this.state;
    const {max,min,step} = this.props;

    return (
      <div className="range">
      <input 
        type="range"
        value={value}
        max= {max}
        min = {min}
        step = {step}
        onChange = {this.onChange}
      />
      </div>
    );
  }
}

Range.propTypes  = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
}

export default Range; 