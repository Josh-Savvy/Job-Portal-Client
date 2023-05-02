import React from "react";
import NumberCounter from "../../../../../utils";
import {
	ArrowForwardOutline,
	BookmarkOutline,
	BriefcaseOutline,
	NotificationsOutline,
} from "react-ionicons";
import { OutlinedButton1 } from "../../../atoms/buttons";
import JobCard from "../../../atoms/cards/JobCard";

const OverviewForFreelancer = ({ myJobs }: any) => {
	return (
		<div className="overflow-y-scroll py-10 animate__animated animate__fadeInUp">
			<div className="grid gap-2 mb-6">
				<h1 className="lg:text-lg flex items-center gap-1">
					Hello,<span className="font-semibold">John Doe</span>
				</h1>
				<p className="text-zinc-500">
					Here are your daily activities & career opportunities
				</p>
			</div>
			<div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-4">
				<div className="px-5 bg-blue-200 flex justify-between items-center p-5 rounded-lg shadow-lg">
					<div className="grid gap-2">
						<h1 className="font-semibold lg:text-2xl text-xl">
							{NumberCounter({ limit: 63 })}
						</h1>
						<p>Applied Jobs</p>
					</div>
					<div className="bg-white p-4 rounded">
						<BriefcaseOutline width="25px" height="25px" color="blue" />
					</div>
				</div>
				<div className="bg-yellow-200 flex justify-between items-center p-5 rounded-lg shadow-lg">
					<div className="grid gap-2">
						<h1 className="font-semibold lg:text-2xl text-xl">
							{NumberCounter({ limit: 9 })}
						</h1>
						<p>Saved Jobs</p>
					</div>
					<div className="bg-white p-4 rounded">
						<BookmarkOutline width="25px" height="25px" color="yellow" />
					</div>
				</div>
				<div className="bg-green-200 flex justify-between items-center p-5 rounded-lg shadow-lg">
					<div className="grid gap-2">
						<h1 className="font-semibold lg:text-2xl text-xl">
							{NumberCounter({ limit: 2 })}
						</h1>
						<p>Job Alerts</p>
					</div>
					<div className="bg-white p-4 rounded">
						<NotificationsOutline width="25px" height="25px" color="green" />
					</div>
				</div>
			</div>
			<div className="lg:mt-8 mt-16 grid gap-3">
				<div className="flex justify-between items-center mx-5">
					<h1 className="font-semibold">Recently Applied</h1>
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
				<div className="grid gap-4 divide-y divide-zinc-200 pb-10">
					<JobCard
						company="FaceBook"
						slug="219b2b83-392eub382cb8i-d32ubb82uie"
						dateApplied="Apr 27, 2023 42:04"
						jobNature="Internship"
						location="Nigeria"
						status={false}
						salary="$250k - $300k"
					/>
					<JobCard
						company="Google"
						slug="219b2b83-392eub382cb8i-d32ubb82uie"
						dateApplied="Apr 27, 2023 42:04"
						jobNature="Contractual"
						location="Nigeria"
						status={true}
						salary="$250k - $300k"
					/>

					<JobCard
						company="FaceBook"
						slug="219b2b83-392eub382cb8i-d32ubb82uie"
						dateApplied="Apr 27, 2023 42:04"
						jobNature="Internship"
						location="Nigeria"
						status={false}
						salary="$250k - $300k"
					/>
					<JobCard
						company="Google"
						slug="219b2b83-392eub382cb8i-d32ubb82uie"
						dateApplied="Apr 27, 2023 42:04"
						jobNature="Contractual"
						location="Nigeria"
						status={true}
						salary="$250k - $300k"
					/>

					<JobCard
						company="FaceBook"
						slug="219b2b83-392eub382cb8i-d32ubb82uie"
						dateApplied="Apr 27, 2023 42:04"
						jobNature="Internship"
						location="Nigeria"
						status={false}
						salary="$250k - $300k"
					/>
					<JobCard
						company="Google"
						slug="219b2b83-392eub382cb8i-d32ubb82uie"
						dateApplied="Apr 27, 2023 42:04"
						jobNature="Contractual"
						location="Nigeria"
						status={true}
						salary="$250k - $300k"
					/>

					<JobCard
						company="FaceBook"
						slug="219b2b83-392eub382cb8i-d32ubb82uie"
						dateApplied="Apr 27, 2023 42:04"
						jobNature="Internship"
						location="Nigeria"
						status={false}
						salary="$250k - $300k"
					/>
				</div>
			</div>
		</div>
	);
};

export default OverviewForFreelancer;
