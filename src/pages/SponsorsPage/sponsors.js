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
            <img src="assets/motoq_logo.jpg" alt="motorq" style={{borderRadius: "10px"}}></img>
          </a>
        </div>
        <div className='other_sponsors'>
          <div>
            <h2 style={{color: "white", paddingBottom: "1rem"}}>Associate Sponsor</h2>
            <a href='https://motorq.com/' target={"blank"} style={{textDecoration: "none"}}>
              <img src="assets/motoq_logo.jpg" alt="motorq" style={{borderRadius: "10px"}}></img>
            </a>
          </div>
          <div>
            <h2 style={{color: "white", paddingBottom: "1rem"}}>Hiring Partner</h2>
            <a href='https://motorq.com/' target={"blank"} style={{textDecoration: "none"}}>
              <img src="assets/motoq_logo.jpg" alt="motorq" style={{borderRadius: "10px"}}></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sponsors;