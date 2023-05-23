import React from "react";
import { JobType, UserType } from "../../../../../interfaces/user.type";
import { formatDate } from "../../../../../utils";
import { CheckmarkCircleOutline, HourglassOutline } from "react-ionicons";

const AllJobs = ({ user, jobs }: { user: UserType; jobs: JobType[] }) => {
	return (
		<div className="grid gap-4">
			<div>
				<h1 className="">All Jobs</h1>
				<div className="grid gap-4 pb-10 divide-y mt-5">
					{jobs
						?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
						.map((job: JobType, i: any) => {
							return (
								<div
									key={i}
									className="bg-white rounded-lg p-2 cursor-pointer
									 border border-transparent hover:border-blue-400 hover:shadow hover:shadow-blue-400
									 duration-300 pt-5"
								>
									<div className="md:flex items-center gap-4 justify-between">
										<div className="grid gap-2 text-sm">
											<h1 className="font-medium">{job.position}</h1>
											<p className="text-xs text-zinc-500">
												Posted: {formatDate(job.createdAt)} ago
											</p>
										</div>
										<div className="flex justify-between gap-12 justify-between items-center">
											<div>
												{job.active ? (
													<p className="flex gap-2 items-center text-xs text-green-400">
														<CheckmarkCircleOutline
															color="green"
															height="16px"
															width="16px"
														/>
														Active
													</p>
												) : (
													<p className="flex gap-2 items-center text-xs text-orange-400">
														<HourglassOutline color="orange" height="16px" width="16px" />{" "}
														Pending
													</p>
												)}
											</div>
											<div className="text-xs tet-zinc-400 whitespace-nowrap">
												{job.applicants?.length} applicants
											</div>
											<div className="flex gap-2 text-sm items-center">
												<div
													style={{ whiteSpace: "nowrap" }}
													className="rounded cursor-pointer text-justify flex items-center justify-center p-2 px-4 bg-zinc-200 text-blue-400 group-hover:bg-blue-400 group-hover:text-white"
												>
													View Applications
												</div>
											</div>
										</div>
									</div>
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
};

export default AllJobs;
