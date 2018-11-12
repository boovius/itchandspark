import React, { Component } from 'react'
import { GoHeart, GoRocket, GoBrowser } from 'react-icons/go'
import './App.css'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class App extends Component {
  constructor(props) {
    super(props)
    this.updateLandingOnScroll = this.updateLandingOnScroll.bind(this)
    this.state = {
      andSpark: false
    }
  }

  componentDidMount() {
    const that = this;
    document.addEventListener("scroll", that.updateLandingOnScroll)
  }

  componentWillUnmount() {
    document.removeEventListener("scroll")
  }

  updateLandingOnScroll() {
    if (window.scrollY > 50 && !this.state.andSpark) {
      this.setState({andSpark: !this.state.andSpark})
    } else if (window.scrollY < 50 && this.state.andSpark) {
      this.setState({andSpark: !this.state.andSpark})
    }
    const header = document.getElementById('app-header')
    if (header && window.pageYOffset > header.offsetTop) {
      header.classList.add('sticky-header')
    } else if (header) {
      header.classList.remove('sticky-header')
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-container">
          <div className="App-LandingSpot">
            <ReactCSSTransitionGroup
              transitionName='fadingImage'
              transitionEnterTimeout={1000}
              transitionLeaveTimeout={1000}
            >
              {!this.state.andSpark &&
                <div className="App-LandingImage App-ItchHand" alt="hand">
                  <header className="App-header">
                    <span>itch</span>
                    <span>&</span>
                  </header>
                </div>
              }
            </ReactCSSTransitionGroup>
            <div className="App-finger App-LandingImage" alt="finger-pointing" />
            <ReactCSSTransitionGroup
              transitionName='fadingImage'
              transitionEnterTimeout={1000}
              transitionLeaveTimeout={1000}
            >
              {this.state.andSpark &&
                <div className='stars-wrapper'>
                  <div className="App-LandingImage stars" alt="stars" />
                  <header id='app-header' className="App-header">
                    <span>itch</span>
                    <span>&</span>
                    <span>SPARK</span>
                  </header>
                </div>
              }
            </ReactCSSTransitionGroup>
          </div>
          <div className="what-selling">
            <div className="business-types">
              <div className="personal">
                <div className="type">Personal</div>
                <GoHeart size={65} />
              </div>
              <div className="new-business">
                <div className="type">New Business</div>
                <GoRocket size={65} />
              </div>
              <div className="app">
                <div className="type">App</div>
                <GoBrowser size={65} />
              </div>
            </div>
            <div className="service-types">
              <div>Consultation, Development & Coaching</div>
            </div>
          </div>
          <div className='spacer'>spacer</div>
        </div>
      </div>
    );
  }
}

export default App;
