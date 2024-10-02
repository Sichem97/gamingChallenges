import React from "react";

export default function ReservCard({ selectedItem }) {
  return (
    <>
      <div className="categoryReserv">
        {selectedItem ? (
          <>
          <h2>
          <i class="fa-solid fa-star"></i> 
          <i class="fa-solid fa-star"></i> 
          <i class="fa-solid fa-star"></i> 
          Reservation
          </h2>
            <img src={selectedItem.cover} alt="" />
          
            <p>{selectedItem.game}</p>
            <p>{selectedItem.time}</p>
            <p>{selectedItem.date}</p>
            <br />
            <button>Register</button>
          </>
        ) : (
          <p>Get reservation for any tournament</p>
        )}
      </div>
    </>
  );
}
