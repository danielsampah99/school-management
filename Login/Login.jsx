import "./login.css"
import logo from "../Login/images/loo.png"
import left from "./images/first.png"
import right from "./images/second.png"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

function Login() {
	

	return(
	  <div className="app">
      <div className="container">
			
        <div className="left-container">
         <img className="left-image" src={left} alt=""/>
				 <div className="logo-container" >
				  <img className="logo" src={logo} alt=""/>
					<div className="home"><Link to="/"><h1>Home</h1></Link></div>
				 </div>
        </div>
        <div className="right-container">
           <img className="right-image" src={right} alt=""/>
        </div>
      </div>
      <motion.div    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, ease: "linear", }} className="center-container">
									<div className="text">
										<h3>Welcome To Bedeku Technical Institute</h3>
									<h1>Sign In</h1>
									</div>
							<form >
								<div className="textfield">
									<h3>Enter Student Id</h3>
									<input
										type="text"
										title="Student Id"
										placeholder='Student Id'
									/>
								</div>
								<div className="textfield">
									<h3>Enter Email</h3>
									<input
										type="text"
										placeholder='Email'
									/>
								</div>
								<div className="textfield">
									<h3>Enter Student Name</h3>
									<input
										type="text"
										placeholder='Student Name'

									/>
								</div>
		
								<button>Sign Up</button>
							</form>
      
      </motion.div>
    </div>
	)
}

export default Login;