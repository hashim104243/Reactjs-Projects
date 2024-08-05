import React from 'react'
import Header from './Component/Header'
import BodyContent from './Component/BodyContent'
import Footer from './Component/Footer'

export default function App() {
  return (
    <div className='box'>
      <div className='card'>
        <Header />
        <BodyContent />
        <Footer />
      </div>
    </div>
  )
}
