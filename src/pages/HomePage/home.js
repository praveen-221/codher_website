import React, { useState, useEffect, useCallback } from 'react';
import NavBar from '../Navbar/navbar';
import "./home.css";

function Home() {
	const [width, setWidth] = useState(window.innerWidth);
	const [animationDelay, setAnimationDelay] = useState();

	const handleAnimationDelay = useCallback(() => {
		setWidth(window.innerWidth);
		if (width <= 1024) {
			setAnimationDelay(700);
		} else {
			setAnimationDelay(2000);
		}
	}, [width]);

	useEffect(() => {
		handleAnimationDelay();
	}, [animationDelay]);

	window.addEventListener("load", handleAnimationDelay);
	window.addEventListener("resize", handleAnimationDelay);
  return (
		<>
			{/* <NavBar /> */}
			<div className="flexcontainer" id="home">
				<div className="column1">
					<div className="title">
						<a href='/' style={{textDecoration: "none"}}><img src="assets/codher_logo.png" alt="CODHER"></img></a>
						{/* <span>CODHER</span> */}
					</div>
					<div className="content">
						An all day hackathon to channel all that inner coddess energy to
						give shape to your amazing ideas. Team up with fellow queen bees for
						an awesome hackathon experience, complete with mentors who'll
						provide you with all the guidance you need. Hack from the comfort of
						your homes/hostel rooms as it's going to be <b>online</b> this time.
						<br></br><br></br>Join us to hack and slay, one line of code at a time.
					</div>
					<div className="date">
						<span>April 7 & 8</span>
					</div>
					<div>
						<span>
							<button className="btn">
								<span>Register</span>
							</button>
						</span>

						<a href="#events" style={{ textDecoration: "none" }}>
							<span className="sec_btn">
								Pre events &nbsp;&nbsp;
								<img
									src="assets/downarrow.png"
									alt="downarrow"
									className="arrow"
								/>
							</span>
						</a>
					</div>
				</div>
				<div className="column2">
					<img src="assets/Codehergirl.png" alt="codher"></img>
				</div>
			</div>
			<div className="mobile-arrow">
				<a href="#events" style={{ textDecoration: "none" }}>
					<img src="assets/downarrow.png" alt="arrImg"></img>
				</a>
			</div>
		</>
	);
}

export default Home;