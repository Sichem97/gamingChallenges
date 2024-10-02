import React from 'react'
import { Link } from 'react-router-dom';
import HomeM from "../components/ToolsPage/HomeM"
import Publicity from '../components/annocument/Publicity';
import Wrapper from "../components/wrapper/Wrapper"
import './css/home.css'
import Header from '../common/header/Header'
import Footer from "../common/footer/Footer";


export default function Home(CartItem) {
  
  return (
    <>
    <Header/>
    <>
    <div className="hero-section">
        <div className='content row'>
          <div className="column right">
            
            <h1>Find the right Game service, right away</h1>
              <form action="#" class="search-form">
                <input type="text" placeholder="Search for any game..." required/>
                <button class="material-symbols-outlined" type="sumbit">search</button>
              </form>

            <div class="popular-tags">
              <p>Welcome on Unique your portal to a world of laughter, challenge, and camaraderie! Tired of the same old games? Craving hilarious moments and rewarding discoveries? At Unique, you'll unearth a treasure trove of the funniest and most rewarding games, guaranteed to tickle your funny bone and push your skills to the limit. Not only can you delve into walkthroughs, esports highlights, and indie gems, but Unique fosters a vibrant community. Post or discover challenges, test your mettle against other players, and share experiences that fuel your passion for gaming. So, grab your controller, unleash your inner gamer, and join the fun! Let's make unforgettable memories together at Unique.</p>
            </div>
            
            <div class="popular-tags">
              Popular :
              <ul class="tags">
                <li><Link to='/Chalenges' className='StartLink'>Tournaments</Link></li>
                <li><Link to='/Games' className='StartLink'>Games</Link></li>
              </ul>
            </div>

          </div>

          <div className="column left">
          
          </div>
        </div>
      
      </div>
        <HomeM CartItem={CartItem} />
        <Publicity />
        {/* <Wrapper /> */}
    </>
    <Footer/>
    </>
  )
}
