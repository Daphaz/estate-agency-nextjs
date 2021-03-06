import React, { useState, useEffect } from "react";
import { MDBContainer, MDBInput } from "mdbreact";
import { Layout } from "../components/Layout";
import useAuth from "../auth/context";
import { useRouter } from "next/router";
import { redirectFromServer } from "../auth/cookies";

const Login = () => {
	const [state, setState] = useState({
		username: "",
		password: "",
	});

	const router = useRouter();

	const { login, isAuthenticated } = useAuth();

	useEffect(() => {
		if (isAuthenticated) router.push("/");
	}, [isAuthenticated]);

	const handleChange = (value, e) => {
		setState({ ...state, [value]: e.target.value });
	};

	const onSubmit = (e) => {
		e.preventDefault();
		login(state.username, state.password);
	};

	return (
		<Layout footer>
			<MDBContainer>
				<form onSubmit={onSubmit}>
					<p className="h4 text-center my-4">Connexion</p>
					<div className="grey-text">
						<MDBInput
							label="Nom d'utilisateur"
							icon="user"
							group
							name="username"
							type="text"
							onChange={(e) => handleChange("username", e)}
						/>
						<MDBInput
							label="Mot de passe"
							icon="lock"
							group
							name="password"
							type="password"
							onChange={(e) => handleChange("password", e)}
						/>
					</div>
					<div className="text-center">
						<button type="submit" className="globalBtn">
							Login
						</button>
					</div>
				</form>
			</MDBContainer>
		</Layout>
	);
};

export const getServerSideProps = async (context) => {
	redirectFromServer(context);

	return {
		props: {},
	};
};

export default Login;
