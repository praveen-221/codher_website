import React from 'react';
import "./Faq.css";

function Faq() {
    return (
        <div className="faqcontent" id="faq">


            <div className="card-wrapper  | content-cc">
                <div className="faq-card">

                    <div className="faq-ilustrations">

                    
                        <img className="mobile pattern" 
                            src="https://raw.githubusercontent.com/Romerof/FAQ-accordion-card/main/images/bg-pattern-mobile.svg">
                        </img>
                        <img className="mobile ilust" 
                            src="https://raw.githubusercontent.com/Romerof/FAQ-accordion-card/main/images/illustration-woman-online-mobile.svg">
                        </img>

                    </div>

                    <main className="faq-content">
                        <h1>FAQ</h1>

                        <div className="faq-articles">
                        <article className="faq-accordion">

                            <input className="tgg-title" type="checkbox" id="tgg-title-1"/>

                            <div className="faq-accordion-title">
                                <label for="tgg-title-1">
                                    <h2>
                                        Is CODHER only for women?
                                    </h2>
                                    <span className="arrow-icon" style={{color:"white"}}>
                                        <img src="assets/arrow-white.ico"/>
                                    </span>
                                </label>
                            </div>
                            <div className="faq-accordion-content">
                                <p>Yes. It's a hackathon exclusive for women</p>
                            </div>

                            </article>
                            <article className="faq-accordion">

                                <input type="checkbox" className="tgg-title" id="tgg-title-2"/>

                                <div className="faq-accordion-title">
                                    <label for="tgg-title-2">
                                    <h2>What are the perks of attending CODHER'23?</h2>
                                    <span className="arrow-icon" style={{color:"white"}}>
                                        <img src="assets/arrow-white.ico"/>
                                    </span>
                                    </label>
                                </div>

                                <div className="faq-accordion-content">
                                    <p>An exciting 16 hrs+ hackathon experience with interesting problems, interact with mentors from industry to shape your solutions better and win 50k+ cash prizes, Intern referrals with stipend 1.5 lakhs per month , goodies from Github and much more.</p>
                                </div>

                            </article> 

                            <article className="faq-accordion">

                                <input type="checkbox" className="tgg-title" id="tgg-title-3"/>

                                <div className="faq-accordion-title">
                                    <label for="tgg-title-3">
                                    <h2>
                                    Any specific qualification to be a participant?
                                    </h2>
                                    <span className="arrow-icon" style={{color:"white"}}>
                                        <img src="assets/arrow-white.ico"/>
                                    </span>
                                    </label>
                                </div>

                                <div className="faq-accordion-content">
                                    <p>If you enjoy working on interesting problems and enjoy writing code, we are sure you’ll enjoy this. 
Everyone enrolled in an undergraduate programme is welcome to take part in the activity, regardless of their academic area or stream.
We encourage beginners and freshman year students as well, you can browse through,learn and implement your ideas.
                                    </p>
                                </div>

                            </article> 

                            <article className="faq-accordion">

                                <input className="tgg-title" type="checkbox" id="tgg-title-4"/>

                                <div className="faq-accordion-title">
                                    <label for="tgg-title-4">
                                    <h2>
                                    What is the number of participants allowed for each team?
                                    </h2>
                                    <span className="arrow-icon" style={{color:"white"}}>
                                        <img src="assets/arrow-white.ico"/>
                                    </span>
                                    </label>
                                </div>

                                <div className="faq-accordion-content">
                                    <p>Each team can consist of a maximum of 3 students. Individual participation is also allowed.</p>
                                </div>

                            </article> 

                            <article className="faq-accordion">

                                <input className="tgg-title" type="checkbox" id="tgg-title-5"/>

                                <div className="faq-accordion-title">
                                    <label for="tgg-title-5">
                                    <h2>
                                    Is there any registration fee to attend and how much per team?
                                    </h2>
                                    <span className="arrow-icon" style={{color:"white"}}>
                                        <img src="assets/arrow-white.ico"/>
                                    </span>
                                    </label>
                                </div>

                                <div className="faq-accordion-content">
                                    <p>
                                    Yes,The registration fee is Rs.200 per team. 
                                    </p>
                                </div>

                            </article> 

                            <article className="faq-accordion">

                                <input className="tgg-title" type="checkbox" id="tgg-title-6"/>

                                <div className="faq-accordion-title">
                                    <label for="tgg-title-6">
                                    <h2>
                                    Will participants receive Certificates?
                                    </h2>
                                    <span className="arrow-icon" style={{color:"white"}}>
                                        <img src="assets/arrow-white.ico"/>
                                    </span>
                                    </label>
                                </div>

                                <div className="faq-accordion-content">
                                    <p>Yes, all the participants will receive participation certificates and prize winners will receive certificates along with other perks.</p>
                                </div>

                            </article> 
                            <article className="faq-accordion">

                                <input className="tgg-title" type="checkbox" id="tgg-title-7"/>

                                <div className="faq-accordion-title">
                                    <label for="tgg-title-7">
                                    <h2>
                                    Are inter-college teams allowed?
                                    </h2>
                                    <span className="arrow-icon" style={{color:"white"}}>
                                        <img src="assets/arrow-white.ico"/>
                                    </span>
                                    </label>
                                </div>

                                <div className="faq-accordion-content">
                                    <p>Yes, you can form teams with your other college friends as well.</p>
                                </div>

                            </article> 
                            <article className="faq-accordion">

                                <input className="tgg-title" type="checkbox" id="tgg-title-8"/>

                                <div className="faq-accordion-title">
                                    <label for="tgg-title-8">
                                    <h2>
                                    What is the mode of the hackathon and which platform is used?
                                    </h2>
                                    <span className="arrow-icon" style={{color:"white"}}>
                                        <img src="assets/arrow-white.ico"/>
                                    </span>
                                    </label>
                                </div>

                                <div className="faq-accordion-content">
                                    <p>The hackathon is Online and Discord will be used for communication during the hackathon.</p>
                                </div>

                            </article> 
                            <article className="faq-accordion">

                                <input className="tgg-title" type="checkbox" id="tgg-title-9"/>

                                <div className="faq-accordion-title">
                                    <label for="tgg-title-9">
                                    <h2>
                                    What is the duration of the hackathon?
                                    </h2>
                                    <span className="arrow-icon" style={{color:"white"}}>
                                        <img src="assets/arrow-white.ico"/>
                                    </span>
                                    </label>
                                </div>

                                <div className="faq-accordion-content">
                                    <p>It is a 16 hrs+ hackathon and starts from 7 PM on April 7(Friday) and extends till 5 PM on April 8(Saturday) including the judging time.</p>
                                </div>

                            </article> 
                            <article className="faq-accordion">

                                <input className="tgg-title" type="checkbox" id="tgg-title-10"/>

                                <div className="faq-accordion-title">
                                    <label for="tgg-title-10">
                                    <h2>
                                    Is it an Open themed hackathon and when will the problem statements be released ?
                                    </h2>
                                    <span className="arrow-icon" style={{color:"white"}}>
                                        <img src="assets/arrow-white.ico"/>
                                    </span>
                                    </label>
                                </div>

                                <div className="faq-accordion-content">
                                    <p>There will be multiple tracks and problem statements can be chosen based on the track. Tracks will be released soon.</p>
                                </div>

                            </article> 
                            <article className="faq-accordion">

                                <input className="tgg-title" type="checkbox" id="tgg-title-11"/>

                                <div className="faq-accordion-title">
                                    <label for="tgg-title-11">
                                    <h2>
                                    Will there be review meets during the hackathon period?
                                    </h2>
                                    <span className="arrow-icon" style={{color:"white"}}>
                                        <img src="assets/arrow-white.ico"/>
                                    </span>
                                    </label>
                                </div>

                                <div className="faq-accordion-content">
                                    <p>Yes, there will be 2 review meets before the final submission which act like checkpoints to update progress and also get help from Mentors.</p>
                                </div>

                            </article> 
                            <article className="faq-accordion">

                                <input className="tgg-title" type="checkbox" id="tgg-title-12"/>

                                <div className="faq-accordion-title">
                                    <label for="tgg-title-12">
                                    <h2>
                                    Who are mentors and how will they help?
                                    </h2>
                                    <span className="arrow-icon" style={{color:"white"}}>
                                        <img src="assets/arrow-white.ico"/>
                                    </span>
                                    </label>
                                </div>

                                <div className="faq-accordion-content">
                                    <p>Mentors are industry experts who will review your work and help you with solutions if you are stuck with your implementation.</p>
                                </div>

                            </article>
                            <article className="faq-accordion">

                                <input className="tgg-title" type="checkbox" id="tgg-title-13"/>

                                <div className="faq-accordion-title">
                                    <label for="tgg-title-13">
                                    <h2>
                                    What are the track prizes?
                                    </h2>
                                    <span className="arrow-icon" style={{color:"white"}}>
                                        <img src="assets/arrow-white.ico"/>
                                    </span>
                                    </label>
                                </div>

                                <div className="faq-accordion-content">
                                    <p>Track prizes are special prizes awarded to the teams apart from the top 3 teams. There are 4 track prizes namely Best innovative idea, Best UI, Best Sophomore, Best Freshman.</p>
                                </div>

                            </article>
                            <article className="faq-accordion">

                                <input className="tgg-title" type="checkbox" id="tgg-title-14"/>

                                <div className="faq-accordion-title">
                                    <label for="tgg-title-14">
                                    <h2>
                                    Can the hackathon winners also win the track prizes?
                                    </h2>
                                    <span className="arrow-icon" style={{color:"white"}}>
                                        <img src="assets/arrow-white.ico"/>
                                    </span>
                                    </label>
                                </div>

                                <div className="faq-accordion-content">
                                    <p>No, the track prizes are awarded to the teams apart from the winners(top 3 teams).</p>
                                </div>

                            </article>
                            <article className="faq-accordion">

                                <input className="tgg-title" type="checkbox" id="tgg-title-15"/>

                                <div className="faq-accordion-title">
                                    <label for="tgg-title-15">
                                    <h2>
                                    What are Freshman and Sophomore prizes?
                                    </h2>
                                    <span className="arrow-icon" style={{color:"white"}}>
                                        <img src="assets/arrow-white.ico"/>
                                    </span>
                                    </label>
                                </div>

                                <div className="faq-accordion-content">
                                    <p>These are the track prizes awarded to the best Freshman(first years) and sophomore(second year) teams. To be eligible for the best Freshman prize, all the team members should be in their first year and similarly for the sophomore prize, all the members of the team should be in their second year.</p>
                                </div>

                            </article>
                            <article className="faq-accordion">

                                <input className="tgg-title" type="checkbox" id="tgg-title-16"/>

                                <div className="faq-accordion-title">
                                    <label for="tgg-title-16">
                                    <h2>
                                    What are the Pre-events and who can participate in it?
                                    </h2>
                                    <span className="arrow-icon" style={{color:"white"}}>
                                        <img src="assets/arrow-white.ico"/>
                                    </span>
                                    </label>
                                </div>

                                <div className="faq-accordion-content">
                                    <p>Pre-events are aimed to create interest towards CODHER and anyone can participate in these pre-events. We have 3 pre-events for CODHER which are CodeX, Shark Tank, and Debug and duel.</p>
                                </div>

                            </article>
                            <article className="faq-accordion">

                                <input className="tgg-title" type="checkbox" id="tgg-title-17"/>

                                <div className="faq-accordion-title">
                                    <label for="tgg-title-17">
                                    <h2>
                                    How do we submit our work for the hackathon?
                                    </h2>
                                    <span className="arrow-icon" style={{color:"white"}}>
                                        <img src="assets/arrow-white.ico"/>
                                    </span>
                                    </label>
                                </div>

                                <div className="faq-accordion-content">
                                    <p>Your work can be submitted through github. More details regarding the submission will be released soon.</p>
                                </div>

                            </article>
                            <article className="faq-accordion">

                                <input className="tgg-title" type="checkbox" id="tgg-title-18"/>

                                <div className="faq-accordion-title">
                                    <label for="tgg-title-18">
                                    <h2>
                                    Should all the participants definitely have a discord account?
                                    </h2>
                                    <span className="arrow-icon" style={{color:"white"}}>
                                        <img src="assets/arrow-white.ico"/>
                                    </span>
                                    </label>
                                </div>

                                <div className="faq-accordion-content">
                                    <p>Yes, all the communication will take place through discord, so it's safer to have an account so you will not miss out on any important information.</p>
                                </div>

                            </article> 
                        </div> 

                    </main> 

                </div> 

            </div> 
            <div className='commSponsor'><span>Want to become our community sponsor<br/>Mail us at: publicrelations@codher.org</span></div>
            <br/><br/>
        </div>
    )
}

export default Faq;