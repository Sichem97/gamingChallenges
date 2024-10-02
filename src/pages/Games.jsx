import React from 'react'
import GameM from '../components/Games/GameM'
import Header from '../common/header/Header'
import Footer from "../common/footer/Footer";

export default function Games() {
  return (
    <>
    <Header/>
    <div>
      <GameM/>
    </div>
    <Footer/>
    </>
  )
}
