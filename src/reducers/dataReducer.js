const initialState = {
  data: [],
  isFetching: false,
  error: false
}

export const dataReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'FETCHING_DATA':
      return { ...state, data: [], isFetching: true }

    case 'FETCHING_DATA_SUCCESS':
      return { ...state, data: payload, isFetching: false }

    case 'FETCHING_DATA_FAILURE':
      return { ...state, data: payload, isFetching: false }

    default:
      return state
  }
}
