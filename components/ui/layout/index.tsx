import React from "react";
import LayoutNavbar from "./nav";
import Footer from "./footer";
import Head from "next/head";

const Layout = ({ children }: any) => {
	return (
		<>
			<LayoutNavbar />
			<div className="mx-auto">{children}</div>
			<Footer />
		</>
	);
};

export default Layout;
