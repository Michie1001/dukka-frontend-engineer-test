import React from 'react';
import { Link } from 'react-router-dom';
// import {v4 as uuidv4} from "uuid"; //for unique ids

class Create extends React.Component {
	state = {
		name: "",
		number: "",
		email: "",
		position: "",
		salary: "",
	}


	add = (e) => {
		e.preventDefault(); //this would prevent a page refresh on button click

		this.props.addEmployeeHandler(this.state); //this sends the state back to the parent
		this.setState({ name: "", number: "", email: "", position: "", salary: ""}) //this clears the input fields after submit them
		this.props.history.push("/"); //enables programmatic redirect/routing/navigation, but it's not working like it should ..TO BE FIXED!
	}

	render(){
		return (
				<div className="form">
					<h2>Create Employee Profile</h2>
					<form onSubmit={this.add}>
						<fieldset>
							<label>Full Name *</label>
							<input
								type="text"
								name="name"
								required
								value={this.state.name}
								onChange={(e) => this.setState({ name: e.target.value})}
							/>
						</fieldset>
						<fieldset>
						  <label>Phone Number *</label>
						  <input
								type="number"
								name="number"
								required
								value={this.state.number}
								onChange={(e) => this.setState({ number: e.target.value})}
							/>
						</fieldset>
						<fieldset>
						  <label>Email *</label>
						  <input
								type="email"
								name="email"
								required
								value={this.state.email}
								onChange={(e) => this.setState({ email: e.target.value})}
							/>
						</fieldset>
						<fieldset>
						  <label>Position *</label>
						  <input
								type="text"
								name="position"
								required
								value={this.state.position}
								onChange={(e) => this.setState({ position: e.target.value})}
							/>
						</fieldset>
						<fieldset>
						  <label>Salary *</label>
						  <input
								type="number"
								name="salary"
								required
								value={this.state.salary}
								onChange={(e) => this.setState({ salary: e.target.value})}
							/>
						</fieldset>

						<button className="full-width-btn" type="submit">Save</button>
					</form>
					<Link to="/list">
						<button className="half-width-btn next">
							Employee List
							<i className="fas fa-long-arrow-alt-right"></i>
						</button>
					</Link>
				</div>
			);
	}
}

export default Create;

