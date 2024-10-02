import React from "react"
import Cart from "./Cart"
import "./style.css"

export default function ReviewM () {

  return (
    <>
      <section className='NewArrivals background'>
        <div className='container'>
          <div className='heading d_flex'>
            <div className='heading-left row  f_flex'>
              <h2>Tournament Reviews</h2>
            </div>
          </div>

          <Cart />
        </div>
      </section>
    </>
  )
}
