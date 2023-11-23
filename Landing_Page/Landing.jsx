import "./landing_style.css"
import logo from "../Login/images/tve.png"
import {Link} from "react-router-dom";

function Landing() {
	return (
		<div className="landing-page-web">
			<div className="div">
				<div className="overlap">
					<div className="footer">
						<p className="element-HNG-grammar">© 2021 HNG Grammar school&nbsp;&nbsp;. All Rights Reserved. HNG Group</p>
						<div className="text-wrapper-2">CONTACT US</div>
					</div>
				</div>
				<div className="overlap-group">
					<div className="main-page-texts">
						<p className="p">Making a positive impact on the future of our communities</p>
						<p className="education-is-the-key">
							<span className="span">Education is the </span>
							<span className="text-wrapper-3">
                key <br />
                to success
              </span>
						</p>
					</div>
				</div>
				<div className="overlap-group-2">
						<Link to="login"><button>GET STARTED</button></Link>
					
				</div>
				<div className="text-wrapper-5">Bedeku Technical Institue</div>
				<div className="footer-2">
					<p className="element-birrel-avenue-sabo">
						3 Birrel Avenue, Sabo. <br />
						Yaba, Lagos State, <br />
						Nigeria
					</p>
					<p className="hello-hng-tech">
						hello@hng.tech <br />
						+234 (0) 812 345 6789
					</p>
				</div>
				<img className="tvet" alt="Tvet" src={logo} />
			</div>
		</div>
	);
}

export default Landing;