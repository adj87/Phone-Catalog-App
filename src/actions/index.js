import getDataApi from '../services'

export const getData = () => ({
  type: 'FETCHING_DATA'
})

export const getDataSuccess = phones => ({
  type: 'FETCHING_DATA_SUCCESS',
  payload: phones
})

export const getDataFailure = () => ({
  type: 'FETCHING_DATA_FAILURE'
})

export const setPhoneSelected = phone => ({
  type: 'SET_PHONE_SELECTED',
  payload: phone
})

export const fetchData = () => dispatch => {
  dispatch(getData())
  getDataApi()
    .then(phones => {
      dispatch(getDataSuccess(phones))
    })
    .catch(getDataFailure())
}
