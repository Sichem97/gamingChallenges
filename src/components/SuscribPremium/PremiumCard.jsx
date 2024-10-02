import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
        <i className='fa fa-long-arrow-alt-right'></i>
      </button>
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
        <i className='fa fa-long-arrow-alt-left'></i>
      </button>
    </div>
  );
};

export default function PremiumCard({ productItems}) {
  const [selectedItem, setSelectedItem] = React.useState(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <Slider {...settings}>
        {productItems.map((value) => {
          return (
            <div className='box' key={value.id}>
              <div className='product mtop' onClick={() => setSelectedItem(value)}>
                <div className='img'>
                  <img
                    src={value.cover}
                    alt=''
                  />
                </div>
                <div className='product-details'>
                  <h3>{value.game}</h3>
                  <h3>{value.date}</h3>
                  <h3>{value.time}</h3>
                  <div className='price'>
                    <h4>{value.reward} </h4>

                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
      <ShowDetails selectedItem={selectedItem} />
    </>
  );
}

function ShowDetails({ selectedItem }) {
  if (!selectedItem) return null;

  return (
    <div class="details">
      <div class='show-details'>
      <h2>
        <i class="fa-solid fa-star"></i> 
        <i class="fa-solid fa-star"></i> 
        <i class="fa-solid fa-star"></i> 
        <i class="fa-solid fa-star"></i> 
        <i class="fa-solid fa-star"></i> 
        Reservation
      </h2>
        <img src={selectedItem.cover} alt='' />
      </div>

        <div class="button-container">
        <p><h4>Condition:</h4> {selectedItem.condition}</p>
        <p><h4>Description:</h4> {selectedItem.description}</p>
        <br />
        <button> Register </button>
      </div>
    </div>
  );
}
