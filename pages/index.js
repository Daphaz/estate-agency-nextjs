import Head from "next/head";
import styles from "../styles/Home.module.css";
import api from "../auth/axios";

import Layout from "../components/Layout";
import { Carousel } from "../components/Carousel";

import { PropertiesVip } from "../components/propertiesVip";
import { PropertiesSection } from "../components/propertiesSection";

export default function Home({ propertiesVip, properties }) {
	return (
		<Layout>
			<Carousel />
			<div className="container">
				<PropertiesVip properties={propertiesVip} />
				<PropertiesSection properties={properties} />
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
