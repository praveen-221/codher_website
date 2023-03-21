import React from 'react';
import "./events.css";

function Events() {
    const Card = (props) => {
        const {title, desc, venue, time, date, link, r1, r2} = props;
        return(
            <div className="card">
					<div className="main">
						<h2 style={{ color: "#ccc", textDecoration: "underline" }}>
							{title}
						</h2>
						<p className="description">
							{desc}
						</p>
						{r1 ? <p className="description">
							<b style={{color: "#FFFFFF"}}>Round 01:</b>&nbsp;{r1}
						</p> : <div style={{display: "none"}}></div>}
						{r2 ? <p className="description">
							<b style={{color: "#FFFFFF"}}>Round 02:</b>&nbsp;{r2}
						</p> : <div style={{display: "none"}}></div>}
						<div className="Info">
							{venue ? <div className="venue">
								<p>Venue: {venue}</p>
							</div> : <div style={{display: "none"}}></div>}
							{time ? <div className="duration">
								<p>Time: {time}</p>
							</div> : <div style={{display: "none"}}></div>}
							<div className="date">
								<p>Date: {date}</p>
							</div>
						</div>
					</div>
					<div>
						<span>
							<button className="btn">
								<span>Register</span>
							</button>
						</span>
					</div>
				</div>
        )
    }
  return (
		<div className='events_container' id='events'>
			<div className="title">
				<span>PRE EVENTS</span>
			</div>
			<div className='cardContainer'>
				<Card 
					id={"completed"}
                    title={"Codex"}
                    desc={"CodeX, a competitive programming contest for Everyone. The Marvel universe calls all tech-savvies to join our coding contest and show off your programming prowess. Come forward to take part in this contest to celebrate MARVELous ladies out there, and experience the best of all realities."}
                    venue = {"online"}
                    time = {"5pm"}
                    date = {"March 19"}
                    link = {""}
                />
                <Card 
                    title={"Debug & Duel"}
                    desc={"This event is the right place for you to put your debugging and coding skills to test. Individual participation"}
                    // venue = {"online"}
                    // time = {"5pm"}
					r1 = {"Debug the given code without changing logic"}
					r2 = {"Participants competeing with each other to solve coding problems"}
                    date = {"March 25 & 26"}
                    link = {""}
                />
                <Card 
                    title={"Shark Tank"}
                    desc={"Do you have solution to a real world problem which you think can create an impact? A solution that could be turned into a profitable venture. Then wait not. Because Shark Tank is the right place for you."}
                    // venue = {"online"}
                    // time = {"5pm"}
					r1 = {"A quiz on technological products and its significance."}
					r2 = {"Classical Business Pitching round before the judges."}
                    date = {"March 25 & 26"}
                    link = {""}
                />                
			</div>
		</div>
	);
}

export default Events;