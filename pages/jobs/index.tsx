import React from "react";
import client from "../../apolloClient";
import { GetServerSidePropsContext } from "next";
import { GET_ALL_JOBS } from "../../types/graphql.type";
import { JobType } from "../../interfaces/user.type";
import JobCard from "../../components/ui/atoms/cards/JobCard";
import { formatDate } from "../../utils";
import { JobSearchForm } from "../../components/ui/atoms/forms/JobSearchForm";
import Link from "next/link";

const AllJobsPage = ({
	data,
	error,
	searchVal,
	locationVal,
}: {
	data: JobType[];
	error: string | any;
	searchVal: string;
	locationVal: string;
}) => {
	return (
		<div className="pb-20">
			<div className="bg-zinc-100 text-sm pt-24 pb-4 w-full">
				<div className="md:px-20 px-8 flex justify-between">
					<h1 className="">Job Search</h1>
					<div className="flex gap-2 text-sm">
						<Link href="/">
							<h1 className="hover:text-blue-500 cursor-pointer duration-300">Home</h1>
						</Link>
						/ <p className="text-zinc-400">Job Search</p>
					</div>
				</div>
			</div>
			<div className="md:px-14 px-7 mb-20 lg:flex justify-center">
				<div className="lg:flex items-center justify-between pt-10 lg:pt-20">
					<div className="grid items-center gap-4">
						<div className="grid gap-4 lg:mr-16 animate__animated animate__fadeInUp border shadow-lg">
							<JobSearchForm />
						</div>
					</div>
				</div>
			</div>
			{/* <h1 className="font-medium mb-5 md:px-20 px-5">All Jobs ({data.length}) </h1> */}
			<div className="grid md:grid-cols-2 items-center gap-4 md:px-20 px-5">
				{data.map((job: JobType, i: any) => {
					if (searchVal) {
						return (
							job.position.toLowerCase().includes(searchVal.toLowerCase()) ||
							(job.company.toLowerCase().includes(searchVal.toLowerCase()) && (
								<JobCard
									key={i}
									company={job.company}
									dateCreated={formatDate(job.createdAt)}
									jobNature={job.nature}
									location={job.location}
									slug={job.slug}
									salary={job.salary}
									status={job.active}
								/>
							))
						);
					} else if (locationVal) {
						return (
							job.location.toLowerCase().includes(locationVal.toLowerCase()) && (
								<JobCard
									key={i}
									company={job.company}
									dateCreated={formatDate(job.createdAt)}
									jobNature={job.nature}
									location={job.location}
									slug={job.slug}
									salary={job.salary}
									status={job.active}
								/>
							)
						);
					}
					return (
						<JobCard
							key={i}
							company={job.company}
							dateCreated={formatDate(job.createdAt)}
							jobNature={job.nature}
							location={job.location}
							slug={job.slug}
							salary={job.salary}
							status={job.active}
						/>
					);
				})}
			</div>
		</div>
	);
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
	const { location, search } = ctx.query;
	const { data, error, loading } = await client.query({
		query: GET_ALL_JOBS,
	});
	if (error) return { props: { error: error.message } };
	if (!loading && data?.getAllJobs) {
		return {
			props: {
				data: data.getAllJobs,
				searchVal: search ? search : "",
				locationVal: location ? location : "",
			},
		};
	} else
		return {
			props: {},
		};
};

export default AllJobsPage;
