import React from "react"
import GameCart from "./GameCart"
import "./style.css"

export default function GameM () {
  return (
    <>
      <section className='NewArrivals background'>
        <div className='container'>
          <div className='heading d_flex'>
            <div className='heading-left row  f_flex'>
              <h2>Games supported</h2>
            </div>
          </div>

          <GameCart />
        </div>
      </section>
    </>
  )
}
