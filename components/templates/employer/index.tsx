import { GetServerSidePropsContext } from "next";
import React, { useState } from "react";
import { UserType } from "../../../interfaces/user.type";
import Employer from "../../ui/organisms/employer";
import { CloseOutline, MenuOutline } from "react-ionicons";

const EmployerDashBoardTemplate = ({ user }: { user: UserType }) => {
	const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);
	return (
		<div className="">
			{isMobileOpen && (
				<div
					onClick={() => setIsMobileOpen(false)}
					className="lg:hidden bg-black bg-opacity-50 fixed top-0 h-[100vh] w-[100vw] z-50"
				></div>
			)}

			<div
				className="lg:hidden fixed right-0 top-4 z-50 cursor-pointer"
				onClick={() => setIsMobileOpen(!isMobileOpen)}
			>
				{!isMobileOpen ? (
					<MenuOutline height="40px" width="40px" />
				) : (
					<CloseOutline height="40px" width="40px" color="red" />
				)}
			</div>
			<Employer
				user={user}
				isMobileOpen={isMobileOpen}
				closeMobileNav={() => isMobileOpen && setIsMobileOpen(false)}
			/>
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
	return {
		props: {},
	};
};
export default EmployerDashBoardTemplate;
