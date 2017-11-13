import React, { Component } from 'react';
import { flip } from '../actions';
import { connect } from 'react-redux';

class FlipButton extends Component {
  render() {
    return (
      <button onClick={this.props.flip} className="FlipButton">
      Flip Card!
    </button>);
  }

}

const mapActionsToProps = {
  flip: flip
}


export default connect (null, mapActionsToProps)(FlipButton);
