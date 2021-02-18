import React, { useState } from "react";
import { MDBBtn, MDBCollapse, MDBIcon } from "mdbreact";

export const Collapse = ({ title, children }) => {
	const [collapse, setCollapse] = useState("");

	const toggleCollapse = (collapse) => {
		setCollapse((prevState) => (prevState !== collapse ? collapse : ""));
	};

	const styles = {
		collapse: {
			cursor: "pointer",
			backgroundColor: "#ddd",
			padding: 10,
			fontSize: 20,
		},
		icon: {
			padding: 10,
		},
	};

	return (
		<div className="mt-4">
			<div
				className="slugToggle"
				style={styles.collapse}
				onClick={() => toggleCollapse("basicCollapse")}>
				<span className="font-weight-bolder slugTitle">{title}</span>
				{collapse ? (
					<MDBIcon icon="angle-down" style={styles.icon} />
				) : (
					<MDBIcon icon="angle-up" style={styles.icon} />
				)}
			</div>
			<MDBCollapse id="basicCollapse" isOpen={collapse}>
				{children}
			</MDBCollapse>
		</div>
	);
};
