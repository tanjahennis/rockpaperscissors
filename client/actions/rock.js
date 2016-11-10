export const SHOW_ROCK = 'SHOW_ROCK'
export const HIDE_ROCK = 'HIDE_ROCK'

export default (rock = true) => {
  return {
    type: rock ? SHOW_ROCK : HIDE_ROCK
  }
}
