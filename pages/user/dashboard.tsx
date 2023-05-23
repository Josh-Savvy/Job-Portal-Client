import React, { useEffect } from "react";
import ProfileDashboardTemplate from "../../components/templates/freelancer";
import withAuthUser from "../middlewares/authUser";
import { AccountType, UserType } from "../../interfaces/user.type";
import { GetServerSidePropsContext } from "next";

const UserProfileDashboard = ({
	user,
	role,
}: {
	user: UserType;
	role: AccountType;
}) => {
	return (
		<div>
			<ProfileDashboardTemplate user={user} role={role} />
		</div>
	);
};
export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
	const token = ctx.req.cookies.token;
	if (!token) {
		return {
			redirect: {
				destination: "/login",
				permanent: false,
			},
		};
	}
	return { props: {} };
};

export default withAuthUser(UserProfileDashboard);
