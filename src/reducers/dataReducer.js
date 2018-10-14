const initialState = {
  phones: [],
  isFetching: false,
  error: false
}

export const dataReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'FETCHING_DATA':
      return { ...state, phones: [], isFetching: true }

    case 'FETCHING_DATA_SUCCESS':
      return { ...state, phones: payload, isFetching: false }

    case 'FETCHING_DATA_FAILURE':
      return { ...state, phones: payload, isFetching: false }

    default:
      return state
  }
}
