import { SHOW_ROCK, HIDE_ROCK } from '../actions/rock'

export default ( state = false, { type, payload } = {}) => {
  switch (type) {
    case SHOW_ROCK :
      return true

    case HIDE_ROCK :
      return false

  default :
    return state
  }
}
