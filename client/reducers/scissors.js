import { SHOW_SCISSORS, HIDE_SCISSORS } from '../actions/scissors'

export default ( state = true, { type, payload } = {}) => {
  switch (type) {
    case SHOW_SCISSORS :
      return true

    case HIDE_SCISSORS :
      return false

  default :
    return state
  }
}
