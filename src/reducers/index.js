let initialState = { phone_selected: null, phones: [] }

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'FETCH_API':
      return { ...state, phones: payload }
      break
    case 'PHONE_SELECTED':
      return { ...state, phone_selected: payload }
    default:
      return state
      break
  }
}
