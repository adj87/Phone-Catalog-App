import React, { Component } from 'react'

import './App.css'

import { PhoneListContainer } from './components/PhoneListContainer'
import db from './delete.json'

class App extends Component {
  render() {
    const phones = db.phones
    return <PhoneListContainer phones={phones} />
  }
}

export default App
