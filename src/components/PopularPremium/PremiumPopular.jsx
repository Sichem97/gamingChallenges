import React from "react"
import "./style.css"
import TopCart from "./PremiumCart"

export default function PremiumPopular () {
  return (
    <>
      <section className='TopCate background'>
        <div className='container'>
          <div className='heading d_flex'>
            <div className='heading-left row  f_flex'>
            <i class="fa-solid fa-fire"></i>
              <h2>Popular</h2>
              <p></p>
            </div>
          </div>
          <TopCart />
        </div>
      </section>
    </>
  )
}
