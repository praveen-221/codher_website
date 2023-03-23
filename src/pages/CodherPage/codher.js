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

  return (
		<div className="container">
			<div>
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
		</div>
	);
}

export default Codher;