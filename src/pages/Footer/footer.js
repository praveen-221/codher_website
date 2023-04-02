import React from 'react';
import "./footer.css";

function Footer() {
  return (
		<div className="sticky" id="contact">
			<footer className="footer">
				<div className="container">
					<div className="row">
						<div className="footer-col">
							<h4>ACM CEG</h4>
							<h5 className="abt">
								We aim to motivate students to embark on a journey of learning
								and developing the tools of computer science and instilling in
								them a passion for computer science.We serve to clear the
								clutter and provide guidance to help them to achieve their goals
							</h5>
						</div>
						<div className="footer-col">
							<h4>Contact</h4>
							<ul>
								<li className="contactList">Bharath Kumar DP : 9952049834</li>
								<li className="contactList">Asmitha Eswaran : 7338850301</li>
								<li className="contactList">Pranava Raman BMS : 9443501317</li>
								<li className="contactList">Akshayalakshmi VK : 9360722652</li>
								<li className="contactList">
									Email:
									<a
										href="mailto:codher@auceg.acm.org"
										target="blank"
										style={{ textDecoration: "none", color: "#fff", textTransform: "lowercase"}}
									>
										codher@auceg.acm.org
									</a>
								</li>
							</ul>
						</div>
						<div className="footer-col">
							<h4>Get In Touch</h4>
							<div className="social-links">
								<a href="https://www.facebook.com/acm.ceg/" target="blank">
									<i className="fab fa-facebook-f"></i>
								</a>
								<a href="https://twitter.com/AcmCeg" target="blank">
									<i className="fab fa-twitter"></i>
								</a>
								<a href="https://www.instagram.com/acm_ceg" target="blank">
									<i className="fab fa-instagram"></i>
								</a>
								<a
									href="https://www.linkedin.com/company/acm-student-chapter-of-ceg/mycompany/"
									target="blank"
								>
									<i className="fab fa-linkedin-in"></i>
								</a>
							</div>
						</div>
					</div>
					<a href="#home" className="to-top"></a>
				</div>
				<div>
					<hr className="dashed"></hr>
					<div className="copyright">
						<div>
							&copy;&nbsp;2023&nbsp;<strong>ACM CEG</strong>.
						</div>
						<div>&nbsp;Made with 🖤️ by TechOps, ACM CEG</div>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default Footer;