import React from 'react';
import "./footer.css";

function Footer() {
  return (
		<div className="sticky">
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
								<li className="contactList">Bharath Kumar DP : 987654321</li>
								<li className="contactList">Asmitha Eswaran : 987654321</li>
								<li className="contactList">Pranava Raman BMS : 987654321</li>
							</ul>
						</div>
						<div className="footer-col">
							<h4>Get In Touch</h4>
							<div className="social-links">
								<a href="#">
									<i className="fab fa-facebook-f"></i>
								</a>
								<a href="#">
									<i className="fab fa-twitter"></i>
								</a>
								<a href="#">
									<i className="fab fa-instagram"></i>
								</a>
								<a href="#">
									<i className="fab fa-linkedin-in"></i>
								</a>
							</div>
						</div>
					</div>
					<a href="#home" class="to-top"></a>
				</div>
				<div>
					<hr className="dashed"></hr>
					<div className="copyright">
                        <span>&copy;&nbsp;2023 <strong>ACM CEG</strong>.</span>
						<span>&nbsp;Made with 🖤️ by TechOps, ACM CEG</span>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default Footer;