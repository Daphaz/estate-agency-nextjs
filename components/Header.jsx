import React, { useState } from "react";
import {
	MDBNavbar,
	MDBNavbarNav,
	MDBNavItem,
	MDBNavbarToggler,
	MDBCollapse,
	MDBIcon,
} from "mdbreact";
import Link from "next/link";
import useAuth from "../auth/context";
import { useRouter } from "next/router";

export const Header = () => {
	const [toggle, setToggle] = useState(false);

	const { logout, user, isAuthenticated } = useAuth();

	const router = useRouter();

	const toggleCollapse = () => {
		setToggle(!toggle);
	};

	const handleLogout = () => {
		logout();
	};

	return (
		<MDBNavbar color="unique-color" dark expand="md">
			<MDBNavbarToggler onClick={toggleCollapse} />
			<MDBCollapse id="navbarCollapse" navbar isOpen={toggle}>
				<MDBNavbarNav left>
					<MDBNavItem active={router.pathname === "/"}>
						<Link href="/">
							<a className="nav-link white-text">
								<MDBIcon icon="igloo" className="mr-1" />
								Home
							</a>
						</Link>
					</MDBNavItem>
					<MDBNavItem>
						<Link href="/properties">
							<a className="nav-link white-text">Listes des biens</a>
						</Link>
					</MDBNavItem>
					{isAuthenticated && user.role === "admin" && (
						<MDBNavItem active={router.pathname === "/property/list"}>
							<Link href="/property/list">
								<a className="nav-link white-text">Dashboard</a>
							</Link>
						</MDBNavItem>
					)}
				</MDBNavbarNav>
				<MDBNavbarNav right>
					<MDBNavItem active={router.pathname === "/contact"}>
						<Link href="/contact">
							<a className="nav-link white-text">
								<MDBIcon icon="address-book" className="mr-1" />
								Contact
							</a>
						</Link>
					</MDBNavItem>
					{!isAuthenticated && (
						<MDBNavItem active={router.pathname === "/login"}>
							<Link href="/login">
								<a className="nav-link white-text">
									<MDBIcon icon="user-alt" className="mr-1" />
									Connexion
								</a>
							</Link>
						</MDBNavItem>
					)}
					{isAuthenticated && (
						<>
							<MDBNavItem>
								<div className="nav-link white-text">
									<MDBIcon icon="user-alt" className="mr-1" />
									Bonjour {user.username}
								</div>
							</MDBNavItem>
							<MDBNavItem>
								<div
									className="nav-link white-text btnLogout"
									onClick={handleLogout}>
									<MDBIcon icon="power-off" className="mr-1" />
									Deconnexion
								</div>
							</MDBNavItem>
						</>
					)}
				</MDBNavbarNav>
			</MDBCollapse>
			<style jsx>
				{`
					.btnLogout {
						cursor: pointer;
					}
				`}
			</style>
		</MDBNavbar>
	);
};
