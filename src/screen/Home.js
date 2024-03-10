import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Carouser from '../components/Carouser'

export default function Home() {
  return (
    <div>
      <div><Navbar /></div>
      <div><Carouser/></div>
      <div className='m-3'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        </div>
      <div><Footer /></div>
    </div>
  )
}
