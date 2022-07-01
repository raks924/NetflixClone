import React, { useState, useEffect } from 'react';
import './Nav.css';

function Nav() {
    const[show,handleShow] = useState(false);

    // useEffect(() => {
    //   Window.addEventListener("scroll", () => {
    //       if (Window.scrollY > 100) {
    //           handleShow(true);
    //       } else {
    //           handleShow(false);
    //       }
    //   });
    //   return () => {
    //       Window.removeEventListener("scroll");
    //   };
      
    // }, []);
    


    return (
        <div className={`nav ${show && "nav_black"}`}>
            
                <img className='nav-logo'
                src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
                alt='netflix-logo'
                />
            
        
                <img className='profile-logo'
                src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
                alt='profile'
                />
            
        </div>
    );
}
export default Nav;