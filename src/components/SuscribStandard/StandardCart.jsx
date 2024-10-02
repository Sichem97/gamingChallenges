
import React from "react"

export default function StandardCart ({ shopItems, onSelectItem }) {

  return (
    <>
      {shopItems.map((data, index) => {
        return (
          <div className='box'key={index}>
            <div className='product mtop'>
            <button onClick={() => onSelectItem(data)}>
            
              <div className="img">
                <img src={data.cover} alt="" />
              </div>

              <div className='product-details'>
                <h3><b>{data.game}</b></h3>
                <span>{data.time} </span>
                <h4>{data.date} </h4>
              </div>
            </button>
            </div>
          </div>
        )
      })}
    </>
  )
}
