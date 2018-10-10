import React from 'react'

export const PhoneListContainer = ({ phones }) => {
  return phones.map(phone => <p>{phone.name}</p>)
}
