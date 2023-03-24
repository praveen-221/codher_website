import React, { useEffect, useState, useCallback } from 'react';
import "./codher.css";

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
          <img className="prizepic" src={img} />
          <div className="prizecard-body">
            <h2>{cash}</h2>
			<h3>{title}</h3>
            <p>{desc}</p>
          </div>
        </div>
		);
	}
	const TrackCard = ({ icon,cash,title, desc }) => {
		return (
			<div className="prizecard">
			<img className="trackicon" src={icon} />
        	<div className="prizecard-body">
				<h4>Prizes worth</h4>
				<h2>{cash}</h2>
            	<h2>{title}</h2>
            	<p>{desc}</p>
          	</div>
        </div>
		);
	}
  return (
		<div className="container">
			<div className="timer">
				{view ? (
					<a
						href="https://logwork.com/countdown-yf59"
						className="countdown-timer"
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
						className="countdown-timer"
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

			<div className="prizes-title">
				<span>PRIZES</span>
			</div>
			<div className="prizes">
				{view ? (
					<>
						<PrizeCard
							className="firstplace"
							img="assets/firstplace.jfif"
							title="First Place"
							cash="₹ 12,000"
							desc="Intern referral to Motorq with a stipend of 1.5 lakhs per month. Goodies from Github."
						/>
						<PrizeCard
							img="assets/secondplace.jfif"
							title="Second Place"
							cash="₹ 9,000"
							desc="Intern referral to Motorq with a stipend of 1.5 lakhs per month. Goodies from Github."
						/>
					</>
				) : (
					<>
						<PrizeCard
							img="assets/secondplace.jfif"
							title="Second Place"
							cash="₹ 9,000"
							desc="Intern referral to Motorq with a stipend of 1.5 lakhs per month. Goodies from Github."
						/>
						<PrizeCard
							className="firstplace"
							img="assets/firstplace.jfif"
							title="First Place"
							cash="₹ 12,000"
							desc="Intern referral to Motorq with a stipend of 1.5 lakhs per month. Goodies from Github."
						/>
					</>
				)}
				<PrizeCard
					img="assets/thirdplace.jfif"
					title="Third Place"
					cash="₹ 6,000"
					desc="Intern referral to Motorq with a stipend of 1.5 lakhs per month. Goodies from Github."
				/>
			</div>
			<div className="special-prizes">
				<TrackCard
					icon="assets/medal.jfif"
					title="Best innovative idea"
					cash="₹ 4,000"
					desc="Everything starts with an idea and we are ready to honor the most innovative idea in CODHER with a special track prize."
				/>
				<TrackCard
					icon="assets/medal.jfif"
					title="Best freshman"
					cash="₹ 4,000"
					desc="Sometimes talent needs a little encouragement and appreciation and we are ready to offer it through a track prize reserved for the best freshman team."
				/>
				<TrackCard
					icon="assets/medal.jfif"
					title="Best sophomore"
					cash="₹ 4,000"
					desc=" Second years, get ready to showcase your exceptional talent and innovation because we have reserved a track prize for the best sophomore team."
				/>
				<TrackCard
					icon="assets/medal.jfif"
					title="Best UI"
					cash="₹ 4,000"
					desc="A great Design is a beautiful amalgamation of  science and art. And it should be appreciated as all art should be. That's why we are ready with a special track prize for the team coming up with the best UI"
				/>
			</div>
			<div className="tracks">
				<div className="tracks-title">
					<span>TRACKS</span>
				</div>
				<h2 className="text-shadow">COMING SOON...</h2>
				<div className="tags"></div>
			</div>
		</div>
	);
}

export default Codher;