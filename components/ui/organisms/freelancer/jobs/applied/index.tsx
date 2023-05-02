import React from "react";
import JobCard from "../../../../atoms/cards/JobCard";
import { ArrowForwardOutline } from "react-ionicons";
import { OutlinedButton1 } from "../../../../atoms/buttons";
import NumberCounter from "../../../../../../utils";

const FreelancerAppliedJobs = () => {
	return (
		<div className="animate__animated animate__fadeInUp">
			<div className="mt-4 grid gap-3">
				<div className="flex justify-between items-center mx-5">
					<h1 className="font-semibold">
						Applied Jobs ({NumberCounter({ limit: 63 })})
					</h1>
					<p>
						<OutlinedButton1
							title="View all"
							icon={<ArrowForwardOutline color="dodgerblue" />}
						/>
					</p>
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
						slug="sdfk-4394894-439fbu8efue"
						company="FaceBook"
						dateApplied="Apr 27, 2023 42:04"
						jobNature="Internship"
						location="Nigeria"
						status={false}
						salary="$250k - $300k"
					/>
					<JobCard
						slug="sdfk-4394894-439fbu8efue"
						company="Google"
						dateApplied="Apr 27, 2023 42:04"
						jobNature="Contractual"
						location="Nigeria"
						status={true}
						salary="$250k - $300k"
					/>

					<JobCard
						slug="sdfk-4394894-439fbu8efue"
						company="FaceBook"
						dateApplied="Apr 27, 2023 42:04"
						jobNature="Internship"
						location="Nigeria"
						status={false}
						salary="$250k - $300k"
					/>
					<JobCard
						slug="sdfk-4394894-439fbu8efue"
						company="Google"
						dateApplied="Apr 27, 2023 42:04"
						jobNature="Contractual"
						location="Nigeria"
						status={true}
						salary="$250k - $300k"
					/>

					<JobCard
						slug="sdfk-4394894-439fbu8efue"
						company="FaceBook"
						dateApplied="Apr 27, 2023 42:04"
						jobNature="Internship"
						location="Nigeria"
						status={false}
						salary="$250k - $300k"
					/>
					<JobCard
						slug="sdfk-4394894-439fbu8efue"
						company="Google"
						dateApplied="Apr 27, 2023 42:04"
						jobNature="Contractual"
						location="Nigeria"
						status={true}
						salary="$250k - $300k"
					/>

					<JobCard
						slug="sdfk-4394894-439fbu8efue"
						company="FaceBook"
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

export default FreelancerAppliedJobs;
