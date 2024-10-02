import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from './UserProvider';
import Header from '../common/header/Header';
import Footer from "../common/footer/Footer";
import './css/profile.css'

export default function Profile() {
  const { user, setUser } = useUser();
  const navigate = useNavigate();
  const [showUpgradeInput, setShowUpgradeInput] = useState(false);

  const handleLogout = () => {
    setUser(null);
    sessionStorage.removeItem('user');
    navigate('/');
  };

  const handleUpgrade = () => {
    setShowUpgradeInput(true);
  };

  const handleUpgradeSubmit = (event) => {
    event.preventDefault();
    // Process the validation code here
    const validationCode = event.target.validationCode.value;
    console.log(validationCode); // Replace this with your validation logic
    setShowUpgradeInput(false); // Hide the input field after submission
  };

  return (
    <>
      <Header />
      <div className='hook'>
        {user ? (
          <div className="content-show">
            <div className={`box ${user.account}`}>
            <h1>Profile</h1><br />

              <p>Welcome {user.pseudo}</p>  <br />
              <p>Clan : {user.clan}</p> <br />
              <p>{user.account}</p>
              {user.account === "standard" && (
                <>
                  {!showUpgradeInput && (
                    <button onClick={handleUpgrade}>Upgrade Profile</button>
                  )}
                  {showUpgradeInput && (
                    <form onSubmit={handleUpgradeSubmit}>
                      <input type="text" name="validationCode" placeholder="Enter validation code" />
                      <button type="submit">Submit Code</button>
                    </form>
                  )}
                </>
              )}
              {user.account === "premium" && (
                <>
            <h1>Profile</h1><br />
            
                <p>Welcome {user.pseudo}</p>
                <p>Clan : {user.clan}</p>
                <p>{user.account}</p>
                </>
              )}
            </div>
            <button onClick={handleLogout}>Log out</button>
          </div>
        ) : (
          <div className='hero-section'>
            <h1>Profile</h1>
            <p>You need to log in.</p>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
