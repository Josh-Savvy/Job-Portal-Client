import React from "react";
import { UserType } from "../../../../../../interfaces/user.type";
import { formatDate } from "../../../../../../utils";

const FreelancerJobAlerts = ({ user }: { user: UserType }) => {
	return (
		<div>
			FreelancerJobAlerts
			<div className="grid gap-4 divide-y divide-zinc-200 pb-10">
				{user?.notifications
					?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
					.map((notification, i) => {
						return (
							<div key={i}>
								{notification.title}
								{formatDate(notification.createdAt)}
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default FreelancerJobAlerts;
