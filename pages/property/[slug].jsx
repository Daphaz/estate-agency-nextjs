import React from "react";
import api from "../../auth/axios";
import { Layout } from "../../components/Layout";
import { CardCarousel } from "../../components/CardCarousel";
import {
	MDBContainer,
	MDBCard,
	MDBCardBody,
	MDBCol,
	MDBRow,
	MDBIcon,
} from "mdbreact";
import { Slug } from "../../components/Slug";
import Skeleton from "react-loading-skeleton";
import { CardVip } from "../../components/CardVip";
import { CardRelated } from "../../components/CardRelated";

const Property = ({ property, properties, propertyRelated }) => {
	const styles = {
		fontSize: 15,
	};
	return (
		<>
			{property ? (
				<Layout>
					<MDBContainer>
						<MDBCard className="mt-4">
							<MDBCardBody>
								<MDBRow>
									<MDBCol md="8" lg="8">
										<CardCarousel property={property} />
										<Slug property={property} />
									</MDBCol>
									<MDBCol md="4" lg="4">
										<h3 className="h4-responsive mt-5">Contactez-nous</h3>
										<div style={styles}>
											<MDBIcon icon="calculator" className="mr-1" />
											22 Lorem, ipsum dolor.
										</div>
										<div style={styles}>
											<MDBIcon icon="phone-alt" className="mr-1" />
											01 23 45 67 89 11
										</div>
										<div style={styles}>
											<MDBIcon icon="mobile-alt" className="mr-1" />
											06 00 01 00 01 00
										</div>
										<div style={styles}>
											<MDBIcon icon="envelope" className="mr-1" />
											jhon@doe.com
										</div>
										<h4 className="h4-responsive mt-3">Biens Sponsorisés</h4>
										<CardVip properties={properties} />
									</MDBCol>
								</MDBRow>
								<hr className="my-4" />
								<MDBRow>
									{propertyRelated && propertyRelated.length !== 0 && (
										<MDBCol>
											<h4 className="h4-responsive mb-5">Biens Similaire</h4>
											<CardRelated properties={propertyRelated} />
										</MDBCol>
									)}
								</MDBRow>
							</MDBCardBody>
						</MDBCard>
					</MDBContainer>
				</Layout>
			) : (
				<Layout>
					<MDBContainer>
						<MDBCard className="mt-4">
							<MDBCardBody>
								<MDBRow>
									<MDBCol md="8" lg="8">
										<Skeleton width={"100%"} height={350} />
										<h2>
											<Skeleton />
										</h2>
										<hr className="my-4" />
										<Skeleton count={2} />
										<hr className="my-4" />
										<p>
											<Skeleton count={4} />
										</p>
										<p>
											<Skeleton count={5} />
										</p>
										<Skeleton count={2} height={50} width={"100%"} />
									</MDBCol>
									<MDBCol md="4" lg="4">
										<h3>
											<Skeleton />
										</h3>
										<Skeleton count={4} />
										<h4>
											<Skeleton />
										</h4>
										<div className="my-3">
											<Skeleton height={250} />
										</div>
										<div className="my-3">
											<Skeleton height={250} />
										</div>
										<div className="my-3">
											<Skeleton height={250} />
										</div>
									</MDBCol>
								</MDBRow>
							</MDBCardBody>
						</MDBCard>
					</MDBContainer>
				</Layout>
			)}
		</>
	);
};

export const getStaticPaths = async () => {
	const { data } = await api.get("/api/properties?limit=100");
	const properties = data.data;
	const paths = properties.map((property) => ({
		params: { slug: property.slug },
	}));

	return {
		paths,
		fallback: true,
	};
};

export const getStaticProps = async ({ params }) => {
	const { slug } = params;
	const { data: property } = await api.get(`/api/property/${slug}`);
	const { data: properties } = await api.get("/api/properties/vip");
	const { data: propertyRelated } = await api.get(
		`/api/properties/related/${property._id}`
	);

	return {
		props: {
			property,
			properties,
			propertyRelated,
		},
	};
};

export default Property;
