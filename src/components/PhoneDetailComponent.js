import React from 'react'

export const PhoneDetailComponent = phone => (
  <div>
    <p>{phone.name}</p>
    <p>{phone.description}</p>
    <p>{phone.color}</p>
    <p>{phone.price}</p>
  </div>
)
