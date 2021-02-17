import React from "react";
import { MDBRow, MDBCol, MDBIcon } from "mdbreact";

export const Features = () => {
	return (
		<section className="my-5">
			<h3 className="h1-responsive font-weight-bold text-center my-5">
				Why is it so great?
			</h3>
			<p className="lead greyColor w-responsive text-center mx-auto mb-5">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam.
			</p>

			<MDBRow>
				<MDBCol lg="5" className="text-center text-lg-left">
					<img
						className="img-fluid mb-5 imgFeature"
						src="https://images.pexels.com/photos/2565222/pexels-photo-2565222.jpeg"
						alt="home in garden"
					/>
				</MDBCol>
				<MDBCol lg="7">
					<MDBRow className="mb-3">
						<MDBCol size="1">
							<MDBIcon icon="share" size="lg" className="indigo-text" />
						</MDBCol>
						<MDBCol xl="10" md="11" size="10">
							<h4 className="font-weight-bold mb-3">Safety</h4>
							<p className="greyColor">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit enim ad
								minima veniam, quis nostrum exercitationem ullam. Reprehenderit
								maiores aperiam assumenda deleniti hic.
							</p>
						</MDBCol>
					</MDBRow>
					<MDBRow className="mb-3">
						<MDBCol size="1">
							<MDBIcon icon="share" size="lg" className="indigo-text" />
						</MDBCol>
						<MDBCol xl="10" md="11" size="10">
							<h4 className="font-weight-bold mb-3">Technology</h4>
							<p className="greyColor">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit enim ad
								minima veniam, quis nostrum exercitationem ullam. Reprehenderit
								maiores aperiam assumenda deleniti hic.
							</p>
						</MDBCol>
					</MDBRow>
					<MDBRow className="mb-3">
						<MDBCol size="1">
							<MDBIcon icon="share" size="lg" className="indigo-text" />
						</MDBCol>
						<MDBCol xl="10" md="11" size="10">
							<h4 className="font-weight-bold mb-3">Finance</h4>
							<p className="greyColor">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit enim ad
								minima veniam, quis nostrum exercitationem ullam. Reprehenderit
								maiores aperiam assumenda deleniti hic.
							</p>
						</MDBCol>
					</MDBRow>
				</MDBCol>
			</MDBRow>
		</section>
	);
};
