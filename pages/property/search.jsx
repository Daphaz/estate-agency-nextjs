import React, { useState, useEffect } from "react";
import { Layout } from "../../components/Layout";
import { useRouter } from "next/router";
import axios from "axios";
import { SearchFilter } from "../../components/SearchFilter";

import { Card } from "../../components/Card";

const Search = () => {
	const [properties, setProperties] = useState("");
	const router = useRouter();

	const getProperties = async (isSubscribed) => {
		const { data } = await axios.post("/api/property/list/search", {
			filters: {
				title: router.query.title,
				category: router.query.category,
			},
		});
		if (isSubscribed) {
			setProperties(data);
		}
	};

	useEffect(() => {
		let isSubscribed = true;
		getProperties(isSubscribed);

		return () => (isSubscribed = false);
	}, [router.query.title, router.query.category, properties]);

	return (
		<Layout>
			<SearchFilter />
			<div className="container">
				{router.query.title || router.query.category ? (
					<div>
						<div className="mb-4 text-center globalColor font-weight-bolder">
							{properties.size} Bien(s) trouvé(s)
						</div>
						<Card properties={properties.data} />
					</div>
				) : (
					<div className="row">
						<div className="col-12 searchFailed">
							<h4 className="font-weight-bold h4-responsive globalColor">
								Oups désolé nous ne trouvons pas de biens avec cette
								recherche...
							</h4>
						</div>
					</div>
				)}
			</div>
			<style jsx>
				{`
					.searchFailed {
						height: 100%;
						display: flex;
						justify-content: center;
						align-items: center;
					}
				`}
			</style>
		</Layout>
	);
};

export default Search;
