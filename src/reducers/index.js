let initialState = { phoneSelected: null, phones: [] }

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'FETCH_API':
      return { ...state, phones: payload }
      break
    case 'SET_PHONE_SELECTED':
      return { ...state, phoneSelected: payload }
    default:
      return state
      break
  }
}
