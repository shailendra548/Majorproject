import { useFormik } from 'formik';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import * as Yup from 'yup';

const Signup = () => {
	const navigate = useNavigate();


	const SignupSchema = Yup.object().shape({
		name: Yup.string()
			.min(2, 'Too Short!')
			.max(10, 'Too Long!')
			.required('Required'),
		email: Yup.string().email('Invalid email').required('Required'),
	});


	const signupForm = useFormik({
		initialValues: {
			name: '',
			email: '',
			password: '',
			cpassword: '',
		},
		onSubmit: async (values) => {
			console.log(values);
			//making request to backend
			//1. address url
			//2. request method
			//3. Data
			//4. Data Format to be sent

			const response = await fetch('http://localhost:5000/user/add',{
				method: 'POST',
				body: JSON.stringify(values),
				headers: {
					'content-Type' : 'application/json'
				}
			});

			console.log(response.status);
			console.log(await response.text());

            console.log('Form Submitted');

			if(response.status === 200){
				Swal.fire({
					icon : 'success',
					title : 'Nice',
					text : 'User Registered Successfully'
				});

				//navigate to login page
				navigate('/login');
			}else{
				Swal.fire({
					icon : 'error',
					title : 'Oops...',
					text : 'Something went wrong'
				})
			}

		},
		validationSchema: SignupSchema
	});

	return (
		<>
		{/* Section: Design Block */}
		<section className="background-radial-gradient overflow-hidden">
		  <style
			dangerouslySetInnerHTML={{
			  __html:
				"\n    .background-radial-gradient {\n      background-color: hsl(218, 41%, 15%);\n      background-image: radial-gradient(650px circle at 0% 0%,\n          hsl(218, 41%, 35%) 15%,\n          hsl(218, 41%, 30%) 35%,\n          hsl(218, 41%, 20%) 75%,\n          hsl(218, 41%, 19%) 80%,\n          transparent 100%),\n        radial-gradient(1250px circle at 100% 100%,\n          hsl(218, 41%, 45%) 15%,\n          hsl(218, 41%, 30%) 35%,\n          hsl(218, 41%, 20%) 75%,\n          hsl(218, 41%, 19%) 80%,\n          transparent 100%);\n    }\n\n    #radius-shape-1 {\n      height: 220px;\n      width: 220px;\n      top: -60px;\n      left: -130px;\n      background: radial-gradient(#44006b, #ad1fff);\n      overflow: hidden;\n    }\n\n    #radius-shape-2 {\n      border-radius: 38% 62% 63% 37% / 70% 33% 67% 30%;\n      bottom: -60px;\n      right: -110px;\n      width: 300px;\n      height: 300px;\n      background: radial-gradient(#44006b, #ad1fff);\n      overflow: hidden;\n    }\n\n    .bg-glass {\n      background-color: hsla(0, 0%, 100%, 0.9) !important;\n      backdrop-filter: saturate(200%) blur(25px);\n    }\n  "
			}}
		  />
		  <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
			<div className="row gx-lg-5 align-items-center mb-5">
			  <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
				<h1
				  className="my-5 display-5 fw-bold ls-tight"
				  style={{ color: "hsl(218, 81%, 95%)" }}
				>
				  The best offer <br />
				  <span style={{ color: "hsl(218, 81%, 75%)" }}>
					for your business
				  </span>
				</h1>
				<p
				  className="mb-4 opacity-70"
				  style={{ color: "hsl(218, 81%, 85%)" }}
				>
				  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
				  Temporibus, expedita iusto veniam atque, magni tempora mollitia
				  dolorum consequatur nulla, neque debitis eos reprehenderit quasi ab
				  ipsum nisi dolorem modi. Quos?
				</p>
			  </div>
			  <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
				<div
				  id="radius-shape-1"
				  className="position-absolute rounded-circle shadow-5-strong"
				/>
				<div
				  id="radius-shape-2"
				  className="position-absolute shadow-5-strong"
				/>
				<div className="card bg-glass">
				  <div className="card-body px-4 py-5 px-md-5">
					<p className="h3 text-center mb-4">Signup Form</p>
					<form className="mx-1 mx-md-4" onSubmit={signupForm.handleSubmit}>
					  {/* 2 column grid layout with text inputs for the first and last names */}
					  <div className="row">
						<div className="col-md-12 mb-4">
						  <div className="">
							
							<input
							  type="text"
							  id="name"
							  value={signupForm.values.name}
							  onChange={signupForm.handleChange}
							  className={"form-control" + (signupForm.errors.name ? "border-danger" : '')}
							  placeholder="Your Name"
							/>
							<span style={{ color: 'red', fontSize: 10}}>{signupForm.errors.name}</span>
						  </div>
						</div>
						
					  </div>
					  {/* Email input */}
					  <div className=" mb-4">
						<input
						  type="email"
						  id="email"
						  value={signupForm.values.email}
						  onChange={signupForm.handleChange}
						  className="form-control"
						  placeholder='Email'
						/>
					
					  </div>
					  {/* Password input */}
					  <div className=" mb-4">
						<input
						  type="password"
						  id="password"
						  value={signupForm.values.password}
                          onChange={signupForm.handleChange}
						  className="form-control"
						  placeholder="Password"
						/>
					  </div>
					  {/*Confirm Password input */}
					  <div className=" mb-4">
						<input
						  type="password"
						  id="cpassword"
						  value={signupForm.values.cpassword}
                          onChange={signupForm.handleChange}
						  className="form-control"
						  placeholder="Confirm password"
						/>
						
					  </div>
					  {/* Checkbox */}
					  <div className="form-check d-flex justify-content-center mb-4">
						<input
						  className="form-check-input me-2"
						  type="checkbox"
						  defaultValue=""
						  id="form2Example33"
						  defaultChecked=""
						/>
						<label className="form-check-label" htmlFor="form2Example33">
						  Subscribe to our newsletter
						</label>
					  </div>
					  {/* Submit button */}
					  <button
						type="submit"
						className="btn btn-primary btn-block mb-4"
					  >
						Sign up
					  </button>
					  {/* Register buttons */}
					  <div className="text-center">
						<p>or sign up with:</p>
						<button
						  type="button"
						  className="btn btn-link btn-floating mx-1"
						>
						  <i className="fab fa-facebook-f" />
						</button>
						<button
						  type="button"
						  className="btn btn-link btn-floating mx-1"
						>
						  <i className="fab fa-google" />
						</button>
						<button
						  type="button"
						  className="btn btn-link btn-floating mx-1"
						>
						  <i className="fab fa-twitter" />
						</button>
						<button
						  type="button"
						  className="btn btn-link btn-floating mx-1"
						>
						  <i className="fab fa-github" />
						</button>
					  </div>
					</form>
				  </div>
				</div>
			  </div>
			</div>
		  </div>
		</section>
		{/* Section: Design Block */}
	  </>
	  
	)
}

export default Signup;