import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import api from "../auth/axios";

import { PropertiesVip } from "../components/propertiesVip";
import { Carousel } from "../components/Carousel";

export default function Home({ propertiesVip }) {
	return (
		<Layout>
			<Carousel />
			<div className="container">
				<PropertiesVip properties={propertiesVip} />
			</div>
		</Layout>
	);
}

export const getStaticProps = async () => {
	const { data: propertiesVip } = await api.get("/api/properties/vip");

	return {
		props: {
			propertiesVip,
		},
	};
};
