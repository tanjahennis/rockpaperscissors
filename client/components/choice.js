import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton'

class Choice extends Component {
  render() {
    return (
      <div>
        <span><RaisedButton label="Rock" primary={true} /> </span>
        <span><RaisedButton label="Paper" primary={true} /> </span>
        <span><RaisedButton label="Scissors" primary={true} /> </span>
      </div>
    )
  }
}

export default Choice
