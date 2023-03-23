import React from 'react';
import "./events.css";

function Events() {
    const Card = (props) => {
        const {title, desc, venue, time, date, link, r1,r1Time, r2, r2Time, val} = props;
        return (
					<div className="card">
						<div className="main">
							<h2 style={{ color: "#ccc", textDecoration: "underline" }}>
								{title}
							</h2>
							<p className="description">{desc}</p>
							{r1 ? (
								<p className="description">
									<b style={{ color: "#FFFFFF" }}>Round 1:</b>&nbsp;{r1}
									{r1Time?<><br></br><b style={{ color: "#FFFFFF" }}>Time:</b>&nbsp;{r1Time}</>:null}
								</p>
							) : (
								<div style={{ display: "none" }}></div>
							)}
							{r2 ? (
								<p className="description">
									<b style={{ color: "#FFFFFF" }}>Round 2:</b>&nbsp;{r2}
									{r2Time?<><br></br><b style={{ color: "#FFFFFF" }}>Time:</b>&nbsp;{r2Time}</>:null}
								</p>
								
							) : (
								null
							)}
							<div className="Info">
								{venue ? (
									<div className="venue">
										<p>Venue: {venue}</p>
									</div>
								) : (
									<div style={{ display: "none" }}></div>
								)}
								{time ? (
									<div className="duration">
										<p>Time: {time}</p> 
									</div>
								) : (
									<div style={{ display: "none" }}></div>
								)}
								{ date ? (
									<div className="date">
									<p>Date: {date}</p>
									</div>
								) : null }
							</div>
						</div>
						<div>
							<span>
								<a href={link} style={{ textDecoration: "none" }} target="_blank">
									<button className="btn events" id={val ? val : ""}>
										<span>Register</span>
									</button>
								</a>
							</span>
						</div>
					</div>
				);
    }
  return (
		<div className='events_container' id='events'>
			<div className="title">
				<span>PRE EVENTS</span>
			</div>
			<div className='cardContainer'>
				<Card 
					val={"completed"}
                    title={"Codex"}
                    desc={"CodeX, a competitive programming contest for Everyone. The Marvel universe calls all tech-savvies to join our coding contest and show off your programming prowess. Come forward to take part in this contest to celebrate MARVELous ladies out there, and experience the best of all realities."}
                    venue = {"online"}
                    time = {"5pm"}
                    date = {"March 19"}
                />
                <Card 
                    title={"Debug & Duel"}
                    desc={"This event is the right place for you to put your debugging and coding skills to test.Solve the bugs buried in the code. Individual participation"}
                    // venue = {"online"}
                    // time = {"5pm"}
					r1 = {"Debug the given code without changing logic"}
					r1Time = {"March 25, 5pm"}
					r2 = {"Participants competeing with each other to solve coding problems"}
					r2Time = {"March 26, 4pm"}
                    // date = {"March 25 & 26"}
                    link = {"https://forms.gle/tTLJDekv2cCimDSm6"}
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