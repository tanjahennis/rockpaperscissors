export const SHOW_PAPER = 'SHOW_PAPER'
export const HIDE_PAPER = 'HIDE_PAPER'

export default (paper = true) => {
  return {
    type: paper ? SHOW_PAPER : HIDE_PAPER
  }
}
