let initialState = { phone_selected: true, phones: [] }

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'FETCH_API':
      return { ...state, phones: payload }
      break
    case 'PHONE_SELECTED_STATUS':
    default:
      return { ...state, phone_selected: !state.phone_selected }
      break
  }
}
