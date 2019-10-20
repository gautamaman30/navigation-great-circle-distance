import React from 'react';
import './app.css';

class Display extends React.Component {
  render(){
    return(
      <div className="output-result">
        <br/>
        <h2>Great Circle Distance: {this.props.ans} km</h2>
        <br/>
      </div>
    );
  }
}
export default Display;
