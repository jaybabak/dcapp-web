import React from 'react'
import axios from 'axios'
import Header from '../comps/Header'
import Layout from '../comps/Layout'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const mapStyle = {
	map: {
		width: '100%',
		height: '100%',
		maxHeight: 'calc(100% - 165px)',
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

	onMarkerClick = (props, marker, e) => {
		this.setState({
			selectedPlace: props,
			storeInfo: props.store,
			phoneNumber: props.store.phoneNumber ? props.store.phoneNumber : "No Phone Number Found",
			description: props.store.description ? props.store.description : "No Description Found",
			activeMarker: marker,
			showingInfoWindow: true
		});
	}

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
									store={store}
									onClick={this.onMarkerClick}
								 />

							);

		return (


					<Layout overflow={true}>
						<style jsx>{`
							.map {
								width: 100%;
								height: 100%;
								// max-height:60%;
								// max-height: 580px;
								// background-color: #002766;
								overflow: hidden;

							}


						`}</style>


						<div className="map">

							<Map
								google={this.props.google}
								style={mapStyle.map}
								// options={mapOptions}
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
									// onClick={this.onMarkerClick}
								 />

								<Marker
							    name={'Dolores park'}
							    position={{lat: 25.270398, lng: 51.524723}}
									icon={{
										url: "/static/marker_custom.svg",
										anchor: new google.maps.Point(32,32),
										scaledSize: new google.maps.Size(64,64)
									}}
									// onClick={this.onMarkerClick}
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
									// onClick={this.onMarkerClick}
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
									// onClick={this.onMarkerClick}
								/>
							  <Marker />

								<InfoWindow
				          marker={this.state.activeMarker}
				          visible={this.state.showingInfoWindow}>
				            <div>
				              <h1>{this.state.selectedPlace.name}</h1>
				              <h3>{this.state.phoneNumber}</h3>
				              <p>{this.state.description}</p>
				            </div>
				        </InfoWindow>

							</Map>

						</div>

					</Layout>





		);


	}

}


const LoadingContainer = (props) => (
<div>

	<style jsx>{`

		.loading {
			width: 100%;
			height: 100%;
			padding-top: 30%;
			padding-left:25px;
			font-size: 22px;
					// text-align: center;
			font-family: 'Montserrat', sans-serif;
		}

		@media screen and (min-width: 768px) {
			.loading {
				position: absolute;
				top: 0;
				left: 0;

				width: 100%;
				height: 100%;
				font-size: 26px;
				text-align: center;
				padding-top: 44vh;
				color: black;
				font-family: 'Montserrat', sans-serif;
				transition: all 1s ease-out;
			}

		}




	`}</style>

	<div className="loading">Loading Results...</div>
</div>
)

export default GoogleApiWrapper({
  apiKey: 'AIzaSyATx_dhLvGCK6TqL0s8oBQ7ri0lIi9GPSY',
	LoadingContainer: LoadingContainer
})(Mappy)
