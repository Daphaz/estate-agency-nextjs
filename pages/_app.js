import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "../styles/globals.css";
import { AuthProvider } from "../auth/context";
import Nprogress from "nprogress";
import Router from "next/router";
import Head from "next/head";

Router.events.on("routeChangeStart", () => {
	Nprogress.start();
});
Router.events.on("routeChangeComplete", () => {
	Nprogress.done();
});
Router.events.on("routeChangeError", () => {
	Nprogress.start();
});

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<link rel="stylesheet" type="text/css" href="/nprogress.css" />
			</Head>
			<AuthProvider>
				<Component {...pageProps} />
			</AuthProvider>
		</>
	);
}

export default MyApp;
