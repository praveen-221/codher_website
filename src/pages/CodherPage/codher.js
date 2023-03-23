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
	const TrackCard = ({ title, desc }) => {
		return (
			<div className="prizecard">
        	<div className="prizecard-body">
            	<h2>{title}</h2>
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
			<div className="tracks">
			<TrackCard title="Best innovative idea" desc="Everything starts with an idea and we are ready to honor the most innovative idea in codher with a special track prize." />
			<TrackCard title="Best freshman" desc="Sometimes talent needs a little encouragement and appreciation and we are ready to offer it through a track prize reserved for the best freshman team." />
			<TrackCard title="Best sophomore" desc=" Second years, get ready to showcase your exceptional talent and innovation because we have reserved a track prize for the best sophomore team." />
			<TrackCard title="Best UI" desc="A great Design is a beautiful amalgamation of  science and art. And it should be appreciated as all art should be. That's why we are ready with a special track prize for the team coming up with the best UI" />
			</div>
		</div>
	);
}

export default Codher;