import React from 'react';
import Input from './input';
import Display from './output';
import About from './about';
import './app.css';

var value=0.0;

class App extends React.Component {

  constructor(props){
    super(props);
    this.getLocations=this.getLocations.bind(this);
    this.haversine=this.haversine.bind(this);
    this.state={value: value};
  }
  getLocations(x1,y1,x2,y2){
    let xValue1=parseFloat(x1);
    let yValue1=parseFloat(y1);
    let xValue2=parseFloat(x2);
    let yValue2=parseFloat(y2);
    if((xValue1<180 && xValue1>-180) && (xValue2<180 && xValue2>-180) && (yValue1<90 && xValue1>-90) && (yValue2<90 && yValue2>-90)){
      let arr = [];
      arr.push((xValue1*3.14)/180);
      arr.push((yValue1*3.14)/180);
      arr.push((xValue2*3.14)/180);
      arr.push((yValue2*3.14)/180);
      this.haversine(arr);
    }
    else{
      alert("Please enter the coordinates within the range");
    }
  }
  haversine(arr){
    let diff_lng = arr[2]-arr[0];
    let diff_lat = arr[3]-arr[1];
    let a = Math.pow(Math.sin(diff_lat/2) ,2) +(Math.cos(arr[1])*Math.cos(arr[3])*(Math.pow(Math.sin(diff_lng/2),2)));
    let c = 2 * 6371* (Math.asin(Math.sqrt(a)));
    this.setState({value: c});
  }
  render(){
    return(
      <div id="app">
        <Input getLocations={this.getLocations}/>
        <Display ans={this.state.value}/>
        <About/>
      </div>
    );
  }
}
export default App;
