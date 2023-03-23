import React, { useEffect, useState, useCallback } from 'react';
import "./codher.css"

function Codher() {
  const [width, setWidth] = useState(window.innerWidth);
	const [view, setView] = useState(false);

	const changeView = useCallback(() => {
		setWidth(window.innerWidth);
		if(width <= 450) {
			setView(true);
		} else {
			setView(false);
		}
	});

	useEffect(() => {
		changeView();
	}, []);
	
	window.addEventListener("resize", changeView);
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://cdn.logwork.com/widget/countdown.js";
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, []);
  	const PrizeCard = ({ title, cash, desc, img }) => {
		return (
			<div className="prizecard">
          <img src={img} />
          <div className="prizecard-body">
            <h2>{cash}</h2>
			<h3>{title}</h3>
            <p>{desc}</p>
          </div>
        </div>
		);
	}
  return (
		<div className="container">
			<div className='timer'>
				{view ? (
					<a
						href="https://logwork.com/countdown-yf59"
						class="countdown-timer"
						data-style="flip2"
						data-width="451"
						data-timezone="Asia/Kolkata"
						data-textcolor="#cccccc"
						data-date="2023-04-07 19:00"
						data-background="#ab43f0"
						data-digitscolor="#ffffff"
						data-unitscolor="#cccccc"
					>
						CODHER Starts In
					</a>
				) : (
					<a
						href="https://logwork.com/countdown-yg25"
						class="countdown-timer"
						data-style="flip2"
						data-width="649"
						data-timezone="Asia/Kolkata"
						data-textcolor="#cccccc"
						data-date="2023-04-07 19:00"
						data-background="#ab43f0"
						data-digitscolor="#ffffff"
						data-unitscolor="#cccccc"
					>
						CODHER Starts In
					</a>
				)}
			</div>
			<div className="prizes">
			<PrizeCard img="assets/secondplace.jfif" title="Second Place" cash="9,000" desc="Intern referral to Motorq with a stipend of 1.5 lakhs per month. Goodies from Github." />
			<PrizeCard className="firstplace" img="assets/firstplace.jfif" title="First Place" cash="12,000" desc="Intern referral to Motorq with a stipend of 1.5 lakhs per month. Goodies from Github." />
			<PrizeCard img="assets/thirdplace.jfif" title="Third Place" cash="6,000" desc="Intern referral to Motorq with a stipend of 1.5 lakhs per month. Goodies from Github." />
			</div>
		</div>
	);
}

export default Codher;