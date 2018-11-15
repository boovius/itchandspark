import React, { Component } from 'react'
import { GoHeart, GoRocket, GoBrowser } from 'react-icons/go'
import './App.css'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class App extends Component {
  constructor(props) {
    super(props)
    this.updateLandingOnScroll = this.updateLandingOnScroll.bind(this)
    this.state = {
      stars: false,
      titleTransition: false,
    }
  }

  componentDidMount() {
    const that = this;
    document.addEventListener("scroll", that.updateLandingOnScroll)
  }

  componentWillUnmount() {
    const that = this;
    document.removeEventListener("scroll", that.updateLandingOnScroll)
  }

  updateLandingOnScroll() {
    if (window.scrollY > 50 && !this.state.stars) {
      this.setState({stars: !this.state.stars})
    } else if (window.scrollY < 50 && this.state.stars) {
      this.setState({stars: !this.state.stars})
    }
    const header = document.getElementById('app-header')
    if (header && window.scrollY > header.offsetTop) {
      header.classList.add('stickyHeader')
      this.setState({titleTransition: true})
    } else {
      header.classList.remove('stickyHeader')
      this.setState({titleTransition: false})
    }
  }

  render() {
    return (
      <div className="App">
        <header id='app-header' className="App-header">
          <div className="container">
            <ReactCSSTransitionGroup
              transitionName='itchHandTransition'
              transitionEnterTimeout={300}
              transitionLeaveTimeout={1000}
            >
              {!this.state.stars &&
                <span>itch</span>
              }
            </ReactCSSTransitionGroup>
            <ReactCSSTransitionGroup
              transitionName='stickyHeader'
              transitionEnterTimeout={300}
              transitionLeaveTimeout={300}
            >
              {this.state.titleTransition &&
                <div>
                  <span>itch</span>
                  <span>&</span>
                  <span>SPARK</span>
                </div>
              }
            </ReactCSSTransitionGroup>
          </div>
        </header>
        <div className="container">
          <div className="App-LandingSpot">
            <ReactCSSTransitionGroup
              transitionName='itchHandTransition'
              transitionEnterTimeout={300}
              transitionLeaveTimeout={1000}
            >
              {!this.state.stars &&
                <div className="App-LandingImage App-ItchHand" alt="hand" />
              }
            </ReactCSSTransitionGroup>
            <div className="App-finger App-LandingImage" alt="finger-pointing" />
            <ReactCSSTransitionGroup
              transitionName='fadingImage'
              transitionEnterTimeout={1000}
              transitionLeaveTimeout={1000}
            >
              {this.state.stars &&
                <div className='stars-wrapper'>
                  <div className="App-LandingImage stars" alt="stars" />
                </div>
              }
            </ReactCSSTransitionGroup>
          </div>
          <div className="TheTagline">
            <div>Wanna create something amazing?</div>
            <div>But unsure how or where to start?</div>
            <div>We'll help you get you going with momentum.</div>
          </div>
          <div className="TheTypes">
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
