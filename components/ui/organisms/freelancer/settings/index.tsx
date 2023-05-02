import { useState } from "react";
import FreelancerSettingsNav from "./nav";
import FreelancerBasicProfileSetting from "./Basic";
import FreelancerExperienceSetting from "./Experience";

const FreelancerProfileSettings = () => {
	const links = [
		{ title: "basic", icon: "PersonOutline" },
		{ title: "profile", icon: "PersonCircleOutline" },
		{ title: "experience-&-education", icon: "BriefcaseOutline" },
		{ title: "social-media", icon: "" },
		{ title: "account-setting", icon: "SettingsOutline" },
	];
	const [activeLink, setActiveLink] = useState(links[0].title);
	const navProps = {
		links: links,
		activeLink: activeLink,
		setActiveLink: (val: string) => setActiveLink(val),
	};
	return (
		<div className="">
			<h1 className="font-semibold mb-6">Settings</h1>
			<FreelancerSettingsNav props={navProps}>
				{activeLink === "basic" ? (
					<div className="animate__animated animate__fadeInUp mt-5">
						<FreelancerBasicProfileSetting />
					</div>
				) : activeLink === "profile" ? (
					<div className="animate__animated animate__fadeInUp mt-5">Profile</div>
				) : activeLink === "experience-&-education" ? (
					<div className="animate__animated animate__fadeInUp mt-5">
						<FreelancerExperienceSetting />
					</div>
				) : activeLink === "social-media" ? (
					<div className="animate__animated animate__fadeInUp mt-5">
						Social Media
					</div>
				) : activeLink === "account-setting" ? (
					<div className="animate__animated animate__fadeInUp mt-5">Account</div>
				) : (
					<div className="animate__animated animate__fadeInUp mt-5">Basic</div>
				)}
			</FreelancerSettingsNav>
		</div>
	);
};

export default FreelancerProfileSettings;
