import { SHOW_PAPER, HIDE_PAPER } from '../actions/paper'

export default ( state = false, { type, payload } = {}) => {
  switch (type) {
    case SHOW_PAPER :
      return true

    case HIDE_PAPER :
      return false

  default :
    return state
  }
}
