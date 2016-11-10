import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton'
import Result from './result'
import rock from '../actions/rock'

class Choice extends Component {

  render() {
    const { rock } = this.props
    return (
      <div className="choices">
        <span className="rock"><RaisedButton onClick={ rock } label="Rock" primary={true} /> </span>
        <span className="paper"><RaisedButton label="Paper" primary={true} /> </span>
        <span className="scissors"><RaisedButton label="Scissors" primary={true} /> </span>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    state
  }
}

export default connect(mapStateToProps, { rock })(Choice)
