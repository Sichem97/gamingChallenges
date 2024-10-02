import React from "react"
import PremiumCard from "./PremiumCard"
import "./style.css"

export default function SuscribPremium ({ productItems}) {
  return (
    <>
      <section className='flash'>
        <div className='container'>
          <div className='heading f_flex'>
            <img src='https://img.icons8.com/glyph-neue/64/26e07f/new.png' />
            <h2>Available</h2>
          </div>
          <PremiumCard productItems={productItems}/>
        </div>
      </section>
    </>
  )
}
