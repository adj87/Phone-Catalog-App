let initialState = []

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'FETCH_API':
      return [...state, payload]
      break
    default:
      return state
      break
  }
}
