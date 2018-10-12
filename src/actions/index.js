export const fetchPhones = phones => ({
  type: 'FETCH_API',
  payload: phones
})

export const setPhoneSelectedStatus = status => ({
  type: 'PHONE_SELECTED_STATUS'
})
