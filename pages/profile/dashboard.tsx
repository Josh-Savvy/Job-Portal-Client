import React, { useEffect } from "react";
import { UserType } from "../../interfaces/user.type";
import FreelancerDashboardTemplate from "../../components/templates/freelancer";
import withAuthUser from "../middlewares/authUser";
import EmployerDashBoardTemplate from "../../components/templates/employer";

const UserProfileDashboard = ({ user }: { user: UserType }) => {
	return (
		<div>
			{user.accountType == `FREELANCER` ? (
				<FreelancerDashboardTemplate user={user} />
			) : user.accountType == `EMPLOYER` || user.accountType == `ADMIN` ? (
				<EmployerDashBoardTemplate user={user} />
			) : (
				""
			)}
		</div>
	);
};

export default withAuthUser(UserProfileDashboard);
