import React, { Component } from 'react'
import Head from 'next/head'
import Nav from '../components/nav'

class Home extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <React.Fragment className="border-0 ">
        <div className="jumbotron-pink text-center">
          <h1>Linda's Nails</h1>
          <p> 600 N Austin Ave, Georgetown</p>
          <p>Call (512) 868-1136</p>
          <a href="https://www.facebook.com/lindasnailstx/">Visit us on Facebook!</a>
        </div>

        <div className="container page-lt-pink bg-image">
          <div className="row">
            <div className="col-sm-4">
              <h3> </h3>
              <p> </p>
            </div>
            <div className="col-sm-4">
              <h3> </h3>
              <p> </p>
            </div>
            <div className="col-sm-4">
              <h3> </h3>
              <p> </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}


export default Home
