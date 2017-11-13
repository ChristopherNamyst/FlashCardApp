import React, { Component } from 'react';
import { next } from '../actions';
import { connect } from 'react-redux';


class NextButton extends Component {
    render() {
        return (
            <button onClick={this.props.next} className="NextButton">
                Next Card
            </button>
        );
    }
}

const mapActionsToProps = {
    next: next
}

function mapStateToProps(state) {
    return {
        disabled: state.currentCardIndex <= state.cards.length - 1
    }
}



export default connect(mapStateToProps, mapActionsToProps)(NextButton);
