import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { setPhoneSelected } from '../actions'

const PhoneDetailComponent = ({ phone_selected, setPhoneSelected }) => {
  const clase = phone_selected ? 'modal is-active' : 'modal'
  return (
    <div className={clase}>
      <div className="modal-background" />
      <div className="modal-content" />
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={() => setPhoneSelected(null)}
      />
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  setPhoneSelected: bindActionCreators(setPhoneSelected, dispatch)
})
const mapStateToProps = state => ({
  phone_selected: state.phone_selected
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhoneDetailComponent)
