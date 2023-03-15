import React from 'react';
import "./events.css";

function Events() {
    const Card = (props) => {
        const {title, desc, venue, time, date, link} = props;
        return(
            <div className="card">
					<div className="main">
						<h2 style={{ color: "#ccc", textDecoration: "underline" }}>
							{title}
						</h2>
						<p className="description">
							{desc}
						</p>
						<div className="Info">
							<div className="venue">
								<p>Venue: {venue}</p>
							</div>
							<div className="duration">
								<p>Time: {time}</p>
							</div>
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
				<span>EVENTS</span>
			</div>
			<div className='cardContainer'>
				<Card 
                    title={"Codex"}
                    desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed deiusmod tempor incididunt ut labore et dolore magna aliqua. Eget sit amet tellus cras"}
                    venue = {"online"}
                    time = {"5pm"}
                    date = {"19/03/23"}
                    link = {""}
                />
                <Card 
                    title={"Codex"}
                    desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed deiusmod tempor incididunt ut labore et dolore magna aliqua. Eget sit amet tellus cras"}
                    venue = {"online"}
                    time = {"5pm"}
                    date = {"19/03/23"}
                    link = {""}
                />
                <Card 
                    title={"Codex"}
                    desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed deiusmod tempor incididunt ut labore et dolore magna aliqua. Eget sit amet tellus cras"}
                    venue = {"online"}
                    time = {"5pm"}
                    date = {"19/03/23"}
                    link = {""}
                />                
			</div>
		</div>
	);
}

export default Events;