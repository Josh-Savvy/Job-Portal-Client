import React from "react";
import Hero from "../../ui/organisms/homepage/hero";
import PopularCategories from "../../ui/organisms/homepage/popular-categories";
import OurWorkingProcess from "../../ui/organisms/homepage/working-process";
import FeaturedJob from "../../ui/organisms/homepage/featured-job";
import TopCompanies from "../../ui/organisms/homepage/top-companies";
import Testimonials from "../../ui/organisms/homepage/testimonials";
import UserCTA from "../../ui/organisms/homepage/user-cta";
import { IndustryType, JobType, UserType } from "../../../interfaces/user.type";

const HomepageTemplate = ({
	allFreelancers,
	allEmployers,
	allJobs,
	industriesData,
}: {
	allFreelancers: UserType[];
	allEmployers: UserType[];
	allJobs: JobType[];
	industriesData: IndustryType[];
}) => {
	return (
		<div className="bg-zinc-100">
			<div className="mb-20 md:mb-10">
				<Hero
					allFreelancers={allFreelancers}
					allEmployers={allEmployers}
					allJobs={allJobs}
					industriesData={industriesData}
				/>
			</div>
			<PopularCategories industriesData={industriesData} />
			<OurWorkingProcess />
			<FeaturedJob />
			<TopCompanies />
			<Testimonials />
			<UserCTA />
		</div>
	);
};

export default HomepageTemplate;
