import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({ children, footer }) => {
	return (
		<>
			<Header />
			{children}
			{!footer && <Footer />}
		</>
	);
};
