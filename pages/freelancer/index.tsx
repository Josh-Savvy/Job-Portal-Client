import { GetServerSidePropsContext } from "next";
import React from "react";

const FreelancerPage = () => {
	return <div>Redirecting...</div>;
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
	const token = ctx.req.cookies.token;
	if (!token) {
		return {
			redirect: {
				destination: "/login",
				permanent: false,
			},
		};
	}

	return {
		redirect: {
			permanent: false,
			destination: `/freelancer/dashboard`,
		},
	};
};

export default FreelancerPage;
