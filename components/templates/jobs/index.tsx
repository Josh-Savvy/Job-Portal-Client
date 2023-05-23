import React, { useEffect, useState } from "react";
import { JobType, UserType } from "../../../interfaces/user.type";
import JobsPageCard from "../../ui/atoms/cards/jobs-page/JobsPageCard";
import { useMutation, useQuery } from "@apollo/client";
import {
	GET_ALL_JOBS_BY_CATEGORY,
	SAVE_JOB_TO_PROFILE,
} from "../../../types/graphql.type";
import { ToastContainer, toast } from "react-toastify";

const JobsPageTemplate = (...props: any) => {
	const [alreadySaved, setAlreadySaved] = useState(false);
	const {
		data,
		slug,
		error,
		user,
	}: { data: JobType[]; slug: string; error: any; user: UserType } = props[0];
	const {
		data: reFetchedData,
		loading,
		refetch,
	} = useQuery(GET_ALL_JOBS_BY_CATEGORY, {
		variables: { slug },
	});

	const [saveJob, { loading: saveJobLoading, error: saveJobError }] =
		useMutation(SAVE_JOB_TO_PROFILE);

	useEffect(() => {
		refetch();
		const jobId = data.map((job) => job.id);
		const savedJobId = user?.savedJobs?.map((job) => job?.id);
		const isJobSaved = savedJobId?.some((id) => jobId.includes(id));
		if (isJobSaved) {
			setAlreadySaved(true);
		}
	}, [reFetchedData]);

	const handleBookmark = async (jobId: string) => {
		if (process.browser) {
			if (!user) {
				toast.error("Please login to perform this action!", {
					position: "top-center",
					theme: "light",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
			} else {
				saveJob({ variables: { jobId } })
					.then(() => {
						toast.success("Job Saved to Profile Successfully!", {
							position: "top-center",
							theme: "light",
							autoClose: 5000,
							hideProgressBar: false,
							closeOnClick: true,
							pauseOnHover: true,
							draggable: true,
							progress: undefined,
						});
					})
					.catch((err) => {
						console.log({ saveJobError: err });
						if (err.message !== "Unauthorized") {
							toast.error(`${err.message}`, {
								position: "top-center",
								theme: "light",
								autoClose: 5000,
								hideProgressBar: false,
								closeOnClick: true,
								pauseOnHover: true,
								draggable: true,
								progress: undefined,
							});
						}
					});
			}
		}
	};

	return (
		<div className="lg:pt-24 pt-32 bg-zinc-100 md:px-14 px-7 h-[160vh]">
			{error && error.message}
			<ToastContainer />
			<h1 className="capitalize font-medium text-lg flex items-center gap-1">
				Open positions in {slug.split("-").join(" ")} category
				<span className="font-semibold">({data.length})</span>
			</h1>
			{data.length == 0 && (
				<div className="bg-red-200 p-4 flex items-center justify-center mt-12 font-semibol text-xl">
					No Open Positions in this Category
				</div>
			)}
			<div className="grid lg:grid-cols-3 sm:grid-cols-2 lg:gap-10 gap-6 mt-6">
				{data.map((job: JobType, i: any) => {
					const jobProps = {
						data: job,
						alreadySaved,
						handleBookmark: (val: string) => handleBookmark(val),
					};

					return <JobsPageCard props={jobProps} key={i} />;
				})}
			</div>
		</div>
	);
};

export default JobsPageTemplate;
