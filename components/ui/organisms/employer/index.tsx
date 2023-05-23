import React, { useEffect, useState } from "react";
import { JobType, UserType } from "../../../../interfaces/user.type";
import EmployerDashboardNav from "./nav";
import OverviewForEmployer from "./overview";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { GET_ALL_JOBS_FOR_ADMIN } from "../../../../types/graphql.type";
import AllJobs from "./jobs";
import PostNewJob from "./jobs/new";
import Applications from "./jobs/applications";
import EmployerNotifications from "./jobs/alerts";

const Employer = ({
	isMobileOpen,
	closeMobileNav,
	user,
}: {
	isMobileOpen: boolean;
	closeMobileNav: Function;
	user: UserType;
}) => {
	const { data, loading, error, refetch } = useQuery(GET_ALL_JOBS_FOR_ADMIN, {
		fetchPolicy: "network-only",
	});

	useEffect(() => {
		refetch();
	}, [data]);

	const links = [
		{
			icon: "LayersOutline",
			title: "Overview",
			link: "#overview",
		},
		{
			icon: "BriefcaseOutline",
			title: "Jobs",
			link: "#jobs",
		},
		{
			icon: "PeopleOutline",
			title: "Applications",
			link: "#applications",
		},
		{
			icon: "AddCircleOutline",
			title: "Post New Job",
			link: "#post-job",
		},
		{
			icon: "NotificationsOutline",
			title: "Notifications",
			link: "#notifications",
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
		<EmployerDashboardNav props={navProps}>
			<div className="">
				{router.asPath.split("#")[1] === "overview" ? (
					<OverviewForEmployer user={user} jobs={data?.getAllJobsForAdmin} />
				) : router.asPath.split("#")[1] === "jobs" ? (
					<AllJobs user={user} jobs={data?.getAllJobsForAdmin} />
				) : router.asPath.split("#")[1] === "post-job" ? (
					<PostNewJob user={user} />
				) : // ) : router.asPath.split("#")[1] === "applications" ? (
				// 	<Applications jobs={data?.getAllJobsForAdmin} />
				// ) : (
				router.asPath.split("#")[1] === "job-alert" ? (
					<EmployerNotifications user={user} />
				) : (
					// router.asPath.split("#")[1] === "settings" ? (
					// 	<EmployerProfileSettings user={user} />
					<OverviewForEmployer user={user} jobs={data?.getAllJobsForAdmin} />
				)}
			</div>
		</EmployerDashboardNav>
	);
};
export default Employer;
