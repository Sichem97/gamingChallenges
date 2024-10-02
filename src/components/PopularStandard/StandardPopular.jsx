import React from "react"
import Standardcard from "./Standardcard"

export default function StandardPopular () {
  return (
    <>
      <section className='Discount background NewArrivals'>
        <div className='container'>
          <div className='heading d_flex'>
            <div className='heading-left row  f_flex'>
              <i class="fa-solid fa-fire"></i>
              <h2>Popular</h2>
            </div>
          </div>
          <Standardcard />
        </div>
      </section>
    </>
  )
}
