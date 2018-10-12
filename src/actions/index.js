export const fetchPhones = phones => ({
  type: 'FETCH_API',
  payload: phones
})

export const setPhoneSelected = phone => ({
  type: 'SET_PHONE_SELECTED',
  payload: phone
})
