import React from "react";
import JobCard from "../../../../atoms/cards/JobCard";
import { OutlinedButton1 } from "../../../../atoms/buttons";
import { ArrowForwardOutline } from "react-ionicons";
import { NumberCounter, formatDate } from "../../../../../../utils";
import { UserType } from "../../../../../../interfaces/user.type";

const FreelancerSavedJobs = ({ user }: { user: UserType }) => {
	return (
		<div className="animate__animated animate__fadeInUp">
			<div className="mt-4 grid gap-3">
				<div className="flex justify-between items-center mx-5">
					<h1 className="font-semibold">
						Saved Jobs ({NumberCounter({ limit: user ? user.savedJobs?.length : 0 })})
					</h1>
					<>
						<OutlinedButton1
							title="View all"
							icon={<ArrowForwardOutline color="dodgerblue" />}
						/>
					</>
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
					{user?.savedJobs
						?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
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

export default FreelancerSavedJobs;
