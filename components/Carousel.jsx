import React from "react";
import {
	MDBCarousel,
	MDBCarouselInner,
	MDBCarouselItem,
	MDBView,
} from "mdbreact";

export const Carousel = () => {
	return (
		<MDBCarousel
			activeItem={1}
			length={3}
			showControls={true}
			showIndicators={false}
			className="z-depth-1 carouselMain"
			slide>
			<MDBCarouselInner>
				<MDBCarouselItem itemId="1">
					<MDBView>
						<img
							className="d-block w-100 carouselItem"
							src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
							alt="First slide"
						/>
					</MDBView>
				</MDBCarouselItem>
				<MDBCarouselItem itemId="2">
					<MDBView>
						<img
							className="d-block w-100 carouselItem"
							src="https://images.pexels.com/photos/32870/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
							alt="Second slide"
						/>
					</MDBView>
				</MDBCarouselItem>
				<MDBCarouselItem itemId="3">
					<MDBView>
						<img
							className="d-block w-100 carouselItem"
							src="https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
							alt="Third slide"
						/>
					</MDBView>
				</MDBCarouselItem>
			</MDBCarouselInner>
		</MDBCarousel>
	);
};
