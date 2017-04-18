import { handleActions } from 'redux-actions'
import ArmourView from '../ArmourView'
// import armour from '../data/armour'

// ------------------------------------
// Actions
// ------------------------------------

// ------------------------------------
// Initial state
// ------------------------------------
// const mapStateToProps = (state) => {
//   console.log(state)
// }
const initialState = {
  name: 'shirt',
  display_src: 'http://i.ebayimg.com/00/s/NTAwWDUwMA==/z/frQAAMXQVERS-0z2/$_3.JPG?set_id=2',
}
// const mapDispatchToProps = (dispatch) => {
//   console.log(dispatch)
// }

// ------------------------------------
// Action Handlers -- Reducer
// ------------------------------------
// export default handleActions({},initialState)

const armourReducer = (state = initialState, action) => {
  console.log(state)
  return state
}

export default armourReducer