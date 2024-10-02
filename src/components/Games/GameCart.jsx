import React from "react"
import Gdata from "./Gdata"

export default function GameCart() {
  return (
    <>
      <div className='content grid product'>
        {Gdata.map((val, index) => {
          return (
            <div className='box' key={index}>
              <div className='img'>
                <img src={val.cover} alt='' />
              </div>
              <h4>{val.game}</h4>
            </div>
          )
        })}
      </div>
    </>
  )
}
