import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'


class Picks extends Component {
  playerPick() {
    this.props.onClick(this.props.pick)
  }

  render() {
    return (
      <RaisedButton onClick={this.playerPick.bind(this)} label="Rock" primary={true}>{this.props.pick} </RaisedButton>
      )
    }
  }

export default playerPick
