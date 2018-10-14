export const getData = phones => ({
  type: 'FETCHING_DATA',
  payload: phones
})

export const getDataSuccess = phones => ({
  type: 'FETCHING_DATA_SUCCESS',
  payload: phones
})

export const getDataFailure = phones => ({
  type: 'FETCHING_DATA_FAILURE',
  phones
})

export const setPhoneSelected = phone => ({
  type: 'SET_PHONE_SELECTED',
  payload: phone
})
