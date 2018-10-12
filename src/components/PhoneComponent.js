import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { setPhoneSelectedStatus } from '../actions'

const url = 'http://localhost:3000/images/'

const PhoneComponent = ({ phone, setPhoneSelectedStatus }) => {
  const { id, name, price, color, description } = phone
  const srcImage = url + phone['product-image']

  return (
    <div
      className="card column"
      onClick={() => {
        console.log('yea')
        setPhoneSelectedStatus()
      }}
    >
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={srcImage} alt={name} />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left" />
          <div className="media-content">
            <p className="title is-4">{name}</p>
            <p className="subtitle is-6">@johnsmith</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  setPhoneSelectedStatus: bindActionCreators(setPhoneSelectedStatus, dispatch)
})

export default connect(
  null,
  mapDispatchToProps
)(PhoneComponent)
