import Head from "next/head";
import api from "../auth/axios";

import { Layout } from "../components/Layout";
import { Carousel } from "../components/Carousel";

import { PropertiesVip } from "../components/propertiesVip";
import { PropertiesSection } from "../components/propertiesSection";
import { Features } from "../components/features";

export default function Home({ propertiesVip, properties }) {
	return (
		<Layout>
			<Head>
				<title>Project Estate Agency</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta
					name="Description"
					content="Projet pour pratiquer et apprendre Nextjs"
				/>
			</Head>
			<Carousel />
			<div className="container">
				<PropertiesVip properties={propertiesVip} />
				<PropertiesSection properties={properties} />
				<Features />
			</div>
		</Layout>
	);
}

export const getStaticProps = async () => {
	const { data: propertiesVip } = await api.get("/api/properties/vip");
	const { data } = await api.get("/api/properties?limit=6");
	const properties = data.data;

	return {
		props: {
			propertiesVip,
			properties,
		},
	};
};
