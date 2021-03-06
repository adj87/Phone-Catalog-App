import React from 'react'

import PhoneComponent from './PhoneComponent'
import PhoneDetailComponent from './PhoneDetailComponent'

export const PhoneListContainer = ({ phones }) => {
  return (
    <div className="container">
      <div className="columns">
        {phones.map(phone => (
          <PhoneComponent phone={phone} key={phone.id} />
        ))}
      </div>
      <PhoneDetailComponent />
    </div>
  )
}
