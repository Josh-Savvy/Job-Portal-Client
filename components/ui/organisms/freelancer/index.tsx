import React, { useEffect, useState } from "react";
import FreelancerDashboardNav from "./nav";
import OverviewForFreelancer from "./overview";
import FreelancerAppliedJobs from "./jobs/applied";
import FreelancerSavedJobs from "./jobs/saved";
import FreelancerJobAlerts from "./jobs/alerts";
import FreelancerProfileSettings from "./settings";
import { useRouter } from "next/router";

const Freelancer = ({ isMobileOpen, closeMobileNav }: any) => {
	const links = [
		{
			icon: "LayersOutline",
			title: "Overview",
			link: "#overview",
		},
		{
			icon: "BriefcaseOutline",
			title: "Applied Jobs",
			link: "#applied-jobs",
		},
		{
			icon: "BookmarkOutline",
			title: "Saved Jobs",
			link: "#saved-jobs",
		},
		{
			icon: "NotificationsOutline",
			title: "Job Alert",
			link: "#job-alert",
		},
		{
			icon: "SettingsOutline",
			title: "Settings",
			link: "#settings",
		},
	];
	const router = useRouter();
	const [activeLink, setActiveLink] = useState<string>(links[0].link);
	const navProps = {
		isMobileOpen: isMobileOpen,
		links: links,
		closeMobileNav: closeMobileNav,
		activeLink: activeLink,
		router: router,
		setActiveLink: (val: string) => setActiveLink(val),
	};

	useEffect(() => {
		console.log(router.asPath);
		!router.asPath.split("#")[1] && setActiveLink("#overview");
	}, [router]);

	return (
		<FreelancerDashboardNav props={navProps}>
			<div className="">
				{router.asPath.split("#")[1] === "overview" ? (
					<OverviewForFreelancer />
				) : router.asPath.split("#")[1] === "applied-jobs" ? (
					<FreelancerAppliedJobs />
				) : router.asPath.split("#")[1] === "saved-jobs" ? (
					<FreelancerSavedJobs />
				) : router.asPath.split("#")[1] === "job-alert" ? (
					<FreelancerJobAlerts />
				) : router.asPath.split("#")[1] === "settings" ? (
					<FreelancerProfileSettings />
				) : (
					<OverviewForFreelancer />
				)}
			</div>
		</FreelancerDashboardNav>
	);
};

export default Freelancer;
