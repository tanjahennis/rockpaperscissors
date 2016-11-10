export const SHOW_SCISSORS = 'SHOW_SCISSORS'
export const HIDE_SCISSORS = 'HIDE_SCISSORS'

export default (scissors = true) => {
  return {
    type: scissors ? SHOW_SCISSORS : HIDE_SCISSORS
  }
}
