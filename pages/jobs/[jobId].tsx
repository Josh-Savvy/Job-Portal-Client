import { GetServerSidePropsContext } from "next";
import React from "react";
import client from "../../apolloClient";
import { GET_JOB_BY_ID } from "../../types/graphql.type";
import { JobType } from "../../interfaces/user.type";
import JobIdPageTemplate from "../../components/templates/jobs/jobId";

const JobPage = ({ jobData }: { jobData: JobType }) => {
	return (
		<div>
			<JobIdPageTemplate data={jobData} />
		</div>
	);
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
	const { jobId } = ctx.query;
	try {
		const { data } = await client.query({
			query: GET_JOB_BY_ID,
			variables: { jobId },
		});

		if (data?.getJobById) {
			return {
				props: { jobData: data.getJobById },
			};
		}
	} catch (error) {
		console.error("Error fetching job data:", error);
		return {
			redirect: {
				destination: "/",
				permanent: false,
			},
		};
	}
};

export default JobPage;
