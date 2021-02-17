import React from "react";
import { MDBCardBody, MDBCardText, MDBCol, MDBRow, MDBView } from "mdbreact";
import { priceFormatted } from "../helpers";

export const PropertiesVip = ({ properties }) => {
	return (
		<>
			<h2 className="h2-responsive font-weight-bold text-center my-4 globalColor">
				Biens Sponsorisés
			</h2>
			<MDBRow>
				{properties.map((property) => (
					<MDBCol md="4" lg="4" key={property._id}>
						<MDBView zoom>
							<img
								src={property.pictures[0]}
								alt={property.title}
								className="globalImg"
							/>
						</MDBView>
						<MDBCardBody>
							<h3 className="card-title h4-responsive">{property.title}</h3>
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
