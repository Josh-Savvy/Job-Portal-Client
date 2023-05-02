import React from "react";
import Hero from "../../ui/organisms/homepage/hero";
import PopularCategories from "../../ui/organisms/homepage/popular-categories";
import OurWorkingProcess from "../../ui/organisms/homepage/working-process";
import FeaturedJob from "../../ui/organisms/homepage/featured-job";
import TopCompanies from "../../ui/organisms/homepage/top-companies";
import Testimonials from "../../ui/organisms/homepage/testimonials";
import UserCTA from "../../ui/organisms/homepage/user-cta";

const HomepageTemplate = () => {
	return (
		<div className="">
			<Hero />
			<PopularCategories />
			<OurWorkingProcess />
			<FeaturedJob />
			<TopCompanies />
			<Testimonials />
			<UserCTA />
		</div>
	);
};

export default HomepageTemplate;
