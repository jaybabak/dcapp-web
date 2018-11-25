import React from 'react'
import Header from '../comps/Header'
import Layout from '../comps/Layout'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const mapStyle = {
	map: {
		width: '100%',
		height: '74.5%',
		maxHeight: '90%',
		// maxHeight: '740px',
		overflow: 'hidden'
	},
}


export class Mappy extends React.Component {

	componentWillMount() {

		console.log('test');

	}

	render() {

		return (


					<Layout>
						<style jsx>{`
							.map {
								width: 100%;
								// height: 100%;
								// max-height:400px;
								// background-color: #002766;
								overflow: hidden;
							}

						`}</style>


						<div className="map">
							<Map
								google={this.props.google}
								style={mapStyle.map}
								initialCenter={{
									lat: 25.267369,
									lng: 51.529451
								}}
								zoom={14}
							>
								<Marker
									title={'The marker`s title will appear as a tooltip.'}
									name={'SOMA'}
									position={{lat: 25.262811, lng: 51.532094}} />

									<Marker
								    name={'Dolores park'}
								    position={{lat: 25.270398, lng: 51.524723}} />
								  <Marker />

									<Marker
								    name={'Dolores park'}
								    position={{lat: 25.302786, lng: 51.512212}} />
								  <Marker />

									<Marker
								    name={'Dolores park'}
								    position={{lat: 25.208945, lng: 51.444551}} />
								  <Marker />


							</Map>

						</div>

					</Layout>





		);


	}

}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyATx_dhLvGCK6TqL0s8oBQ7ri0lIi9GPSY'
})(Mappy)
