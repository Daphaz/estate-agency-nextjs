import React from "react";
import { Collapse } from "./Collapse";
import { priceFormatted } from "../helpers";
import Moment from "react-moment";

export const Slug = ({ property }) => {
	return (
		<div className="mt-4">
			<h2 className="globalColor">{property.title}</h2>
			<hr className="my-3" />
			<div>Trouvé dans {property.category.name}</div>
			<div>{property.address}</div>
			<hr className="my-2" />
			<div className="description mt-4 mb-3">{property.description}</div>
			<Collapse title="Adresse de la propriété">
				<section className="mt-3 pl-3">
					<div>
						<span className="font-weight-bolder globalColor">Ville</span> :{" "}
						{property.city}
					</div>
					<div>
						<span className="font-weight-bolder globalColor">Adresse</span> :{" "}
						{property.address}
					</div>
					<div>
						<span className="font-weight-bolder globalColor">Région</span> :{" "}
						Monde
					</div>
				</section>
			</Collapse>
			<Collapse title="Détails de la propriété">
				<section className="mt-3 pl-3">
					<div>
						<span className="font-weight-bolder globalColor">Surface</span> :{" "}
						{property.surface} m²
					</div>
					<div>
						<span className="font-weight-bolder globalColor">Prix</span> :{" "}
						{priceFormatted(property.price)}
					</div>
					<div>
						<span className="font-weight-bolder globalColor">Chambre(s)</span> :{" "}
						{property.bedrooms}
					</div>
					<div>
						<span className="font-weight-bolder globalColor">Catégorie</span> :{" "}
						{property.category.name}
					</div>
					<div>
						<span className="font-weight-bolder globalColor">
							Date de création
						</span>{" "}
						:{" "}
						<Moment format="DD/MM/YYYY à hh:mm:ss">{property.createdAt}</Moment>
					</div>
				</section>
			</Collapse>
			<style jsx>
				{`
					.description {
						white-space: pre-line;
					}
				`}
			</style>
		</div>
	);
};
