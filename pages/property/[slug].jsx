import React from "react";
import api from "../../auth/axios";
import { Layout } from "../../components/Layout";
import { CardCarousel } from "../../components/CardCarousel";
import { MDBContainer, MDBCard, MDBCardBody, MDBCol, MDBRow } from "mdbreact";
import { Slug } from "../../components/Slug";
import Skeleton from "react-loading-skeleton";

const Property = ({ property }) => {
	return (
		<>
			{property ? (
				<Layout>
					<MDBContainer>
						<MDBCard className="mt-4">
							<MDBCardBody>
								<MDBRow>
									<MDBCol md="12" lg="12">
										<CardCarousel property={property} />
										<Slug property={property} />
									</MDBCol>
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
									<MDBCol md="12" lg="12">
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

	return {
		props: {
			property,
		},
	};
};

export default Property;
