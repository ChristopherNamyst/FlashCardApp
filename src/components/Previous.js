import React, {Component} from 'react';
import { previous } from '../actions';
import { connect } from 'react-redux';

class PreviousButton extends Component {
  render(){
    return(
      <button onClick= {this.props.previous}
        className="PreviousButton">Previous Card</button>
    );
  }
}

function mapStateToProps(state) {
  return {
    disabled: state.currentCardIndex <= 0
  };
}
  const mapActionsToProps = {
    previous
  };



export default connect (mapStateToProps, mapActionsToProps)(PreviousButton);
