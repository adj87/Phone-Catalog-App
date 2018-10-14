let initialState = { phoneSelected: null }

export const phoneReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_PHONE_SELECTED':
      return { ...state, phoneSelected: payload }
    default:
      return state
  }
}
