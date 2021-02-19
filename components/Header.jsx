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

export const Header = () => {
	const [toggle, setToggle] = useState(false);

	const toggleCollapse = () => {
		setToggle(!toggle);
	};
	return (
		<MDBNavbar color="unique-color" dark expand="md">
			<MDBNavbarToggler onClick={toggleCollapse} />
			<MDBCollapse id="navbarCollapse" navbar isOpen={toggle}>
				<MDBNavbarNav left>
					<MDBNavItem>
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
				</MDBNavbarNav>
				<MDBNavbarNav right>
					<MDBNavItem>
						<Link href="/contact">
							<a className="nav-link white-text">
								<MDBIcon icon="address-book" className="mr-1" />
								Contact
							</a>
						</Link>
					</MDBNavItem>
					<MDBNavItem>
						<Link href="/login">
							<a className="nav-link white-text">
								<MDBIcon icon="user-alt" className="mr-1" />
								Connexion
							</a>
						</Link>
					</MDBNavItem>
				</MDBNavbarNav>
			</MDBCollapse>
		</MDBNavbar>
	);
};
