import React from 'react';
import { Link } from "react-router-dom";
import Card from './EmployeeCard';

const List = (props) => {

	const deleteEmployeeHandler = (id =>{
		props.getEmployeeId(id);
	});

	const renderList = props.employees.map((employee) => {
		return (
				<Card
					employee={employee}
					clickHandler={deleteEmployeeHandler}
					key={employee.id}
				/>
			);
	})


	return (
			<div className="form">
				<div className="list-head">
					<h2>Employees</h2>

					<Link to="/">
						<button className="half-width-btn">
							<i className="fas fa-long-arrow-alt-left"></i>
							Add Employee
						</button>
					</Link>
					
				</div>
				{renderList}
			</div>
		);
};

export default List;