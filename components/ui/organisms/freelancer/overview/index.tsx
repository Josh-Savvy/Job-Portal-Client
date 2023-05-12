import React from "react";
import { NumberCounter, formatDate } from "../../../../../utils";
import {
	ArrowForwardOutline,
	BookmarkOutline,
	BriefcaseOutline,
	NotificationsOutline,
} from "react-ionicons";
import { OutlinedButton1 } from "../../../atoms/buttons";
import JobCard from "../../../atoms/cards/JobCard";
import { JobType, UserType } from "../../../../../interfaces/user.type";
import Link from "next/link";

const OverviewForFreelancer = ({ user }: { user: UserType }) => {
	return (
		<div className="overflow-y-scroll py-10">
			{/* <div className="overflow-y-scroll py-10 animate__animated animate__fadeInUp"> */}
			<div className="grid gap-2 mb-6">
				<h1 className="lg:text-lg flex items-center gap-1">
					Hello,<span className="font-semibold">{user?.name}</span>
				</h1>
				<p className="text-zinc-500">
					Here are your daily activities & career opportunities
				</p>
			</div>
			<div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-4">
				<Link href="#applied-jobs">
					<div className="px-5 cursor-pointer bg-blue-800 hover:scale-y-[1.09] duration-300 text-white flex justify-between items-center p-5 rounded-lg shadow-lg">
						<div className="grid gap-2">
							<h1 className="font-semibold text-3xl">
								{NumberCounter({ limit: user ? user.appliedJobs?.length : 0 })}
							</h1>
							<p>Applied Jobs</p>
						</div>
						<div className="bg-white p-4 rounded">
							<BriefcaseOutline width="25px" height="25px" color="blue" />
						</div>
					</div>
				</Link>
				<Link href="#saved-jobs">
					<div className="bg-yellow-800 hover:scale-y-[1.09] duration-300 text-white cursor-pointer flex justify-between items-center p-5 rounded-lg shadow-lg">
						<div className="grid gap-2">
							<h1 className="font-bold text-3xl">
								{NumberCounter({ limit: user ? user.savedJobs?.length : 0 })}
							</h1>
							<p>Saved Jobs</p>
						</div>
						<div className="bg-yellow-600 p-4 rounded">
							<BookmarkOutline width="25px" height="25px" color="yellow" />
						</div>
					</div>
				</Link>
				<Link href="#job-alert">
					<div className="bg-green-800 hover:scale-y-[1.09] duration-300 text-white cursor-pointer flex justify-between items-center p-5 rounded-lg shadow-lg">
						<div className="grid gap-2">
							<h1 className="font-bold text-3xl">
								{NumberCounter({ limit: user ? user.notifications?.length : 0 })}
							</h1>
							<p>Job Alerts</p>
						</div>
						<div className="bg-white p-4 rounded">
							<NotificationsOutline width="25px" height="25px" color="green" />
						</div>
					</div>
				</Link>
			</div>
			<div className="lg:mt-8 mt-16 grid gap-3">
				<div className="flex justify-between items-center mx-5">
					<h1 className="font-bold">Recently Applied</h1>
					<OutlinedButton1
						title="View all"
						icon={<ArrowForwardOutline color="dodgerblue" />}
					/>
				</div>
				<div className="text-sm bg-zinc-300 p-3 rounded grid-cols-2 gap-4 justify-between items-center md:grid hidden">
					<p className="">Job</p>
					<ul className="grid grid-cols-3 gap-4 items-center text-center">
						<li>Date Applied</li>
						<li>Status</li>
						<li>Action</li>
					</ul>
				</div>
				<div className="grid gap-4 pb-10">
					{user?.appliedJobs
						?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
						.slice(0, 3)
						.map((job, i) => {
							return (
								<JobCard
									key={i}
									company={job.company}
									slug={job?.id}
									dateApplied={formatDate(job?.createdAt)}
									jobNature={job?.nature}
									location={job?.location}
									status={job?.active}
									salary={job?.salary}
								/>
							);
						})}
				</div>
			</div>
		</div>
	);
};

export default OverviewForFreelancer;
