import React from 'react';
import {Link} from 'react-router-dom';
// import Card from './EmployeeCard';


const Details = () => {
	const mock = () => {
		for (let i = 0; i <= 10; i++) {
			return(
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
			);
		};
	};
	return(
			<div className="employee-details form">
					

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

					{mock}
			</div>
		)
}; 

export default Details;