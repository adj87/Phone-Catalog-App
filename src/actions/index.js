export const fetchPhones = phones => ({
  type: 'FETCH_API',
  payload: phones
})

export const setPhoneSelected = phone => ({
  type: 'PHONE_SELECTED',
  payload: phone
})
