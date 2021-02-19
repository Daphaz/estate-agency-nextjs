import React from "react";
import {
	MDBCard,
	MDBCardBody,
	MDBCardHeader,
	MDBCardFooter,
	MDBCol,
	MDBRow,
	MDBCardImage,
} from "mdbreact";
import { priceFormatted } from "../helpers";
import Router from "next/router";

export const CardRelated = ({ properties }) => {
	const handleClick = (slug) => {
		Router.push(`/property/${slug}`);
	};
	return (
		<MDBRow>
			{properties
				? properties.map((property) => (
						<MDBCol className="mb-3" md="6" lg="4" key={property._id}>
							<MDBCard onClick={() => handleClick(property.slug)}>
								<MDBCardHeader>{property.title}</MDBCardHeader>
								<MDBCardBody>
									<MDBCardImage
										src={property.pictures[0]}
										className="globalImg"
										hover
										waves
									/>
								</MDBCardBody>
								<MDBCardFooter>
									<div className="globalColor">
										{priceFormatted(property.price)}
									</div>
									<p>
										<small>{property.city}, Monde</small>
									</p>
								</MDBCardFooter>
							</MDBCard>
						</MDBCol>
				  ))
				: null}
		</MDBRow>
	);
};
