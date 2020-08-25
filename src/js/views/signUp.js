import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function SignUp() {
	return (
		<div className="text-center mt-5">
			<h1>SIGN UP</h1>
			<form>
				<div className="form-row">
					<div className="form-group col-md-6">
						<label htmlFor="inputFirstName">FIRST NAME</label>
						<input
							type="text"
							className="form-control"
							id="inputFirstName"
							placeholder="First Name"
						/>
					</div>
					<div className="form-group col-md-6">
						<label htmlFor="inputEmail4">LAST NAME</label>
						<input
							type="email"
							className="form-control"
							id="inputEmail4"
							placeholder="something@mail.com"
						/>
					</div>
				</div>

				<div className="vertical-line" />
				<div className="form-row">
					<div className="form-group col-md-6">
						<label htmlFor="inputMiddleName">
							MIDDLE NAME (OPTIONAL)
						</label>
						<input
							type="text"
							className="form-control"
							id="inputMiddleName"
							placeholder="Middle Name"
						/>
					</div>
					<div className="form-group col-md-6">
						<label htmlFor="inputPassword4">PASSWORD</label>
						<input
							type="password"
							className="form-control"
							id="inputPassword4"
						/>
					</div>
				</div>

				<div className=" form-row form-group col-md-6">
					<label htmlFor="inputLastName">EMAIL</label>
					<input
						type="text"
						className="form-control"
						id="inputLastName"
						placeholder="Last Name"
					/>
				</div>

				<button type="submit" className="btn btn-primary">
					Save
				</button>
			</form>
		</div>
	);
}