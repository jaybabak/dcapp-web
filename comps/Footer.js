import Link from 'next/link'

const linkStyle = {
	marginRight: 15
}

const Footer = () => (

    <div className="footer">
    	<p>Copyright DCAPP 2018. All Rights Reserved.</p>

    	<style jsx>{`
	      .footer {
					position: absolute;
					bottom: -40px;
					bottom: 0px;
	      	background-color: white;
	      	margin-top: 40px;
	      	box-sizing: border-box;
	      	max-width: 100%;
	      	width: 100%;
	      	margin: 0 auto;
	      	padding: 15px;
					// border: 1px solid #DDD;
					font-size: 16px;

					-webkit-box-shadow: 2px 5px 20px -13px rgba(0,0,0,0.55);
					-moz-box-shadow: 2px 5px 20px -13px rgba(0,0,0,0.55);
					box-shadow: 2px 5px 20px -13px rgba(0,0,0,0.55);

	      }

				.footer p {
					font-size: 12px;
				}

				@media screen and (min-width: 768px) {

					.footer {
		      	// background-color: white;
		      	// margin-top: 40px;
		      	// box-sizing: border-box;
		      	// max-width: 100%;
		      	// width: 100%;
		      	// margin: 0 auto;
		      	padding: 15px;
						border: 1px solid #DDD;

						// -webkit-box-shadow: 2px 5px 20px -13px rgba(0,0,0,0.55);
						// -moz-box-shadow: 2px 5px 20px -13px rgba(0,0,0,0.55);
						// box-shadow: 2px 5px 20px -13px rgba(0,0,0,0.55);

		      }

					// .footer p {
					// 	font-size: 16px;
					// }
				}

				@media screen and (min-width: 920px) {

					// .footer {
					// 	position: inherit;
					// 	bottom: inherit;
					//
					// 	background-color: white;
					// 	margin-top: 40px;
					// 	box-sizing: border-box;
					// 	max-width: 100%;
					// 	width: 100%;
					// 	margin: 0 auto;
					// 	padding: 40px;
					// 	border: 1px solid #DDD;
					//
					// 	-webkit-box-shadow: 2px 5px 20px -13px rgba(0,0,0,0.55);
					// 	-moz-box-shadow: 2px 5px 20px -13px rgba(0,0,0,0.55);
					// 	box-shadow: 2px 5px 20px -13px rgba(0,0,0,0.55);
					//
					// }

					.footer p {
						font-size: 16px;
					}
				}


    	`}</style>

    </div>

)

export default Footer
