import React from "react";
import { MDBCard, MDBCardImage } from "mdbreact";
import { priceFormatted } from "../helpers";
import Router from "next/router";

export const CardVip = ({ properties }) => {
	const handleClick = (slug) => {
		Router.push(`/property/${slug}`);
	};
	return (
		<>
			{properties
				? properties.map((property) => (
						<MDBCard
							key={property._id}
							className="my-2"
							onClick={() => handleClick(property.slug)}>
							<MDBCardImage
								src={property.pictures[0]}
								zoom
								hover
								waves
								className="d-block w-100"
							/>
							<div className="img-top">
								<button className="d-inline-flex vedette">En vedette</button>
								<button className="d-inline-flex exclu">Exclusivité</button>
							</div>
							<div className="prix">{priceFormatted(property.price)}</div>
						</MDBCard>
				  ))
				: null}
			<style jsx>
				{`
					.img-top {
						position: absolute;
						top: 10px;
						left: 5px;
					}
					.vedette {
						background-color: #3f729b;
						color: white;
						text-transform: capitalize;
						font-size: 10px;
						font-weight: bolder;
						border: none;
						margin-right: 5px;
					}
					.exclu {
						border: none;
						background-color: var(--danger);
						color: white;
						text-transform: capitalize;
						font-size: 10px;
						font-weight: bolder;
					}
					.vedette:focus,
					.exclu:focus {
						outline: none;
					}
					.prix {
						width: 100%;
						position: absolute;
						bottom: 0;
						left: 0;
						font-weight: bold;
						color: white;
						background-color: #343a4094;
						padding: 0 5px;
					}
				`}
			</style>
		</>
	);
};
