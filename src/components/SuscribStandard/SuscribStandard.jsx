import React from "react";
import StandardCart from "./StandardCart";
import ReservCard from "../ToolsPage/ReservCard";
import './style.css'

export default function SuscribStandard({ shopItems }) {
  const [selectedItem, setSelectedItem] = React.useState(null);

  const handleSelectItem = (itemData) => {
    setSelectedItem(itemData);
  };

  return (
    <>
      <section className="shop background">
        <div className="container d_flex">
          <ReservCard selectedItem={selectedItem} />
          <div className="contentWidth">
            <div className="heading d_flex">
              <div className="heading-left row f_flex">
                <img src="https://img.icons8.com/glyph-neue/64/26e07f/new.png" alt="" />
                <h2>Available</h2>
              </div>
            </div>
            <div className="product-content grid1">
              <StandardCart
                shopItems={shopItems}
                onSelectItem={handleSelectItem}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
