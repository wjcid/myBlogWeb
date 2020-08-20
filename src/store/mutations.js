import {CHANGE_SIZE} from './types'

let mutations = {
  [CHANGE_SIZE](state, n) {
    state.width = n.width;
    state.height = n.height;
  }
}
export default mutations
