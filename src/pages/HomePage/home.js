import React from 'react';
import NavBar from '../Navbar/navbar';
import "./home.css";

function Home() {
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
	</>
	);
}

export default Home;