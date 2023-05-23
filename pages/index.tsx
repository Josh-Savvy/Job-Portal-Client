import React, { useEffect } from "react";
import HomepageTemplate from "../components/templates/homepage";
import { useQuery } from "@apollo/client";
import { logout } from "../utils/auth";
import {
	GET_ALL_JOBS,
	GET_EMPLOYERS,
	GET_FREELANCERS,
	GET_INDUSTRIES,
	GET_USER,
} from "../types/graphql.type";

const Homepage = () => {
	const {
		loading: freelancersLoading,
		error: freelancersError,
		data: freelancersData,
		refetch: freelancersRefetch,
	} = useQuery(GET_FREELANCERS, { fetchPolicy: "network-only" });
	const {
		loading: employersLoading,
		error: employersError,
		data: employersData,
		refetch: employersRefetch,
	} = useQuery(GET_EMPLOYERS, { fetchPolicy: "network-only" });
	const {
		loading: jobsLoading,
		error: jobsError,
		data: jobsData,
		refetch: jobsRefetch,
	} = useQuery(GET_ALL_JOBS, { fetchPolicy: "network-only" });
	const {
		loading: industriesLoading,
		error: industriesError,
		data: industriesData,
		refetch: industriesRefetch,
	} = useQuery(GET_INDUSTRIES, { fetchPolicy: "network-only" });
	const {
		loading: userLoading,
		error: userError,
		data: userData,
		refetch: userRefetch,
	} = useQuery(GET_USER, { fetchPolicy: "network-only" });

	useEffect(() => {
		userRefetch();
		freelancersRefetch();
		employersRefetch();
		jobsRefetch();
		industriesRefetch();
	}, []);

	if (userError) {
		if (userError.message === "Unauthorized") {
			logout();
		} else {
			// console.log(error);
		}
	}

	useEffect(() => {
		// const savedUser = localStorage.getItem("user");
		// if (savedUser) {
		// 	const user = JSON.parse(savedUser);
		// 	console.log(user)
		// }
	}, [userData]);

	return (
		<HomepageTemplate
			allFreelancers={freelancersData?.getFreelancers}
			allEmployers={employersData?.getEmployers}
			allJobs={jobsData?.getAllJobs}
			industriesData={industriesData?.getAllIndustries}
		/>
	);
};

export default Homepage;
