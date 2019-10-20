import React from 'react';
import './app.css';

class Input extends React.Component {
  constructor(props){
    super(props);
    this.onSubmit=this.onSubmit.bind(this);
  }
  onSubmit(event){
    event.preventDefault();
    let lng1=this.refs.x1.value;
    let lat1=this.refs.y1.value;
    let lng2=this.refs.x2.value;
    let lat2=this.refs.y2.value;
    if(lng1 && lat1 && lng2 && lat2){
      this.props.getLocations(lng1,lat1,lng2,lat2);
      this.refs.form.reset();
    }
  }
  render(){
    return(
      <div className="input-form">
        <h2 className="range-head">Range: Latitude -90° to 90°, Longitude -180° to 180°</h2>
        <br/>
        <form ref="form" className="form"onSubmit={this.onSubmit}>
          <p className="ab">Enter 1st coordinates:</p>
          <input ref="x1" type="text" placeholder="enter longitude..." className="xy"/>&emsp;&emsp;
          <input ref="y1" type="text" placeholder="enter latitude..." className="xy"/>
          <br/>
          <p className="ab">Enter 2nd coordinates:</p>
          <input ref="x2" type="text" placeholder="enter longitude..." className="xy"/>&emsp;&emsp;
          <input ref="y2" type="text" placeholder="enter latitude..." className="xy"/>
          <br/>
          <br/>
          <button type="submit">Calculate</button>
          <br/>
        </form>
      </div>
    );
  }
}
export default Input;
