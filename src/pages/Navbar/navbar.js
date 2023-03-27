import React, { useState } from 'react';
import "./navbar.css";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

function NavBar() {
    const [click, setClick] = useState(false);
	const [offsetVal, setOffsetVal] = useState(-20);
	const [width, setWidth] = useState(window.innerWidth);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	const handleWindowResize = () => {
		setWidth(window.innerWidth);
		if (width <= 1024) {
			setOffsetVal(35);
		} else {
			setOffsetVal(-20);
		}
	};

	window.addEventListener("resize", handleWindowResize);
	window.addEventListener("load", handleWindowResize);
    var active = localStorage.getItem("active") ? localStorage.getItem("active") : "Home";

    const change = (str) => {
        localStorage.setItem("active", str);
    }

    return (
			<>
				<div className="navigation">
					<nav>
						<div className="logo">
							<a href="https://auceg.acm.org" target={"blank"} className="logo_link">
								<img src="assets/ACMLogo.png" alt="ACM CEG"></img>
							</a>
						</div>
						<div className="navlinks">
							<a href="#home" className="link" onClick={() => change("Home")}>
								<span className={`${active === "Home" ? "linkactive" : ""}`}>
									Home
								</span>
							</a>
							<a
								href="#events"
								className="link"
								onClick={() => change("Events")}
							>
								<span className={`${active === "Events" ? "linkactive" : ""}`}>
									Pre Events
								</span>
							</a>
							<a
								href="#sponsors"
								className="link"
								onClick={() => change("Sponsors")}
							>
								<span
									className={`${active === "Sponsors" ? "linkactive" : ""}`}
								>
									Sponsors
								</span>
							</a>
							<a
								href="#schedule"
								className="link"
								onClick={() => change("Schedule")}
							>
								<span
									className={`${active === "Schedule" ? "linkactive" : ""}`}
								>
									Schedule
								</span>
							</a>
							<a
								href="#faq"
								className="link"
								onClick={() => change("Faq")}
							>
								<span
									className={`${active === "Faq" ? "linkactive" : ""}`}
								>
									FAQ
								</span>
							</a>
							<a
								href="#contact"
								className="link"
								onClick={() => change("Contace")}
							>
								<span
									className={`${active === "Contact" ? "linkactive" : ""}`}
								>
									Contact
								</span>
							</a>
						</div>
						<div className="hamburger-menu">
							{click ? (
								<IoClose color="#fff" size="1.5em" onClick={handleClick} />
							) : (
								<HiMenuAlt3 color="#fff" size="1.5em" onClick={handleClick} />
							)}
							<div className={click ? "open" : "closed"}>
								<div className="mobile-menu">
									<a href="#home" onClick={closeMobileMenu}>
										<span>Home</span>
									</a>
									<a href="#events" onClick={closeMobileMenu}>
										<span>Pre Events</span>
									</a>
									<a href="#sponsors" onClick={closeMobileMenu}>
										<span>Sponsors</span>
									</a>
									<a href="#schedule" onClick={closeMobileMenu}>
										<span>Schedule</span>
									</a>
									<a href="#faq" onClick={closeMobileMenu}>
										<span>FAQ</span>
									</a>
									<a href="#contact" onClick={closeMobileMenu}>
										<span>Contact</span>
									</a>
								</div>
							</div>
						</div>
					</nav>
				</div>
				<div className="spacer">&nbsp;</div>
			</>
		);
}

export default NavBar