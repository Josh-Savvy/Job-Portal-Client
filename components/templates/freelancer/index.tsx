import React, { useState } from "react";
import Freelancer from "../../ui/organisms/freelancer";
import { CloseOutline, MenuOutline } from "react-ionicons";

const FreelancerDashboardTemplate = () => {
	const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);
	return (
		<div className="">
			{isMobileOpen && (
				<div className="lg:hidden bg-black bg-opacity-50 fixed top-0 h-[100vh] w-[100vw] z-50"></div>
			)}
			<div
				className="lg:hidden fixed right-0 top-6 z-50 cursor-pointer"
				onClick={() => setIsMobileOpen(!isMobileOpen)}
			>
				{!isMobileOpen ? (
					<MenuOutline height="40px" width="40px" />
				) : (
					<CloseOutline height="40px" width="40px" color="red" />
				)}
			</div>
			<Freelancer
				isMobileOpen={isMobileOpen}
				closeMobileNav={() => isMobileOpen && setIsMobileOpen(false)}
			/>
		</div>
	);
};

export default FreelancerDashboardTemplate;
