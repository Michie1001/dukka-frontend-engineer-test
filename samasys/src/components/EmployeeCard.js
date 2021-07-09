import React from 'react';
import {Link} from 'react-router-dom';
import user from '../images/employee.jpg';


const Card = (props) => {
	const {id, name, number, email, position} = props.employee;

	// shows and error message when the edit button is clicked
	const editError = () => {
		alert(`Sorry, {id}, this feature is unavailable right now`);
	};


	return(
			<div className="employee-cards">
					<div className="employee-card flex">
						<div className="employee-image">
							<Link to={`/employee/${id}`}>
								<img src={user} alt="An Employee Portrait" />
							</Link>
						</div>
						<div className="employee-details">
							<Link to={`/employee/${id}`}>
								<h3>{name}</h3>
							</Link>
							<p className="cap">{position}</p>
							<p>(+234) (0) {number}</p>
							<p>{email}</p>
						</div>

						<div className="employee-card-options">
							<button className="small-btn">
								<i className="far fa-edit" onClick={() => props.editError(id)}></i>
							</button>
							<button className="small-btn">
								<i className="far fa-trash-alt" onClick= {() => props.clickHandler(id)}></i>
							</button>
						</div>
					</div>
			</div>
		)
}; 

export default Card;