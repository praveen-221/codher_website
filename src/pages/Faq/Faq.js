import React from 'react';
import "./Faq.css";

function Faq() {
    return (
        <div class="faqcontent">


            <div class="card-wrapper  | content-cc">
                <div class="faq-card">

                    <div class="faq-ilustrations">

                    
                        <img class="mobile pattern" 
                            src="https://raw.githubusercontent.com/Romerof/FAQ-accordion-card/main/images/bg-pattern-mobile.svg">
                        </img>
                        <img class="mobile ilust" 
                            src="https://raw.githubusercontent.com/Romerof/FAQ-accordion-card/main/images/illustration-woman-online-mobile.svg">
                        </img>

                    </div>

                    <main class="faq-content">
                        <h1>FAQ</h1>

                        <div class="faq-articles">

                            <article class="faq-accordion">

                                <input type="checkbox" class="tgg-title" id="tgg-title-1"/>

                                <div class="faq-accordion-title">
                                    <label for="tgg-title-1">
                                    <h2>How many team members can I invite?</h2>
                                    <span class="arrow-icon">
                                        <img src="https://raw.githubusercontent.com/Romerof/FAQ-accordion-card/main/images/icon-arrow-down.svg"/>
                                    </span>
                                    </label>
                                </div>

                                <div class="faq-accordion-content">
                                    <p>You can invite up to 2 additional users on the Free plan. There is no limit on
                                    team members for the Premium plan.You can invite up to 2 additional users on the Free plan. There is no limit on
                                    team members for the Premium plan.You can invite up to 2 additional users on the Free plan. There is no limit on
                                    team members for the Premium plan.You can invite up to 2 additional users on the Free plan. There is no limit on
                                    team members for the Premium plan.</p>
                                </div>

                            </article> 

                            <article class="faq-accordion">

                                <input type="checkbox" class="tgg-title" id="tgg-title-2"/>

                                <div class="faq-accordion-title">
                                    <label for="tgg-title-2">
                                    <h2>
                                        What is the maximum file upload size?
                                    </h2>
                                    <span class="arrow-icon">
                                        <img src="https://raw.githubusercontent.com/Romerof/FAQ-accordion-card/main/images/icon-arrow-down.svg"/>
                                    </span>
                                    </label>
                                </div>

                                <div class="faq-accordion-content">
                                    <p>No more than 2GB. All files in your account must fit your allotted storage space.</p>
                                </div>

                            </article> 

                            <article class="faq-accordion">

                                <input class="tgg-title" type="checkbox" id="tgg-title-3"/>

                                <div class="faq-accordion-title">
                                    <label for="tgg-title-3">
                                    <h2>
                                        How do I reset my password?
                                    </h2>
                                    <span class="arrow-icon">
                                        <img src="https://raw.githubusercontent.com/Romerof/FAQ-accordion-card/main/images/icon-arrow-down.svg"/>
                                    </span>
                                    </label>
                                </div>

                                <div class="faq-accordion-content">
                                    <p>Click “Forgot password” from the login page or “Change password” from your profile page.
                                    A reset link will be emailed to you.</p>
                                </div>

                            </article> 

                            <article class="faq-accordion">

                                <input class="tgg-title" type="checkbox" id="tgg-title-4"/>

                                <div class="faq-accordion-title">
                                    <label for="tgg-title-4">
                                    <h2>
                                        Can I cancel my subscription?
                                    </h2>
                                    <span class="arrow-icon">
                                        <img src="https://raw.githubusercontent.com/Romerof/FAQ-accordion-card/main/images/icon-arrow-down.svg"/>
                                    </span>
                                    </label>
                                </div>

                                <div class="faq-accordion-content">
                                    <p>
                                    Yes! Send us a message and we’ll process your request no questions asked.</p>
                                </div>

                            </article> 

                            <article class="faq-accordion">

                                <input class="tgg-title" type="checkbox" id="tgg-title-5"/>

                                <div class="faq-accordion-title">
                                    <label for="tgg-title-5">
                                    <h2>
                                        Do you provide additional support?
                                    </h2>
                                    <span class="arrow-icon">
                                        <img src="https://raw.githubusercontent.com/Romerof/FAQ-accordion-card/main/images/icon-arrow-down.svg"/>
                                    </span>
                                    </label>
                                </div>

                                <div class="faq-accordion-content">
                                    <p> Chat and email support is available 24/7. Phone lines are open during normal business hours.</p>
                                </div>

                            </article> 

                        </div> 

                    </main> 

                </div> 

            </div> 

<footer class="attribution">
  Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
  Coded by <a href="https://www.frontendmentor.io/profile/Romerof/bookmarks">Javier Romero</a> 🔥. *movile version* See full <a href="https://github.com/Romerof/FAQ-accordion-card" target="_blank">Gitbhub</a>
</footer>
        </div>
    )
}

export default Faq;