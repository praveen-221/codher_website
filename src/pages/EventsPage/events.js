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
                    desc={"Cool! Shivaji yum naandhan, MGR um naan dhan. Tamizh padangal la inga maru vechukittu, meesaya murukki kittu, lungi kattikittu, nambiyar uh, Eh Kabalii apdinu sonna odane, kuninju sollunga yejaman nu vandhu nippane, andha maari Kabali nu nenachiya da? Kabali da!"}
                    venue = {"online"}
                    time = {"5pm"}
                    date = {"19/03/23"}
                    link = {""}
                />
                <Card 
                    title={"Codex"}
                    desc={"Chumma adhirudhula! BOSS (Bachelor of Social Service).Naan anbukku kattupaduven; aanavatha kattupaduthuven. Adangama irukanum nu nenaikaravangala adakkuven"}
                    venue = {"online"}
                    time = {"5pm"}
                    date = {"19/03/23"}
                    link = {""}
                />
                <Card 
                    title={"Codex"}
                    desc={"Kozhandha, Ennodaya anju mugatha paathen nu sonnela, enakku innoru mugam iruku aarumugam. Indha Padaiyappan oda innoru mugam. Adha nee paakaadha; thaanga maata. Nondhududuva Enna pathi unakku theiryadhu. En vazhi thani vazhi. Seendaadha"}
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