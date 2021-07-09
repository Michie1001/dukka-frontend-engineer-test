import React from 'react';
import {Link} from 'react-router-dom';
import user from '../images/employee.jpg';


const Details = (props) => {
	console.log(props);
	// const{name, number, email, position} = props.location.state.employee;

	return(
			<div className="employee-details form">
					<div className="employee-cards">
							<div className="employee-card flex">
								<div className="employee-image">
									<img src={user} alt="An Employee Portrait" />
								</div>
								<div className="employee-details">
									<h3>name</h3>
									<p className="cap">position</p>
									<p>(+234) (0) number</p>
									<p>email</p>
								</div>
							</div>
					</div>

					<div className="list-head">
						<h2>Loan Record</h2>
						<Link to="/list">
							<button className="half-width-btn">
								<i className="fas fa-long-arrow-alt-left"></i>
								Back
							</button>
						</Link>
					</div>

					<div className="loan flex">
						<div className="loan-date">
							<span>feb</span>
						</div>
						<div className="loan-details">
							<div className="detail">
								<p>Borrowed:</p>
								<p>N50,000</p>
							</div>
							<div className="detail">
								<p>Recievable:</p>
								<p>N100,000</p>
							</div>
						</div>
					</div>

					<div className="loan flex">
						<div className="loan-date">
							<span>jan</span>
						</div>
						<div className="loan-details">
							<div className="detail">
								<p>Borrowed:</p>
								<p>N50,000</p>
							</div>
							<div className="detail">
								<p>Recievable:</p>
								<p>N100,000</p>
							</div>
						</div>
					</div>

					<div className="flex">
						<p className="break">2019</p>
						<hr/>
					</div>

					<div className="loan flex">
						<div className="loan-date">
							<span>jan</span>
						</div>
						<div className="loan-details">
							<div className="detail">
								<p>Borrowed:</p>
								<p>N50,000</p>
							</div>
							<div className="detail">
								<p>Recievable:</p>
								<p>N100,000</p>
							</div>
						</div>
					</div>
					<div className="loan flex">
						<div className="loan-date">
							<span>jan</span>
						</div>
						<div className="loan-details">
							<div className="detail">
								<p>Borrowed:</p>
								<p>N50,000</p>
							</div>
							<div className="detail">
								<p>Recievable:</p>
								<p>N100,000</p>
							</div>
						</div>
					</div>
			</div>
		)
}; 

export default Details;