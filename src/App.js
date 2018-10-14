import React, { Component } from 'react'

import './App.css'
import 'bulma/css/bulma.min.css'

import { PhoneListContainer } from './components/PhoneListContainer'
import db from './delete.json'

class App extends Component {
  render() {
    const phones = db.phones
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

export default App
