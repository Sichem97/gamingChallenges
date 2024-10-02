import React,{useState} from "react"
import { Link } from "react-router-dom"
 
export default function Search () {
  const [MobileMenu, setMobileMenu] = useState(false)

  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })

  return (
    <>
      <section className='search'>
      <header className='header'>
        <div className='container d_flex'>
          <div className='catgrories d_flex'>
            
          </div>

          <div className='navlink'>
            <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
              <li>
                <Link to='/home'>home</Link>
              </li>
              <li>
                <Link to='/Chalenges'>Tournament</Link>
              </li>
              <li>
                <Link to='/Premium'>Premium</Link>
              </li>
              <li>
                <Link to='/Games'>Discover</Link>
              </li>
              <li>
                <Link to='/Review'>Review</Link>
              </li>
            </ul>

            <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
              {MobileMenu ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>

        <div className='container c_flex'>
          <div className='logo width '>
          <Link to='/home'><img src={"../../images/ADD/logo.jpg"} alt='' /></Link>
          </div>

          <div className='title-box f_flex'>
            <h1>UNIQUE GAMER</h1>
          </div>

          <div className='icon f_flex width'>
            
            <div>
            <Link to='/Profil'><i className='fa fa-user icon-circle'></i></Link>
            </div>

          </div>
        </div>
      </section>
      
    </>
  )
}
