import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton'
import Result from './result'
import rock from '../actions/rock'
import paper from '../actions/paper'
import scissors from '../actions/scissors'

class Choice extends Component {

  render() {
    const { rock, paper, scissors } = this.props
    return (
      <div className="choices">
        <span className="rock"><RaisedButton onClick={ rock } label="Rock" primary={true} /> </span>
        <span className="paper"><RaisedButton onClick={ paper } label="Paper" primary={true} /> </span>
        <span className="scissors"><RaisedButton onClick={ scissors } label="Scissors" primary={true} /> </span>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    state
  }
}

export default connect(mapStateToProps, { rock, paper, scissors })(Choice)
