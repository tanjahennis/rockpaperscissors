import { SIGN_IN_USER } from '../actions/sign-in-user'
import { SIGN_OUT_USER } from '../actions/sign-out-user'

export default (state = JSON.parse(localStorage.getItem('rps.currentUser')) || {}, { type, payload } = {}) => {
  switch(type) {
    case SIGN_IN_USER :
      localStorage.setItem('rps.currentUser', JSON.stringify(payload))
      return payload

    case SIGN_OUT_USER :
      localStorage.removeItem('rps.currentUser')
      return {}

    default :
      return state
  }
}
