import React from 'react'
import axios from 'axios'
import Header from '../comps/Header'
import Layout from '../comps/Layout'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const mapStyle = {
	map: {
		width: '100%',
		// height: '74.5%',
		maxHeight: '78vh',
		// maxHeight: '740px',
		overflow: 'hidden'
	},
}


export class Mappy extends React.Component {

	constructor(props) {
    super(props);

		this.state = {
			data: [],
			showingInfoWindow: false,
			activeMarker: {},
			selectedPlace: {},
		};

		// this.componentDidMount = this.componentDidMount.bind(this);
  }


	componentWillMount = () => {

		axios.get('http://localhost:5000/stores')
			.then(response => {

				this.setState({
					data: response.data
				});

			})
			.catch(function (error) {
				console.log(error);
			});


	}

	componentDidMount = () => {




	}

	onMarkerClick = (props, marker, e) =>
	this.setState({
		selectedPlace: props,
		activeMarker: marker,
		showingInfoWindow: true
	});

	onMapClicked = (props) => {
	if (this.state.showingInfoWindow) {
		this.setState({
			showingInfoWindow: false,
			activeMarker: null
		})
	}
};

	render() {

				var stores = this.state.data;
				console.log(stores);

				const listItems = stores.map((store) =>
								<Marker
									key={store._id}
									name={store.name}
									position={{lat: store.address.lat, lng: store.address.long}}
									icon={{
										url: "/static/marker_custom.svg",
										anchor: new google.maps.Point(32,32),
										scaledSize: new google.maps.Size(64,64)
									}}
									onClick={this.onMarkerClick}
								 />

							);




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
								{listItems}

								<Marker
									title={'The marker`s title will appear as a tooltip.'}
									name={'SOMA'}
									position={{lat: 25.262811, lng: 51.532094}}
									icon={{
							      url: "/static/marker_custom.svg",
							      anchor: new google.maps.Point(32,32),
							      scaledSize: new google.maps.Size(64,64)
							    }}
									onClick={this.onMarkerClick}
								 />

								<Marker
							    name={'Dolores park'}
							    position={{lat: 25.270398, lng: 51.524723}}
									icon={{
										url: "/static/marker_custom.svg",
										anchor: new google.maps.Point(32,32),
										scaledSize: new google.maps.Size(64,64)
									}}
									onClick={this.onMarkerClick}
								/>
							  <Marker />

								<Marker
							    name={'Dolores park'}
							    position={{lat: 25.302786, lng: 51.512212}}
									icon={{
										url: "/static/marker_custom.svg",
										anchor: new google.maps.Point(32,32),
										scaledSize: new google.maps.Size(64,64)
									}}
									onClick={this.onMarkerClick}
								 />
							  <Marker />

								<Marker
							    name={'Dolores park'}
							    position={{lat: 25.208945, lng: 51.444551}}
									icon={{
										url: "/static/marker_custom.svg",
										anchor: new google.maps.Point(32,32),
										scaledSize: new google.maps.Size(64,64)
									}}
									onClick={this.onMarkerClick}
								/>
							  <Marker />

								<InfoWindow
				          marker={this.state.activeMarker}
				          visible={this.state.showingInfoWindow}>
				            <div>
				              <h1>{this.state.selectedPlace.name}</h1>
				            </div>
				        </InfoWindow>

							</Map>

						</div>

					</Layout>





		);


	}

}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyATx_dhLvGCK6TqL0s8oBQ7ri0lIi9GPSY'
})(Mappy)
