import React, { Component } from 'react'
import itchHand from './assets/images/itchHand.png'
import finger from './assets/images/finger.png'
import stars from './assets/images/stars.png'
import './App.css'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class App extends Component {
  constructor(props) {
    super(props)
    this.updateImages = this.updateImages.bind(this)
    this.state = {
      itch: true
    }
  }

  componentDidMount() {
    const that = this;
    document.addEventListener("scroll", that.updateImages)
  }

  componentWillUnmount() {
    document.removeEventListener("scroll")
  }

  updateImages() {
    if (window.scrollY > 50 && this.state.itch) {
      this.setState({itch: !this.state.itch})
    } else if (window.scrollY < 50 && !this.state.itch) {
      this.setState({itch: !this.state.itch})
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            <span>itch</span>
            <span>&</span>
            <span>SPARK</span>
          </p>
        </header>
        <div className="App-LandingSpot">
          <ReactCSSTransitionGroup
            transitionName='fadingImage'
            transitionEnterTimeout={1000}
            transitionLeaveTimeout={1000}
          >
            {this.state.itch &&
              <div className="App-LandingImage App-ItchHand" alt="hand" />
            }
          </ReactCSSTransitionGroup>
          <div className="App-finger App-LandingImage" alt="finger-pointing" />
          <ReactCSSTransitionGroup
            transitionName='fadingImage'
            transitionEnterTimeout={1000}
            transitionLeaveTimeout={1000}
          >
             {!this.state.itch &&
               <div className='stars-wrapper'>
                 <div className="App-LandingImage stars" alt="finger-pointing" />
               </div>
             }
          </ReactCSSTransitionGroup>
        </div>
      </div>
    );
  }
}

export default App;
