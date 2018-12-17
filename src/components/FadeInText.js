import React, { Component } from 'react';
import { Flipper, Flipped } from 'react-flip-toolkit';

export default class FadeInText extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fadeIn: false
    }
  }

  componentWillMount() {
    setTimeout(()=> {
      console.log('fading in')
      this.setState({fadeIn: true})
    }, 1000)
  }

  render() {
    const { elementId, inheretedStyles, text } = this.props;
    return (
      <Flipper opacity={true} flipKey={this.state.fadeIn}>
        <Flipped flipId={elementId}>
          <div className={`page ${inheretedStyles}`}>
            {text}
          </div>
        </Flipped>
      </Flipper>
    )
  }
}
