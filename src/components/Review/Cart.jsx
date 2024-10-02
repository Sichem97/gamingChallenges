import React from "react"
import Ndata from "./Rdata"

export default function Cart () {
  const [selectedItem, setSelectedItem] = React.useState(null);

  return (
    <>
      <div className='content grid product'>
        {Ndata.map((val, index) => {
          return (
            <div className='boxR' key={index} onClick={() => setSelectedItem(val)}>
              <div className='img'>
                <img src={val.cover} alt='' />
              </div>
              <h4>{val.game}</h4>
              <span>{val.date}</span>
            </div>
          )
        })}
      </div>
      <ShowDetails selectedItem={selectedItem} />
    </>
  )
}

function ShowDetails({ selectedItem }) {
  if (!selectedItem) return null;

  return (
    <div class="details">
      <div class='show-details'>
      <h2>
        Review
      </h2>
        <img src={selectedItem.cover} alt='' />
      </div>

        <div class="button-container">
        <p> <b>{selectedItem.game}</b> tournament, organized in <b>{selectedItem.date}</b></p>
        <br />
        <p>In an epic saga of valor and rivalry, the tournament was fiercely contested under the generous patronage of <b>{selectedItem.sponsor}</b>. Amidst the chaos of battle and the roar of adversaries, it was <b>{selectedItem.winner}</b> who emerged triumphant, seizing the crown of victory with indomitable spirit and unyielding courage</p>
      </div>
    </div>
  );
}
