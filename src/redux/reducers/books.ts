// @ts-nocheck

import {produce} from 'immer'

const initialState = {
  items: [],
  isLoaded: false,
  count: 10,

}

const books = (state = initialState, action) => {
  switch (action.type) {
    case 'OPTIONS_LOADED':
      return produce(state, draft => {
        draft.isLoaded = action.payload
      })
    case 'SET_OPTIONS':
      return produce(state, draft => {
        draft.items = action.payload
        draft.isLoaded = true
      })

    default:
      return state
  }
}

export default books
