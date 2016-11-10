import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton'
import Choice from './Choice'
import rock from '../actions/rock'
import paper from '../actions/paper'
import scissors from '../actions/scissors'

class Result extends Component {

  render() {
    const { rock, paper, scissors } = this.props

    return (
      <div className="results">
        { rock ?
          <span className="rock"><RaisedButton label="Rock" primary={true} /> </span> : null }
        { paper ?
          <span className="paper"><RaisedButton label="Paper" primary={true} /> </span> : null }
        { scissors ?
          <span className="scissors"><RaisedButton label="Scissors" primary={true} /> </span> : null }
          </div>
        )
        }
}

export default Result
