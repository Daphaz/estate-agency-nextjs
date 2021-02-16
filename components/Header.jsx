import React from "react";
import {
	MDBNavbar,
	MDBNavbarBrand,
	MDBNavbarNav,
	MDBNavItem,
	MDBNavbarToggler,
	MDBCollapse,
	MDBFormInline,
	MDBDropdown,
	MDBDropdownToggle,
	MDBDropdownMenu,
	MDBDropdownItem,
	MDBIcon,
} from "mdbreact";

export const Header = () => {
	return (
		<MDBNavbar color="unique-color" dark expand="md">
			<MDBNavbarToggler />
			<MDBCollapse id="navbarCollapse" navbar>
				<MDBNavbarNav left>
					<MDBNavItem>
						<div className="nav-links white-text">
							<MDBIcon icon="igloo" className="mr-1" />
							Home
						</div>
					</MDBNavItem>
				</MDBNavbarNav>
			</MDBCollapse>
		</MDBNavbar>
	);
};
