import React from "react";
import {
	MDBCardBody,
	MDBCardText,
	MDBCardTitle,
	MDBCol,
	MDBRow,
	MDBView,
} from "mdbreact";
import { priceFormatted } from "../helpers";

export const PropertiesVip = ({ properties }) => {
	return (
		<>
			<h2 className="h2-responsive font-weight-bold text-center my-4 global-color">
				Sponsored Properties
			</h2>
			<MDBRow>
				{properties.map((property) => (
					<MDBCol md="4" lg="4" key={property._id}>
						<MDBView zoom>
							<img
								src={property.pictures[0]}
								alt={property.title}
								className="global-img"
							/>
						</MDBView>
						<MDBCardBody>
							<MDBCardTitle className="h4-responsive">
								{property.title}
							</MDBCardTitle>
							<MDBCardText>
								<strong>{priceFormatted(property.price)}</strong>
							</MDBCardText>
						</MDBCardBody>
					</MDBCol>
				))}
			</MDBRow>
		</>
	);
};
