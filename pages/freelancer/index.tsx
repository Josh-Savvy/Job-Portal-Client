import { GetServerSidePropsContext } from "next";
import React from "react";

const FreelancerPage = () => {
	return <div>Redirecting...</div>;
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
	return {
		redirect: {
			permanent: false,
			destination: `/freelancer/dashboard`,
		},
		props: {},
	};
};

export default FreelancerPage;
