import React from 'react'
import { useState } from 'react'
import Header from './components/header'
import TravelCard from './components/travelCard'
import data from '../data'

function App() {

  const travelCards = data.map( (card) => {
    return (
      <TravelCard 
        key = {card.id}
        {...card}
      />
    )
  })

  return (
    <div id='app'>
      <Header/>
      {travelCards}
    </div>
  )
}

export default App
