import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { setPhoneSelected } from '../actions'
import { host } from '../config'

const PhoneDetailComponent = ({ phoneSelected, setPhoneSelected }) => {
  if (phoneSelected) {
    const srcImage = host + '/images/' + phoneSelected['product-image']
    const { price, description, color, name } = phoneSelected
    return (
      <div className="modal is-active">
        <div className="modal-background" />
        <div className="modal-content">
          <p className="image is-4by3">
            <img src={srcImage} alt="" />
          </p>
          <section class="modal-card-body has-text-centered">
            <p class="title is-4">{name}</p>
            <div class="tags">
              <span class="tag">Price: {price}</span>
              <span class="tag">Color: {color}</span>
            </div>
            <div class="content">{description}</div>
          </section>
        </div>
        <button
          className="modal-close is-large"
          aria-label="close"
          onClick={() => setPhoneSelected(null)}
        />
      </div>
    )
  } else {
    return null
  }
}

const mapDispatchToProps = dispatch => ({
  setPhoneSelected: bindActionCreators(setPhoneSelected, dispatch)
})

const mapStateToProps = state => ({
  phoneSelected: state.phoneSelected
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhoneDetailComponent)
