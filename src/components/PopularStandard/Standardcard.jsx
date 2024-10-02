import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import PSdata from "./PSdata"
import "../Review/style.css"

export default function Standardcard () {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
  }
  return (
    <>
      <Slider {...settings}>
        {PSdata.map((value, index) => {
          return (
            <>
              <div className='box product' key={index}>
                <div className='img'>
                  <img src={value.cover} alt='' width='100%' />
                </div>
                <span>{value.game}</span>
              </div>
            </>
          )
        })}
      </Slider>
    </>
  )
}
