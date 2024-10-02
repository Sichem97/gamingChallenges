import React from "react"
import BandAN from "./BandAN"
import BandANB from "./BandANB"
import "./Home.css"
import SliderHome from "./Slider"

const HomeM = () => {
  return (
    <>
      <section className='home'>
        <div className='container d_flex'>
          <BandAN />
          <SliderHome />
          <BandANB />
        </div>
      </section>
    </>
  )
}
export default HomeM