import React, { Component } from 'react'
import Head from 'next/head'
import Nav from '../components/nav'

class Page extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <React.Fragment>
        <div class="jumbotron-pink text-center">
          <h1>Gallery</h1>
        </div>

        <div class="container page-lt-pink border-0">
        <div class="row">
            <div class="col-sm-4">
              <center>
              <img src="/pics/gallery/white-jan22.jpg" alt="Smile1" height="300" width="300"></img>
              </center>
            </div>
            <div class="col-sm-4">
            <center>
              <img src="/pics/gallery/red-gold-bling.jpg" alt="Smile2" height="300" width="300"></img>
              </center>
            </div>
            <div class="col-sm-4">
            <center>
              <img src="/pics/gallery/orange-fade.jpg" alt="Smile3" height="300" width="300"></img>
              </center>
            </div>
          </div>

          <br></br><br></br><br></br>
          
          <div class="row">
            <div class="col-sm-4">
            <center>
              <img src="/pics/gallery/clear-and-white.jpg" alt="Smile1" height="300" width="300"></img>
              </center>
            </div>
            <div class="col-sm-4">
              <center>
              <img src="/pics/gallery/blood-dexter.jpg" alt="Smile2" height="300" width="300"></img>
              </center>
            </div>
            <div class="col-sm-4">
              <center>
              <img src="/pics/gallery/black-spider-webs.jpg" alt="Smile3" height="300" width="300"></img>
              </center>
            </div>
          </div>

          <br></br><br></br><br></br>
          
          <div class="row">
            <div class="col-sm-4">
            <center>
              <img src="/pics/gallery/multi-fade.jpg" alt="Smile1" height="300" width="300"></img>
              </center>
            </div>
            <div class="col-sm-4">
              <center>
              <img src="/pics/gallery/green-glow.jpg" alt="Smile2" height="300" width="300"></img>
              </center>
            </div>
            <div class="col-sm-4">
              <center>
              <img src="/pics/gallery/fun-oct-25.jpg" alt="Smile3" height="300" width="300"></img>
              </center>
            </div>
          </div>

          <br></br><br></br><br></br>

          <div class="row">
            <div class="col-sm-4">
            <center>
              <img src="/pics/gallery/bats-fade.jpg" alt="Smile1" height="300" width="300"></img>
              </center>
            </div>
            <div class="col-sm-4">
              <center>
              <img src="/pics/gallery/black-galaxy.jpg" alt="Smile2" height="300" width="300"></img>
              </center>
            </div>
            <div class="col-sm-4">
              <center>
              <img src="/pics/gallery/black-skull.jpg" alt="Smile3" height="300" width="300"></img>
              </center>
            </div>
          </div>

          <br></br><br></br><br></br>
          
          



        </div>
      </React.Fragment>
    )
  }
}


export default Page
