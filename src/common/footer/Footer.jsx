import React from 'react'
import {Link} from 'react-router-dom'
import './footer.css'

export default function Footer() {
  return (
    <div className='footer'>
      <div className="sb_footer section_padding">
        <div className="sb_footer-links">

            <div className="sb_footer-links_div">
                <h4>For Business</h4>
                <a href="###"><p><Link to='/Health'>Health Plan</Link></p></a>
                <a href="###"><p><Link to='/Individual'>Individual</Link></p></a>
            </div>

            <div className="sb_footer-links_div">
                <h4>Resources</h4>
                <a href="###"><p><Link to='/Resource'>Resource Center</Link></p></a>
            </div>

            <div className="sb_footer-links_div">
                <h4>Partners</h4>
                <a href="###"><p>Djaffoz</p></a>
            </div> 

            <div className="sb_footer-links_div">
                <h4>Company</h4>
                <a href="###"><p><Link to='/About'>About</Link></p></a>
                <a href="###"><p><Link to='/Career'>Career</Link></p></a>
                <a href="###"><p><Link to='/Contact'>Contact</Link></p></a>
            </div>

            <div className="sb_footer-links_div">
                <h4>Follow us</h4>
                <div className="sb_footer-below-links">
                    <a href="https://www.tiktok.com/@djaffoz20">Tiktok<i class="fa-brands fa-tiktok"></i></a>
                </div>

                <div className="sb_footer-below-links">
                    <a href="https://www.youtube.com/@Unique2019">Youtube<i class="fa-brands fa-youtube"></i></a>
                </div>
            </div>

        </div>

        <div className="sb_footer-below">
            <div className="sb_footer-copyright">
                <p>UNIQUEGAMER. All right reserved</p>
            </div>

            <div className="sb_footer-below-links">
                
                <a href="div"><div><p><Link to='/Terms'>Terms & conditions</Link></p></div></a>
                <a href="div"><div><p><Link to='/Privacy'>Privacy</Link></p></div></a>
                <a href="div"><div><p><Link to='/Security'>Security</Link></p></div></a>
                <a href="div"><div><p><Link to='/Cookie'>Cookie Declaration</Link></p></div></a>
            </div>
        </div>
      </div>
    </div>
  )
}
