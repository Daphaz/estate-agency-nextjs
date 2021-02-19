import React from "react";
import { MDBDataTableV5, MDBIcon, MDBView } from "mdbreact";
import { AdminRoute } from "../../auth/adminRoutes";
import { Layout } from "../../components/Layout";
import api from "../../auth/axios";
import useSWR from "swr";
import Moment from "react-moment";
import { priceFormatted } from "../../helpers";
import useAuth from "../../auth/context";

const fetcher = (url) => api.get(url).then((res) => res.data);

const PropertyList = () => {
	const { user } = useAuth();
	const { data } = useSWR("/api/properties?limit=50", fetcher);
	const properties = data && data.data;

	const dataTable = {
		columns: [
			{
				label: "Titre",
				field: "title",
				sort: "asc",
			},
			{
				label: "Description",
				field: "description",
				sort: "asc",
			},
			{
				label: "Prix",
				field: "prix",
				sort: "asc",
			},
			{
				label: "Créer le",
				field: "createdAt",
				sort: "asc",
			},
		],
		rows:
			properties &&
			properties.map((property) => {
				return {
					title: property.title,
					description: property.description.slice(0, 200),
					prix: priceFormatted(property.price),
					createdAt: (
						<Moment format="DD/MM/YY à hh:mm:ss" date={property.createdAt} />
					),
				};
			}),
	};
	return (
		<>
			{user && user.role === "admin" ? (
				<Layout>
					<div className="container-fluid">
						<MDBDataTableV5
							data={dataTable}
							entrieslabel="Lignes par page"
							entries={5}
							entriesOptions={[5, 10, 15, 20]}
							pagesAmount={4}
						/>
					</div>
				</Layout>
			) : (
				<div className="container-fluid">
					<h4 className="h4 h4-responsive globalColor text-center mt-5">
						Vous n'avez pas la permission d'accèder a cette page..
					</h4>
				</div>
			)}
		</>
	);
};

export default AdminRoute(PropertyList);
