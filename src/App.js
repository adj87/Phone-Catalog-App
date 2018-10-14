import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { PhoneListContainer } from './components/PhoneListContainer'
import { fetchData } from './actions'

class App extends Component {
  componentWillMount() {
    this.props.fetchData()
  }
  render() {
    const { phones } = this.props
    return (
      <div className="section">
        <p className="title is-1 has-text-centered">Phone catalog app</p>
        <p className="subtitle is-3 has-text-centered">
          The best phone catalog ever
        </p>
        <section className="section">
          <PhoneListContainer phones={phones} />
        </section>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loaded: state.data.isFetching,
  phones: state.data.phones
})

const mapDispatchToProps = dispatch => ({
  fetchData: bindActionCreators(fetchData, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
