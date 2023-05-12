import React from "react";
import { JobType, UserType } from "../../../../../interfaces/user.type";
import { OutlinedButton1 } from "../../buttons";
import {
	BookmarkOutline,
	CheckboxOutline,
	CloseCircleOutline,
} from "react-ionicons";
import Image from "next/image";

const JobsPageCard = ({
	props: {
		data,
		alreadySaved,
		handleBookmark = (id: string) => {
			return id;
		},
	},
}: {
	props: { data: JobType; alreadySaved: boolean; handleBookmark: Function };
}) => {
	const {
		title,
		active,
		company,
		createdAt,
		createdBy,
		description,
		expired,
		id,
		location,
		nature,
		position,
		responsibilities,
		salary,
		slug,
		updatedAt,
	} = data;

	return (
		<div
			className={`${
				!active
					? "hover:shadow-red-500 shadow shadow-red-300"
					: "shadow-blue-300 shadow hover:shadow-blue-500"
			} p-4 px-6 border hover:scale-[1.02] gap-5 duration-300 rounded-lg bg-white grid`}
		>
			<h1 className="font-medium text-center">{position}</h1>
			<div className="flex justify-between items-center text-xs">
				<span className="bg-green-100 p-1 px-3 rounded">{nature}</span>
				<span>Salary: {salary}</span>
			</div>
			<div className="flex justify-center">
				<div className="flex items-center gap-16">
					<div className="h-[30px] w-[30px]">
						<Image
							src={`/images/default_image.png`}
							alt={title}
							className="h-full w-full"
							height={100}
							width={100}
						/>
					</div>
					<div className="flex items-center">
						<div className="flex gap-5 items-center text-sm">
							{company} | {location}
						</div>
					</div>
					{active ? (
						<CheckboxOutline color="green" title="Job is verified" />
					) : (
						<CloseCircleOutline color="red" title="Job is not verified" />
					)}
				</div>
			</div>
			<div className="">
				{active && !expired ? (
					<div className="flex justify-between items-center">
						<div className="">
							<OutlinedButton1 title="Apply" link={`/jobs/${id}`} />
						</div>
						<div
							className={`group ${
								alreadySaved ? "bg-[dodgerblue]" : ""
							} hover:bg-[dodgerblue] cursor-pointer p-2 rounded-full duration-300`}
						>
							<div
								className="hidden group-hover:block"
								onClick={() => handleBookmark(id)}
							>
								<BookmarkOutline color="white" />
							</div>
							<div className="group-hover:hidden">
								<BookmarkOutline color={alreadySaved ? "white" : "black"} />
							</div>
						</div>
					</div>
				) : (
					<div className="flex justify-center items-center">
						{active && expired
							? "Job has Expired"
							: !active &&
							  !expired && (
									<p className="text-white p-2 bg-red-600 rounded cursor-default">
										Job has not been activated
									</p>
							  )}
					</div>
				)}
			</div>
		</div>
	);
};

export default JobsPageCard;
