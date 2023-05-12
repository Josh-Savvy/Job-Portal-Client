import React from "react";
import FreelancerDashboardTemplate from "../../components/templates/freelancer";
import withAuthUser from "../authUser";

const FreelancerDashboard = ({ user }: any) => {
	return (
		<div>
			<FreelancerDashboardTemplate user={user} />
		</div>
	);
};

export default withAuthUser(FreelancerDashboard);
