import React, { useState } from 'react';
import "./navbar.css";

function NavBar() {
    var active = localStorage.getItem("active") ? localStorage.getItem("active") : "Home";

    const change = (str) => {
        localStorage.setItem("active", str);
    }

    return (
        <>
        <div className='navigation'>
            <nav>
                <div className="logo">
                    <a href = "/" className='logo_link'>
                        <img src="" alt="CODHER"></img>
                    </a>
                </div>
                <div className='navlinks'>
                    <a href = "#home" className='link' onClick={()=>change("Home")}>
                        <span className={`${active === "Home"
                                ? "linkactive"
                                : ""}`}
                        >
                            Home
                        </span>
                    </a>
                    <a href = "#events" className='link' onClick={()=>change("Events")}>
                        <span className={`${active === "Events"
                                ? "linkactive"
                                : ""}`}
                        >
                            Events
                        </span>
                    </a>
                    <a href = "#sponsors" className='link' onClick={()=>change("Sponsors")}>
                        <span className={`${active === "Sponsors"
                                ? "linkactive"
                                : ""}`}
                        >
                            Sponsors
                        </span>
                    </a>
                    <a href = "#timeline" className='link' onClick={()=>change("Schedule")}>
                        <span className={`${active === "Schedule"
                                ? "linkactive"
                                : ""}`}
                        >
                            Schedule
                        </span>
                    </a>
                </div>
            </nav>
        </div>
        <div className="spacer">&nbsp;</div>
        </>
  )
}

export default NavBar