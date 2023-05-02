import { BriefcaseOutline, PeopleOutline, PersonOutline } from "react-ionicons";
import NumberCounter from "../../../../../utils";

const StatsComponent = () => {
	const StatMiniComp = ({
		icon,
		text,
		number,
	}: {
		icon: any;
		text: string;
		number: number;
	}) => {
		return (
			<div className="cursor-default bg-white p-5 rounded-lg flex gap-3 items-center w-full group">
				<div className="bg-blue-100 p-6 flex justify-center items-center rounded group-hover:bg-blue-600 duration-300">
					{icon}
				</div>
				<div className="grid items-center">
					<div className="text-2xl font-semibold">
						<NumberCounter limit={number} />
					</div>
					<div className="">{text}</div>
				</div>
			</div>
		);
	};
	return (
		<div className="xl:flex gap-5 items-center grid md:grid-cols-2 lg:grid-cols-3">
			<StatMiniComp
				text="Job Openings"
				number={4}
				icon={
					<>
						<div className="group-hover:flex hidden">
							<BriefcaseOutline color="white" width="35px" height="35px" />
						</div>
						<div className="group-hover:hidden flex">
							<BriefcaseOutline color="dodgerblue" width="35px" height="35px" />
						</div>
					</>
				}
			/>
			<StatMiniComp
				text="Employers"
				number={32}
				icon={
					<>
						<div className="group-hover:flex hidden">
							<PersonOutline color="white" width="35px" height="35px" />
						</div>
						<div className="group-hover:hidden flex">
							<PersonOutline color="dodgerblue" width="35px" height="35px" />
						</div>
					</>
				}
			/>
			<StatMiniComp
				text="Freelancers"
				number={50}
				icon={
					<>
						<div className="group-hover:flex hidden">
							<PeopleOutline color="white" width="35px" height="35px" />
						</div>
						<div className="group-hover:hidden flex">
							<PeopleOutline color="dodgerblue" width="35px" height="35px" />
						</div>
					</>
				}
			/>
			<StatMiniComp
				text="New Jobs"
				number={0}
				icon={
					<>
						<div className="group-hover:flex hidden">
							<BriefcaseOutline color="white" width="35px" height="35px" />
						</div>
						<div className="group-hover:hidden flex">
							<BriefcaseOutline color="dodgerblue" width="35px" height="35px" />
						</div>
					</>
				}
			/>
		</div>
	);
};

export default StatsComponent;
