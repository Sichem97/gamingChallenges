import React from "react"
import Header from '../common/header/Header'
import Footer from "../common/footer/Footer";

import StandardPopular from "../components/PopularStandard/StandardPopular"
import SuscribStandard from "../components/SuscribStandard/SuscribStandard"


const Chalenges = ({ shopItems }) => {
  return (
 <>
 <Header/>
  <>
    <StandardPopular />
    <SuscribStandard shopItems={shopItems}/>
  </>
 <Footer/>
 </>
  )
}

export default Chalenges
