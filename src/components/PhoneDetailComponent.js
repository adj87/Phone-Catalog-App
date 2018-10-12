import React from 'react'

class PhoneDetailComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = { active: this.props.active }
  }

  handleActive() {
    this.setState(state => {
      return { active: !state.active }
    })
  }
  render() {
    const clase = this.props.active ? 'modal is-active' : 'modal'
    return (
      <div className={clase}>
        <div className="modal-background" />
        <div className="modal-content" />
        <button className="modal-close is-large" ariaLabel="close" />
      </div>
    )
  }
}

export default PhoneDetailComponent
