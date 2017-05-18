import React from 'react'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
// import SimpleSlider from './carousel'
import MapView from './leaflet'

const Home = React.createClass({
  render: function() {
    return (
      <div className="home-content">
        <div className="billboard">
          <h1 className="h1">Cookies Inc</h1>

          <h4>
            1333 2nd Street
            <br />
              Suite 200
            <br />
              Santa Monica, Ca 90401
          </h4>
        </div>

        <div className="body-wrapper">
          <div className="center">
            <h2 className="h2">About this Office</h2>
            <p className="intro">
              Located in the heart of downtown Santa Monica, our Los Angeles office is rapidly growing alongside the thriving 'Silicon Beach' tech community. As the central outpost for Southern Californian, Pivotal LA builds everything from mobile applications at the intersection of entertainment and technology to the next generation of financial internet backbone. Outside of work we keep busy with morning surf sessions, evening beach volleyball games, and the local tech community night life.
            </p>
          </div>

          <div className="product-nav">
            <a href="#">Contact</a>
            <a href="#">Events</a>
            <a href="#">Featured</a>
            <a href="#">Jobs</a>
            <a href="#">Gallery</a>
          </div>

          <div classID="mapme">
            <MapView/>
          </div>

        </div>
      </div>
    )
  }
})


export default Home;
