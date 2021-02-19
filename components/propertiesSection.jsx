import React from "react";
import {
	MDBCardBody,
	MDBCardText,
	MDBCol,
	MDBRow,
	MDBView,
	MDBBtn,
} from "mdbreact";
import { priceFormatted } from "../helpers";
import { useRouter } from "next/router";

export const PropertiesSection = ({ properties }) => {
	const router = useRouter();
	const handleClick = () => {
		router.push("/properties");
	};
	const handleClickImg = (slug) => {
		router.push(`/property/${slug}`);
	};
	return (
		<>
			<h2 className="h2-responsive font-weight-bold text-center my-4 globalColor">
				Notre Catalogue
			</h2>
			<MDBRow>
				{properties.map((property) => (
					<MDBCol md="4" lg="4" key={property._id}>
						<MDBView zoom onClick={() => handleClickImg(property.slug)}>
							<img
								src={property.pictures[0]}
								alt={property.title}
								className="globalImg pointerImg"
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
			<div className="text-center">
				<MDBBtn className="globalBtn" onClick={handleClick}>
					Afficher plus
				</MDBBtn>
			</div>
			<hr className="my-5" />
		</>
	);
};
