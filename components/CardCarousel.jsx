import React from "react";
import Skeleton from "react-loading-skeleton";
import {
	MDBCarousel,
	MDBCarouselInner,
	MDBCarouselItem,
	MDBView,
} from "mdbreact";

export const CardCarousel = ({ property }) => {
	return (
		<MDBCarousel
			activeItem={1}
			length={2}
			showControls={true}
			showIndicators={false}
			className="z-depth-1 cardCarousel"
			slide>
			<MDBCarouselInner>
				<MDBCarouselItem itemId="1">
					<MDBView>
						{property && property.pictures[0] ? (
							<img
								className="cardCarouselImg"
								src={property.pictures[0]}
								alt="First slide"
							/>
						) : (
							<Skeleton height={400} />
						)}
					</MDBView>
				</MDBCarouselItem>
				<MDBCarouselItem itemId="2">
					<MDBView>
						{property && property.pictures[1] ? (
							<img
								className="cardCarouselImg"
								src={property.pictures[1]}
								alt="Second slide"
							/>
						) : (
							<Skeleton height={400} />
						)}
					</MDBView>
				</MDBCarouselItem>
			</MDBCarouselInner>
		</MDBCarousel>
	);
};
