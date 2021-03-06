import Misc from '../../../data/misc'

// ------------------------------------
// Constants
// ------------------------------------
export const IMAGE_CLICKED = 'IMAGE_CLICKED'

// ------------------------------------
// Actions
// ------------------------------------

export const imageClicked = (image) => {
  console.log('image', image)
  return {
    type: IMAGE_CLICKED,
    payload: image
  }
}

export const actions = {
  imageClicked
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [IMAGE_CLICKED]: (state, { payload }) => {
    console.log('state', state)
    console.log('payload', payload)
    return state
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = Misc
export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}


// when the image is clicked:
//  1. add it to the inventory
//  2. remove it from the current page
//  3. let user know that the item is added to the inventory
