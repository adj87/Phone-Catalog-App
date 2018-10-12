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
          <section class="modal-card-body">
            <p class="title is-4">{name}</p>
            <p>
              <span class="tag is-link">Price {price}</span>
              <span class="tag is-info">
                Colour
                {color}
              </span>
              <span class="tag is-success">Success</span>
            </p>
            <div class="content">
              {description}
              <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
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
