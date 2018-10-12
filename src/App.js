import React, { Component } from 'react'

import './App.css'
import bulma from 'bulma/css/bulma.min.css'

import { PhoneListContainer } from './components/PhoneListContainer'
import db from './delete.json'

class App extends Component {
  render() {
    const phones = db.phones
    return (
      <section className="section">
        <PhoneListContainer phones={phones} />
      </section>
    )
  }
}

export default App
