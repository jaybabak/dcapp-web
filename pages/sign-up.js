
// import { withStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import React from 'react'
import axios from 'axios'
import Link from 'next/link'
import Header from '../comps/Header'
import Layout from '../comps/Layout'
import fetch from 'isomorphic-unfetch'
import validator from 'validator';

export class SignUp extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			value: '',
			form: {},
			formComplete: false,
			serverResponseHeading: 'Thank You For Signing Up!',
			serverResponseMessage: 'Platform is built around Drupal and allows companies around the globe to build, operate and optimize their digital experiences. Platform is built around Drupal and allows companies around the globe to build, operate and optimize their digital experiences. Platform is built around Drupal and allows companies around the globe to build, operate and optimize.'
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {


		// console.log('adsfasdf');

	}

	handleChange(event) {

		const field = event.target.name;
    const formData = this.state.form;
    formData[field] = event.target.value;

    this.setState({
    	formData
    });

		// console.log(this.state.form);

	}

	handleSubmit(event) {
		// alert('A name was submitted: ' + this.state.value);
		event.preventDefault();

		// console.log(validator.isAlpha('foo@bar.com2323'));

		if(this.state.form.firstname == undefined ||
			 this.state.form.lastname == undefined ||
			 this.state.form.email == undefined ||
			 this.state.form.phonenumber == undefined
		){

			alert('Cannot leave any fields blank!');
			console.log(this.state.formComplete);
		}else {

			if(!validator.isEmail(this.state.form.email)){
				alert('Invalid email: ' + this.state.form.email);
			}else if (!validator.isAlpha(this.state.form.firstname)) {
				alert('Invalid first name: ' + this.state.form.firstname);
			}else if (!validator.isAlpha(this.state.form.lastname)) {
				alert('Invalid last name: ' + this.state.form.lastname);
			}else if (!validator.isNumeric(this.state.form.phonenumber)) {
				alert('Invalid phone number: ' + this.state.form.phonenumber);
			}else{

				var fName = this.state.form.firstname;
				var lName = this.state.form.lastname;
				var email = this.state.form.email;
				var phone = this.state.form.phonenumber;

				axios.get('http://localhost:5000/subscription/add', {
					params: {
						firstName: fName,
						lastName: lName,
						email: email,
						phoneNumber: phone
					}
				})
					.then(response => {

						console.log(response);

						if(response.data.success == false){
							this.setState({
								serverResponseHeading: 'Oh No! Something Is Wrong..',
								serverResponseMessage: 'Sorry it looks like someone has alreadys igned up with that email address, hit the back button and try again?'
							});
						}
						// this.setState({
						// 	data: response.data
						// });

					})
					.catch(function (error) {
						console.log(error);
				});

				this.setState({formComplete: true});

				// alert('yay succesful submission!');

				console.log(this.state);

			}


		}




	}


	render(){

		var formContainer;

		if(this.state.formComplete == false){

			formContainer = (

				<div className="cta-form-wrapper">

					<style jsx>{`

						.form-field-text {
							width:65%;
							display: block;
							// margin: 0 auto;
							height: 45px;
							margin-top: 68px;

							border-radius: 45px;
							padding-left: 35px;
							font-weight: 200;
							// text-align:center;
							border: 5px solid #2CABFB;

						}

						.cta-link {
							clear: both;
							display: block;
							text-align: center;
							font-weight: 600;
							text-decoration:none;
							margin: 0 auto;
							margin-top: 40px;
							margin-bottom:60px;
							background-color: #102D64;
							color: white;
							text-transform: uppercase;
							// border: 4px solid #2CABFB;
							width: 70%;
							padding-left: 20px;
							padding-right: 20px;
							padding-top: 13px;
							padding-bottom: 13px;
							border-radius: 45px;
							transition: all 0.4s ease-out;
							border: 3px solid #ececec;
						}

						.cta-link:hover {
							-webkit-box-shadow: 1px 72px 126px -71px rgba(153,153,153,1);
							-moz-box-shadow: 1px 72px 126px -71px rgba(153,153,153,1);
							box-shadow: 1px 72px 126px -71px rgba(153,153,153,1);
							background-color: white;
							color: #2CABFB;
							border: 3px solid #2CABFB;
							cursor: pointer;
						}

						.cta-text-wide {
							display: block;
							// border-top: 2px solid #c8c8c8;
							margin-top: 50px;
							padding-top: 80px;
							font-size: 23px;
							text-align: center;
							line-height: 1.64;
							font-weight: 700;

						}

						.cta-text-summary {
							display: block;
							// border-top: 2px solid #c8c8c8;
							margin-top: 40px;
							// padding-top: 80px;
							font-size: 16px;
							text-align: left;
							line-height: 1.64;
						}

						.field-title {
							margin-top: 30px;
							font-size: 36px;
							text-align: center;
						}

						.field-summary {
							width: 75%;
							margin: 0 auto;
							margin-top: 15px;
							text-align: center;
						}

						.cta-form-wrapper {
							position: relative;
							// width: 70%;
							// margin: 0 auto;
							background-color: white;
							-webkit-box-shadow: 0px 2px 5px 0px rgba(212,212,212,1);
							-moz-box-shadow: 0px 2px 5px 0px rgba(212,212,212,1);
							box-shadow: 0px 2px 5px 0px rgba(212,212,212,1);
							padding-bottom: 10px;
							margin-bottom: 25px;

							padding-left: 30px;
							padding-right: 30px;

						}

						.text-label {
							display: block;
							text-align: center;
							margin-top:30px;
							text-transform: uppercase;
							font-weight: 600;
							font-size: 14px;
						}

						.form-field-text {
							box-sizing: border-box;
							width:90%;
							display: block;
							margin: 0 auto;
							height: 45px;
							margin-top: 14px;

							border-radius: 45px;
							padding-left: 0px;
							font-weight: 200;
							text-align:center;
							border: 3px solid #2CABFB;

						}

						@media screen and (min-width: 768px) {
							.cta-text-summary {
								display: block;
								// border-top: 2px solid #c8c8c8;
								margin-top: 40px;
								margin-bottom: 50px;
								// padding-top: 80px;
								font-size: 16px;
								text-align: center;
								line-height: 1.64;
								width: 75%;
								margin-left: auto;
								margin-right: auto;
							}
						}

						@media screen and (min-width: 902px) {


							.cta-link {
								clear: both;
								display: block;
								text-align: center;
								font-weight: 700;
								margin: 0 auto;
								margin-top: 50px;
								margin-bottom:100px;
								background-color: #102D64;
								color: white;
								text-transform: uppercase;
								// border: 4px solid #2CABFB;
								width: 40%;
								// padding-left: 120px;
								// padding-right: 120px;
								padding-top: 13px;
								padding-bottom: 13px;
								border-radius: 45px;
								transition: all 0.2s;
								border: 3px solid #ececec;
							}

							.cta-link:hover {
								-webkit-box-shadow: 1px 72px 126px -71px rgba(153,153,153,1);
								-moz-box-shadow: 1px 72px 126px -71px rgba(153,153,153,1);
								box-shadow: 1px 72px 126px -71px rgba(153,153,153,1);
								background-color: white;
								color: #2CABFB;
								border: 3px solid #2CABFB;
								cursor: pointer;
							}


							.field-title {
								margin-top: 30px;
								font-size: 36px;
								text-align: left;
								padding-right:
							}

							.field-summary {
								width: 68%;
								margin-left: 0;
								// margin: 0 auto;
								margin-top: 15px;
								text-align: left;

							}


							.text-label {
								display: block;
								text-align: center;
								margin-top:20px;
								text-transform: uppercase;
								font-weight: 600;
								font-size: 14px;
							}

							.form-field-text {
								width:60%;
								display: block;
								margin: 0 auto;
								height: 45px;
								margin-top: 14px;

								border-radius: 45px;
								padding-left: 35px;
								font-weight: 200;
								text-align:left;
								border: 3px solid #2CABFB;

							}

							.cta-form-wrapper {
								padding-left: 20px;
								padding-right: 20px;
								width: 70%;
								margin: 0 auto;
								background-color: white;
								-webkit-box-shadow: 1px 72px 126px -71px rgba(153,153,153,1);
								-moz-box-shadow: 1px 72px 126px -71px rgba(153,153,153,1);
								box-shadow: 1px 72px 126px -71px rgba(153,153,153,1);
								padding-bottom: 10px;
								margin-bottom: 100px;
								margin-top: 630px;
							}

						}

				`}</style>

					<div className="cta-text-wide">Ready to forget about laundry forever?</div>
					{/* <div className="cta-text-summary">Platform is built around Drupal and allows companies around the globe to build, operate and optimize their digital experiences.</div> */}
					<div className="cta-text-summary">Platform is built around Drupal and allows companies around the globe to build, operate and optimize their digital experiences. Platform is built around Drupal and allows companies around the globe to build, operate and optimize their digital experiences. Platform is built around Drupal and allows companies around the globe to build, operate and optimize.</div>
					<form onSubmit={this.handleSubmit}>
						<label className="text-label">First Name</label>
						<input onChange={this.handleChange} placeholder="Your first name" className="form-field-text" type="text" name="firstname"/>

						<label className="text-label">Last Name</label>
						<input onChange={this.handleChange} placeholder="Your last name please" className="form-field-text" type="text" name="lastname"/>

						<label className="text-label">Email</label>
						<input onChange={this.handleChange} placeholder="Enter your email" className="form-field-text" type="text" name="email"/>

						<label className="text-label">Phone Number</label>
						<input onChange={this.handleChange} placeholder="234-232-6839" className="form-field-text" type="text" name="phonenumber"/>

						<input className="cta-link" type="submit" value="Submit" />

					</form>
				</div>

			);

		}else {

			formContainer = (

				<div className="cta-form-wrapper">

					<style jsx>{`

						.cta-text-wide {
							display: block;
							// border-top: 2px solid #c8c8c8;
							margin-top: 50px;
							padding-top: 80px;
							font-size: 23px;
							text-align: center;
							line-height: 1.64;
							font-weight: 700;

						}

						.cta-text-summary {
							display: block;
							// border-top: 2px solid #c8c8c8;
							margin-top: 40px;
							margin-bottom: 40px;
							// padding-top: 80px;
							font-size: 16px;
							text-align: left;
							line-height: 1.64;
						}


						.cta-form-wrapper {
							// width: 70%;
							// margin: 0 auto;
							background-color: white;
							-webkit-box-shadow: 0px 2px 5px 0px rgba(212,212,212,1);
							-moz-box-shadow: 0px 2px 5px 0px rgba(212,212,212,1);
							box-shadow: 0px 2px 5px 0px rgba(212,212,212,1);
							padding-bottom: 10px;
							margin-bottom: 150px;

							padding-left: 30px;
							padding-right: 30px;

						}

						.arrow-icon {
							background-color: black;
							background-color: #102D64;
							width: 10%;
							padding: 15px;
							// float:right;
							float:right;
						}

						@media screen and (min-width: 768px) {
							.cta-text-summary {
								display: block;
								// border-top: 2px solid #c8c8c8;
								margin-top: 40px;
								margin-bottom: 50px;
								// padding-top: 80px;
								font-size: 16px;
								text-align: center;
								line-height: 1.64;
								width: 75%;
								margin-left: auto;
								margin-right: auto;
							}
						}

						@media screen and (min-width: 902px) {


							.cta-form-wrapper {
								padding-left: 20px;
								padding-right: 20px;
								width: 70%;
								margin: 0 auto;
								background-color: white;
								-webkit-box-shadow: 1px 72px 126px -71px rgba(153,153,153,1);
								-moz-box-shadow: 1px 72px 126px -71px rgba(153,153,153,1);
								box-shadow: 1px 72px 126px -71px rgba(153,153,153,1);
								padding-bottom: 10px;
								margin-bottom: 300px;
								margin-top: 630px;
							}

						}

				`}</style>

					<div className="cta-text-wide">{this.state.serverResponseHeading}</div>
					<div className="cta-text-summary">{this.state.serverResponseMessage}</div>

					<div className="cta-text-summary">Visit the Map?</div>

					<Link href="/map">
		        <a><img className="arrow-icon" src="/static/arrow-right-solid.svg" alt="Icon"/></a>
		      </Link>
				</div>

			);

		}

		return (

			<Layout>

				<style jsx>{`
					.container {
						min-height: 1100px;
						z-index: 2;
						overflow: hidden;
						// background-color: red;
						width: calc(100% - 40px);
						margin: 0 auto;
						position: relative;
						margin-top: 50px;
					}

					.hero-wrapper {
						position: relative;
					}

					.left-side {
						float: left;
						// padding-top: 150px;
						width: 70%;
						display: inline-block
					}

					.right-side {

						float: none;
						width: 100%;
						margin-left: 100px;
						padding-top: 40px;
						// padding: 40px;
						display: inline-block;
						// text-align: right;
						max-height: 400px;
						overflow: hidden;
					}

					.intro-text {
						margin-left: 30%;
						width: 80%;

						margin-top: 75px;
						font-weight: 700;
						font-size: 33px;

					}

					.subheading {
						text-align: left;
						margin-left: 0px;
						margin-top: 80px;
						color: white;
						font-weight: 700;
						font-size: 38px;


					}

					.body-text {
						box-sizing: border-box;
						clear: both;
						width: 100%;
						margin: 0 auto;
						display: block;
						padding: 10px;
						padding-bottom: 60px;
						padding-left: 0;
						// margin-left: 20px;
						margin-top: 25px;
						font-weight: 500;
						font-size: 16px;
						color: #777;
						line-height: 1.43;
					}

					.white {
						margin: 0;
						// margin-left:60px;
						margin-top: 30px;
						font-weight: 300;
						color: white;
						width: 75%;
					}

					img {
						width: 100%:
						// margin-left: 200px;
					}

					.white-square {
						width:87%;
						min-height: 400px;
						// min-height: 60%;
						position: absolute;
						right: -70px;
						right: 7%;
						top: 50px;

						background-color: white;
						z-index: -1;

						-webkit-box-shadow: 1px 77px 103px -71px rgba(153,153,153,1);
						-moz-box-shadow: 1px 77px 103px -71px rgba(153,153,153,1);
						box-shadow: 1px 77px 103px -71px rgba(153,153,153,1);

					}

					.go-to-map {
						clear: both;
						background-color: #102D64;
						// background-color: #2CABFB;
						width: 90%;
						min-height: 450px;
						margin-top: 50px;
						margin-bottom: 45px;
						display:inline-block;
						padding: 30px;
						padding-top:0;
						padding-right: 0;
						padding-bottom: 0;

						-webkit-box-shadow: 1px 72px 126px -71px rgba(153,153,153,1);
						-moz-box-shadow: 1px 72px 126px -71px rgba(153,153,153,1);
						box-shadow: 1px 72px 126px -71px rgba(153,153,153,1);
					}

					.form-field-text {
						width:65%;
						display: block;
						// margin: 0 auto;
						height: 45px;
						margin-top: 68px;

						border-radius: 45px;
						padding-left: 35px;
						font-weight: 200;
						// text-align:center;
						border: 5px solid #2CABFB;

					}

					.cta-link {
						clear: both;
						display: block;
						text-align: center;
						font-weight: 600;
						text-decoration:none;
						margin: 0 auto;
						margin-top: 40px;
						margin-bottom:60px;
						background-color: #102D64;
						color: white;
						text-transform: uppercase;
						// border: 4px solid #2CABFB;
						width: 40%;
						padding-left: 60px;
						padding-right: 60px;
						padding-top: 13px;
						padding-bottom: 13px;
						border-radius: 45px;
						transition: all 0.4s ease-out;
						border: 3px solid #ececec;
					}

					.cta-link:hover {
						-webkit-box-shadow: 1px 72px 126px -71px rgba(153,153,153,1);
						-moz-box-shadow: 1px 72px 126px -71px rgba(153,153,153,1);
						box-shadow: 1px 72px 126px -71px rgba(153,153,153,1);
						background-color: white;
						color: #2CABFB;
						border: 3px solid #2CABFB;
						cursor: pointer;
					}

					.cta-text-wide {
						display: block;
						// border-top: 2px solid #c8c8c8;
						margin-top: 50px;
						padding-top: 80px;
						font-size: 23px;
						text-align: center;
						line-height: 1.64;
						font-weight: 700;

					}

					.cta-text-summary {
						display: block;
						// border-top: 2px solid #c8c8c8;
						margin-top: 40px;
						// padding-top: 80px;
						font-size: 16px;
						text-align: left;
						line-height: 1.64;
					}


					.cta-3-wrapper {
						margin-top: 100px;
					}

					.card {
						border-top: 1px solid #c8c8c8;
						padding-top: 60px;
						padding-bottom: 60px;
					}

					.field-icon {
						width: 100%;
						text-align: center;
					}

					.icon {
						width: 30%;
					}

					.icon-tint {
						width: 22%;
					}

					.field-title {
						margin-top: 30px;
						font-size: 36px;
						text-align: center;
					}

					.field-summary {
						width: 75%;
						margin: 0 auto;
						margin-top: 15px;
						text-align: center;
					}

					.cta-form-wrapper {
						// width: 70%;
						// margin: 0 auto;
						background-color: white;
						-webkit-box-shadow: 0px 2px 5px 0px rgba(212,212,212,1);
						-moz-box-shadow: 0px 2px 5px 0px rgba(212,212,212,1);
						box-shadow: 0px 2px 5px 0px rgba(212,212,212,1);
						padding-bottom: 10px;
						margin-bottom: 150px;

						padding-left: 30px;
						padding-right: 30px;

					}

					.arrow-icon {
						width: 30%;
						float: right;
						margin-bottom: 30px;
						margin-right: 30px;
					}

					.text-label {
						display: block;
						text-align: center;
						margin-top:30px;
						text-transform: uppercase;
						font-weight: 600;
						font-size: 14px;
					}

					.form-field-text {
						box-sizing: border-box;
						width:90%;
						display: block;
						margin: 0 auto;
						height: 45px;
						margin-top: 14px;

						border-radius: 45px;
						padding-left: 0px;
						font-weight: 200;
						text-align:center;
						border: 3px solid #2CABFB;

					}

					@media screen and (min-width: 768px) {
						.cta-text-summary {
							display: block;
							// border-top: 2px solid #c8c8c8;
							margin-top: 40px;
							margin-bottom: 50px;
							// padding-top: 80px;
							font-size: 16px;
							text-align: center;
							line-height: 1.64;
							width: 75%;
							margin-left: auto;
							margin-right: auto;
						}
						.arrow-icon {
							width: 15%;
							float: right;
							margin-bottom: 30px;
							margin-right: 30px;
						}
					}

					@media screen and (min-width: 902px) {

						.left-side {
							float: left;
							padding-top: 150px;
							width: 50%;
							display: inline-block
						}

						.right-side {

							float: left;
							width: 50%;
							margin-left: inherit;
							// max-height: inherit;
							max-height: 500px;
							padding-top: 40px;
							// padding: 40px;
							display: inline-block;
							text-align: center;
						}

						.intro-text {
							margin-left: 20%;
							margin-top: 75px;
							font-weight: 700;
							font-size: 63px;

						}


						.go-to-map {
							position: relative;
							clear: both;
							// background-color: #2a63ff;
							// background-color: #2CABFB;
							width: 70%;
							min-height: 450px;
							margin-top: 110px;
							margin-bottom: 75px;
							display:inline-block;
							padding: 60px;
							padding-top:0;
							padding-right: 0;
							padding-bottom: 0;

						}

						// .arrow-icon {
						// 	position: absolute;
						// 	right: 0;
						// 	bottom: -500px;
						//
						// }

						.subheading {
							text-align: left;
							margin-left: 0px;
							margin-top: 80px;
							color: white;
							font-weight: 700;
							font-size: 38px;


						}

						.body-text {
							box-sizing: border-box;
							clear: both;
							width: 60%;
							margin-left: 10%;
							display: inline-block;
							margin-top: 50px;
							font-weight: 500;
							font-size: 23px;
							color: #777;
							padding: 0;
						}

						.white {
							margin: 0;
							// margin-left:60px;
							margin-top: 30px;
							font-weight: 300;
							color: white;
							width: 75%;
						}

						img {
							width: 100%:
						}

						.white-square {
							width:37%;
							min-height: 700px;
							// min-height: 60%;
							position: absolute;
							right: -70px;
							right: 7%;
							top: 140px;

							background-color: #2CABFB;
							z-index: -1;

							-webkit-box-shadow: 1px 77px 103px -71px rgba(153,153,153,1);
							-moz-box-shadow: 1px 77px 103px -71px rgba(153,153,153,1);
							box-shadow: 1px 77px 103px -71px rgba(153,153,153,1);

						}

						.cta-link {
							clear: both;
							display: block;
							text-align: center;
							font-weight: 700;
							margin: 0 auto;
							margin-top: 50px;
							margin-bottom:100px;
							background-color: #102D64;
							color: white;
							text-transform: uppercase;
							// border: 4px solid #2CABFB;
							width: 40%;
							padding-left: 120px;
							padding-right: 120px;
							padding-top: 23px;
							padding-bottom: 23px;
							border-radius: 45px;
							transition: all 0.2s;
							border: 3px solid #ececec;
						}

						.cta-link:hover {
							-webkit-box-shadow: 1px 72px 126px -71px rgba(153,153,153,1);
							-moz-box-shadow: 1px 72px 126px -71px rgba(153,153,153,1);
							box-shadow: 1px 72px 126px -71px rgba(153,153,153,1);
							background-color: white;
							color: #2CABFB;
							border: 3px solid #2CABFB;
							cursor: pointer;
						}

						.cta-text-wide {

							display: block;
							margin-top: 70px;
							// padding-top: 80px;
							font-size: 23px;
							text-align: center;
							line-height: 1.64;

						}

						.field-image {
							width: 100%;
						}

						.cta-3-wrapper {
							clear: both;
							width: 85%;
							margin: 0px auto;
							margin-bottom: 0;
						}

						.card {
							width: 33.3333333333367%;
							display: inline-block;
							border-top: none;
							padding-top: 60px;
							padding-bottom: 60px;
						}

						.field-icon {
							width: 100%;
							text-align: left;
						}

						.icon {
							width: 30%;
						}

						.icon-tint {
							width: 19%;
						}

						.field-title {
							margin-top: 30px;
							font-size: 36px;
							text-align: left;
							padding-right:
						}

						.field-summary {
							width: 68%;
							margin-left: 0;
							// margin: 0 auto;
							margin-top: 15px;
							text-align: left;

						}


						.text-label {
							display: block;
							text-align: center;
							margin-top:20px;
							text-transform: uppercase;
							font-weight: 600;
							font-size: 14px;
						}

						.form-field-text {
							width:60%;
							display: block;
							margin: 0 auto;
							height: 45px;
							margin-top: 14px;

							border-radius: 45px;
							padding-left: 35px;
							font-weight: 200;
							text-align:left;
							border: 3px solid #2CABFB;

						}

						.cta-form-wrapper {
							position: relative;
							padding-left: 20px;
							padding-right: 20px;
							width: 70%;
							margin: 0 auto;
							background-color: white;
							-webkit-box-shadow: 1px 72px 126px -71px rgba(153,153,153,1);
							-moz-box-shadow: 1px 72px 126px -71px rgba(153,153,153,1);
							box-shadow: 1px 72px 126px -71px rgba(153,153,153,1);
							padding-bottom: 10px;
							margin-bottom: 100px;
							margin-top: 630px;
						}

					}

			`}</style>


			<div className="container">
				<span className="white-square"></span>
				<div className="hero-wrapper">
					<div className="left-side">
						<div className="intro-text">Get notified when are ready to go live!</div>

					</div>

					<div className="right-side">
						<img src="/static/signuphero.jpg" alt="my image" />
					</div>
				</div>

				{formContainer}

			</div>





			</Layout>

		)
	}

}

export default SignUp
