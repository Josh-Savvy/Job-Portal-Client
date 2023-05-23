import React, { useEffect, useState } from "react";
import FreelancerDashboardNav from "./nav";
import OverviewForFreelancer from "./overview";
import FreelancerAppliedJobs from "./jobs/applied";
import FreelancerSavedJobs from "./jobs/saved";
import FreelancerJobAlerts from "./jobs/alerts";
import FreelancerProfileSettings from "./settings";
import { UserType } from "../../../../interfaces/user.type";
import { useRouter } from "next/router";

const Freelancer = ({
	isMobileOpen,
	closeMobileNav,
	user,
}: {
	isMobileOpen: boolean;
	closeMobileNav: Function;
	user: UserType;
}) => {
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
		userRole: user?.accountType,
		user: user,
		setActiveLink: (val: string) => setActiveLink(val),
	};

	useEffect(() => {
		!router.asPath.split("#")[1] && setActiveLink("#overview");
	}, [router]);

	return (
		<FreelancerDashboardNav props={navProps}>
			<div className="">
				{router.asPath.split("#")[1] === "overview" ? (
					<OverviewForFreelancer user={user} />
				) : router.asPath.split("#")[1] === "applied-jobs" ? (
					<FreelancerAppliedJobs user={user} />
				) : router.asPath.split("#")[1] === "saved-jobs" ? (
					<FreelancerSavedJobs user={user} />
				) : router.asPath.split("#")[1] === "job-alert" ? (
					<FreelancerJobAlerts user={user} />
				) : router.asPath.split("#")[1] === "settings" ? (
					<FreelancerProfileSettings user={user} />
				) : (
					<OverviewForFreelancer user={user} />
				)}
			</div>
		</FreelancerDashboardNav>
	);
};

export default Freelancer;
