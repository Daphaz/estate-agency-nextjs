import React from "react";
import {
	MDBView,
	MDBMask,
	MDBRow,
	MDBCard,
	MDBCardBody,
	MDBCol,
	MDBIcon,
	MDBBtn,
} from "mdbreact";
import Skeleton from "react-loading-skeleton";
import { priceFormatted } from "../helpers";

export const Card = ({ properties }) => {
	return (
		<>
			{properties ? (
				properties.map((property) => (
					<MDBCard className="my-3" key={property._id}>
						<MDBCardBody>
							<MDBRow>
								<MDBCol lg="5">
									<MDBView
										className="rounded z-depth-2 mb-lg-0 mb-4"
										hover
										waves>
										<img
											className="img-fluid globalImg"
											src={property.pictures[0]}
											alt=""
										/>
										<a href="#!">
											<MDBMask overlay="white-slight" />
										</a>
									</MDBView>
								</MDBCol>
								<MDBCol lg="7">
									<span className="globalColor">
										<h6 className="font-weight-bold mb-3">
											<MDBIcon icon="university" className="pr-2" />
											{property.category.name}
										</h6>
									</span>
									<h3 className="font-weight-bold mb-3 p-0">
										<strong>{property.title}</strong>
									</h3>
									<p>{property.description.slice(0, 150)}</p>
									<p className="globalColor">
										<strong>{priceFormatted(property.price)}</strong>
									</p>
									<p className="globalColor">
										<MDBIcon icon="city" className="mr-2" />
										<strong>{property.city}</strong>
									</p>
								</MDBCol>
							</MDBRow>
						</MDBCardBody>
					</MDBCard>
				))
			) : (
				<MDBCard className="my-3">
					<MDBCardBody>
						<MDBRow>
							<MDBCol lg="5">
								<Skeleton height={250} />
							</MDBCol>
							<MDBCol lg="7">
								<h6>
									<Skeleton />
								</h6>
								<h3>
									<Skeleton />
								</h3>
								<p>
									<Skeleton />
								</p>
								<p>
									<Skeleton />
								</p>
								<Skeleton />
							</MDBCol>
						</MDBRow>
					</MDBCardBody>
				</MDBCard>
			)}
		</>
	);
};
