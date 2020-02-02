import React, { Component } from 'react'
import Head from 'next/head'
import Nav from '../components/nav'

class Home extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <React.Fragment>
        <div class="jumbotron text-center">
          <h1>Payments</h1>
          <p>Resize this responsive page to see the effect!</p>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-sm-4">
              <h3>Column 1</h3>
              <p>Lorem ipsum dolor..</p>
            </div>
            <div class="col-sm-4">
              <h3>Column 2</h3>
              <p>Lorem ipsum dolor..</p>
            </div>
            <div class="col-sm-4">
              <h3>Column 3</h3>
              <p>Lorem ipsum dolor..</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}


export default Home
