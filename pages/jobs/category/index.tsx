import { GetServerSidePropsContext } from "next";
import React, { useEffect } from "react";
import client from "../../../apolloClient";
import {
	GET_ALL_JOBS_BY_CATEGORY,
	GET_USER,
} from "../../../types/graphql.type";
import { JobType } from "../../../interfaces/user.type";
import JobsPageTemplate from "../../../components/templates/jobs";
import { useQuery } from "@apollo/client";

const JobCategory = ({
	data,
	error,
	slug,
}: {
	data: JobType[];
	error: any;
	slug: string;
}) => {
	if (error) console.log(error);
	const {
		loading,
		error: userError,
		data: userData,
		refetch,
	} = useQuery(GET_USER, {
		fetchPolicy: "network-only",
	});

	useEffect(() => {
		refetch();
	}, []);
	return (
		<div>
			<JobsPageTemplate
				data={data}
				user={userData?.getUser}
				slug={slug}
				error={error}
			/>
		</div>
	);
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
	const slug = ctx.req.url?.split("?")[1].split("=")[0];
	if (!slug)
		return {
			redirect: {
				destination: "/",
				permanent: false,
			},
		};
	const { data, error, loading } = await client.query({
		query: GET_ALL_JOBS_BY_CATEGORY,
		variables: { slug: slug },
	});
	if (!loading && data?.getAllJobsByCategory) {
		return { props: { data: data.getAllJobsByCategory, slug: slug } };
	} else if (error) return { props: { error: error.message } };
};

export default JobCategory;
