import React from 'react'
import SuscribPremium from '../components/SuscribPremium/SuscribPremium'
import PremiumPopular from '../components/PopularPremium/PremiumPopular'
import Header from '../common/header/Header'
import Footer from "../common/footer/Footer";

export default function Premium({productItems}) {
  return (
    <>
    <Header/>
    <>
    <div>
        <PremiumPopular />
        <SuscribPremium productItems={productItems}/>
    </div>
    </>
    <Footer/>
    </>
  )
}
