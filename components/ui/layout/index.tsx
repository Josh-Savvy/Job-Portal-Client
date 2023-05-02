import React from "react";
import LayoutNavbar from "./nav";
import Footer from "./footer";

const Layout = ({ children, isEmployer, isLoggedIn }: any) => {
	return (
		<>
			<LayoutNavbar isEmployer={false} isLoggedIn={false} />
			<div className="mx-auto">{children}</div>
			<Footer />
		</>
	);
};

export default Layout;
