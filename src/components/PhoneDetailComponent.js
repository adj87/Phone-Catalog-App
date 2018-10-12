import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { setPhoneSelectedStatus } from '../actions'

const PhoneDetailComponent = ({ phone_selected, setPhoneSelectedStatus }) => {
  const clase = phone_selected ? 'modal is-active' : 'modal'
  return (
    <div className={clase}>
      <div className="modal-background" />
      <div className="modal-content" />
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={() => setPhoneSelectedStatus()}
      />
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  setPhoneSelectedStatus: bindActionCreators(setPhoneSelectedStatus, dispatch)
})
const mapStateToProps = state => ({
  phone_selected: state.phone_selected
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhoneDetailComponent)
