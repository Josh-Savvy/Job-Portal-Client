import React from "react";
import FeaturedJobCard from "../../../atoms/cards/FeaturedJobCard";
import { jobData } from "./data";

const FeaturedJob = () => {
	return (
		<div className="md:px-14 px-7 pt-14 md:pt-28 mt-5 pb-10">
			<h1 className="md:text-3xl text-2xl font-semibold">
				<span className="text-[blue]">Featured</span> Jobs
			</h1>
			<div className="mt-5 grid gap-4 items-center">
				{jobData.map((job, i) => {
					return (
						job.featured && (
							<FeaturedJobCard
								key={job.featured ? i : null}
								category={job.category}
								date={job.date}
								title={job.position}
								imgSrc={job.imgSrc}
								location={job.location}
								salary={job.salary}
								jobType={job.type}
								status={job.status}
								slug={job.slug}
							/>
						)
					);
				})}
			</div>
		</div>
	);
};

export default FeaturedJob;
