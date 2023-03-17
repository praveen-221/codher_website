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
	}, [handleAnimationDelay]);

	window.addEventListener("load", handleAnimationDelay);
	window.addEventListener("resize", handleAnimationDelay);
  return (
	<>
		{/* <NavBar /> */}
		<div className="flexcontainer" id='home'>
			<div className="column1">
				<div className='title'>
					<span>CODHER</span>
				</div>
				<div className="content">
					Lorem idivsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget sit
					amet tellus cras adipiscing enim. Eleifend donec pretium vulputate
					sapien nec sagittis aliquam.
				</div>
				<div>
					<span>
						<button className="btn">
							<span>Register</span>
						</button>
					</span>

					<a href='#events' style={{textDecoration: "none"}}>
					<span className="sec_btn">
						Pre events
                        &nbsp;&nbsp;
						<img
							src="/assets/downarrow.png"
							alt="downarrow"
							className="arrow"
						/>
					</span>
					</a>
				</div>
			</div>
			<div className="column2">
				<img src="/assets/Codehergirl.png" alt="codeherimg"></img>
			</div>
		</div>
		<div className='mobile-arrow'>
			<a href='#events' style={{textDecoration: "none"}}><img src="/assets/downarrow.png" alt="arrImg"></img></a>
		</div>
	</>
	);
}

export default Home;