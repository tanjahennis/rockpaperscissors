import '../components/Hide.sass'

export const SHOW_ROCK = 'SHOW_ROCK'
export const HIDE_ROCK = 'HIDE_ROCK'

export default (rock = false) => {
  return {
    type: rock ? SHOW_ROCK : HIDE_ROCK
  }
}

//default state rock button game page is false
//when click on rock - new state is true
//rock new state is function to compare with opponent show
//if opponent === rock, result is draw
//if opponent === paper, result is opponent win
//if opponent === scissors, result is you win
