import React from "react";
import { NumberCounter, formatDate } from "../../../../../utils";
import {
	ArrowForwardOutline,
	BriefcaseOutline,
	CheckmarkCircleOutline,
	CloseCircleOutline,
	HourglassOutline,
	NotificationsOutline,
	WarningOutline,
} from "react-ionicons";
import { OutlinedButton1 } from "../../../atoms/buttons";
import { JobType, UserType } from "../../../../../interfaces/user.type";
import Link from "next/link";

const OverviewForEmployer = ({
	user,
	jobs,
}: {
	user: UserType;
	jobs: JobType[];
}) => {
	console.log({ userNotifications: user.notifications });

	return (
		<div className="overflow-y-scroll py-10">
			{/* <div className="overflow-y-scroll py-10 animate__animated animate__fadeInUp"> */}
			<div className="grid gap-2 mb-6">
				<h1 className="lg:text-lg flex items-center gap-1">
					Hello,
					<span className="font-semibold flex items-center gap-1">
						{user?.name} |
						{user.accountType == `EMPLOYER` ? (
							<span className="bg-zinc-500 p-1 px-4 rounded text-white text-xs">
								{user.accountType}
							</span>
						) : user.accountType == `ADMIN` ? (
							<span className="bg-zinc-500 p-1 px-4 rounded text-white text-xs">
								{user.accountType}
							</span>
						) : (
							<span className="bg-zinc-500 p-1 px-4 rounded text-white text-xs">
								{user.accountType}
							</span>
						)}
					</span>
				</h1>
				<p className="text-zinc-500">
					Here are your daily activities & career opportunities
				</p>
			</div>
			<div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
				<Link href="#jobs">
					<div className="px-5 cursor-pointer bg-green-600 hover:scale-y-[1.09] duration-300 text-white flex justify-between items-center p-5 rounded-lg shadow-lg">
						<div className="grid gap-2">
							<h1 className="font-semibold text-3xl">
								{NumberCounter({
									limit:
										jobs && jobs.filter((j) => j.active === true)
											? jobs.filter((j) => j.active === true).length
											: 0,
								})}
							</h1>
							<p>Active Jobs</p>
						</div>
						<div className="bg-green-800 p-4 rounded">
							<BriefcaseOutline width="25px" height="25px" color="white" />
						</div>
					</div>
				</Link>
				<Link href="#jobs">
					<div className="bg-yellow-600 hover:scale-y-[1.09] duration-300 text-white cursor-pointer flex justify-between items-center p-5 rounded-lg shadow-lg">
						<div className="grid gap-2">
							<h1 className="font-bold text-3xl">
								{NumberCounter({
									limit:
										jobs && jobs.filter((j) => j.active === false)
											? jobs.filter((j) => j.active === false).length
											: 0,
								})}
							</h1>
							<p>Pending Jobs</p>
						</div>
						<div className="bg-yellow-800 p-4 rounded">
							<WarningOutline width="25px" height="25px" color="white" />
						</div>
					</div>
				</Link>
				<Link href="#notifications">
					<div className="bg-blue-600 hover:scale-y-[1.09] duration-300 text-white cursor-pointer flex justify-between items-center p-5 rounded-lg shadow-lg">
						<div className="grid gap-2">
							<h1 className="font-bold text-3xl">
								{NumberCounter({ limit: user ? user.notifications?.length : 0 })}
							</h1>
							<p>Notifications</p>
						</div>
						<div className="bg-blue-800 p-4 rounded">
							<NotificationsOutline width="25px" height="25px" color="white" />
						</div>
					</div>
				</Link>
				<Link href="#jobs">
					<div className="bg-red-500 hover:scale-y-[1.09] duration-300 text-white cursor-pointer flex justify-between items-center p-5 rounded-lg shadow-lg">
						<div className="grid gap-2">
							<h1 className="font-bold text-3xl">
								{NumberCounter({
									limit:
										jobs && jobs.filter((j) => j.expired === true)
											? jobs.filter((j) => j.expired === true).length
											: 0,
								})}
							</h1>
							<p>Closed Jobs</p>
						</div>
						<div className="bg-red-800 p-4 rounded">
							<CloseCircleOutline width="25px" height="25px" color="white" />
						</div>
					</div>
				</Link>
			</div>
			<div className="lg:mt-8 mt-16 grid gap-3">
				<div className="flex justify-between items-center mx-5">
					<h1 className="font-bold">Recent Jobs</h1>
					<OutlinedButton1
						title="View all"
						icon={<ArrowForwardOutline color="dodgerblue" />}
					/>
				</div>
				<div className="text-xs bg-zinc-300 p-3 rounded grid-cols-2 gap-4 justify-between items-center md:grid hidden">
					<p className="">Job</p>
					<ul className="grid grid-cols-3 gap-4 items-center text-center">
						<li>Status</li>
						<li>Applications</li>
						<li>Action</li>
					</ul>
				</div>
				<div className="grid gap-4 pb-10 divide-y mt-5">
					{jobs
						?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
						.slice(0, 3)
						.map((job: JobType, i: any) => {
							return (
								<Link href={`#applicants`} key={i}>
									<div
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
													{job?.applicants?.length >= 2 || job.applicants?.length === 0
														? `${job.applicants?.length} applicants`
														: `${job.applicants?.length} applicant`}
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
								</Link>
							);
						})}
				</div>
			</div>
		</div>
	);
};

export default OverviewForEmployer;
