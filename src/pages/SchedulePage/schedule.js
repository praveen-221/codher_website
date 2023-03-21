import React, { useState, useEffect, useCallback } from 'react';
import "./schedule.css"

function Schedule() {
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

	return (
		<div className="timeline_container" id="schedule">
			<div className="title">
				<span>TIMELINE</span>
				{console.log(width)}
			</div>
			<div className="timeline">
				{view 
				? <img src='' alt='mobile-timeline'></img>
				: <img src="assets/timeline.png" alt="timeline"></img>}
			</div>
		</div>
	);
}

export default Schedule;