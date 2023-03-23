import React from 'react';
import "./sponsors.css";

function Sponsors() {
  return (
    <div className='sponsors_container' id='sponsors'>
      <div className="title">
				<span>SPONSORS</span>
			</div>
      <div className='sponsors'>
        <div className='titleSponsor'>
          <h2 style={{ color: "white", paddingBottom: "1.2rem"}}>Title Sponsor</h2>
          <a href='https://motorq.com/' target={"blank"} style={{textDecoration: "none"}}>
            <img src="assets/motoq_logo.jpg" style={{width: "300px",height:"80px",borderRadius: "10px"}}></img>
          </a>
        </div>
        <div className='other_sponsors'>
          <div style={{ paddingBottom: "1rem"}}>
            <h2 style={{color: "white", paddingBottom: "1rem"}}>Associate Sponsor</h2>
            <a href='https://github.com/' target={"blank"} style={{textDecoration: "none"}}>
              <img src="assets/Github_Logo_White.png" alt="motorq" style={{width: "250px",height:"100px",borderRadius: "10px"}}></img>
            </a>
          </div>
          <div style={{marginBottom:"20px"}}>
            <h2 style={{color: "white", paddingBottom: "1rem"}}>Intern Partner</h2>
            <a href='https://redink.app/' target={"blank"} style={{textDecoration: "none"}}>
              <img src="assets/RedInkLogo.jpeg" alt="motorq" style={{width: "300px",height:"100px",borderRadius: "10px"}}></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sponsors;