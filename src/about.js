import React from 'react';
import './app.css';

class About extends React.Component {
  render(){
    return(
      <div className="info">
        <hr/>
        <h2 className="info-head">How This Works?</h2>
        <p className="info-detail">  <img src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Illustration_of_great-circle_distance.svg"/>
            The distance between two points in Euclidean space is the length of a straight line between them, but
            on the sphere there are no straight lines. In spaces with curvature, straight lines are replaced by
            geodesics. Geodesics on the sphere are circles on the sphere whose centers coincide with the center of the sphere,
            and are called great circles.
          </p>
        <br/>
        <p className="head-haversine">Haversine formula:</p>
        <p className="info-haversine">d is the geodesics distance and r is the radius of sphere</p>
        <p className="info-haversine">and d = 2 * r * arcsin(sqrt(h))</p>
        <p className="info-haversine">where h =  hav(lat2-lat1) + ( cos(lat1) * cos(lat2) * hav(lng2-lng1) )</p>
        <p className="info-haversine">and hav(θ) =  sin^2(θ/2)</p>
        <a href="https://en.wikipedia.org/wiki/Haversine_formula#targetText=The%20haversine%20formula%20determines%20the,and%20angles%20of%20spherical%20triangles." className="link">more detail</a>
      </div>
    );
  }
}
export default About;
