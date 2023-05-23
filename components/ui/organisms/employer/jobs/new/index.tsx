import React, { useEffect, useState } from "react";
import { IndustryType, UserType } from "../../../../../../interfaces/user.type";
import {
	CREATE_JOB,
	GET_INDUSTRIES,
	JobNatureEnum,
} from "../../../../../../types/graphql.type";
import { useMutation, useQuery } from "@apollo/client";
import DatePicker from "react-datepicker";
import { CreateJobType } from "../../../../../../interfaces/job.type";
import TagsComponent from "../../../../atoms/forms/TagsComponent";
import RichTextEditor from "../../../../atoms/forms/RichTextEditor";
import { ArrowForwardOutline, LocationOutline } from "react-ionicons";
import { ToastContainer, toast } from "react-toastify";
import ResonsibilitiesTagComponent from "../../../../atoms/forms/ResonsibilitiesTagComponent";

const PostNewJob = ({ user }: { user: UserType }) => {
	const {
		loading: industriesLoading,
		error: industriesError,
		data: industriesData,
		refetch: industriesRefetch,
	} = useQuery(GET_INDUSTRIES, { fetchPolicy: "network-only" });
	const [createJob, { data, loading, error }] = useMutation(CREATE_JOB);
	const formState: CreateJobType = {
		title: "",
		categoryId: "",
		tags: [],
		position: "",
		salary: "",
		salaryType: "",
		education: "",
		experience: "",
		jobType: "",
		jobNature: `HYBRID`,
		expiryDate: "",
		location: "",
		description: "",
		responsibilities: [],
		company: "",
	};
	const [jobPostState, setJobPostState] = useState<CreateJobType>(formState);
	const [submitting, setSubmitting] = useState<boolean>(false);
	const [isSalaryRange, setIsSalaryRange] = useState<boolean>(true);
	const [tags, setTags] = useState([]);
	const [responsibilities, setResponsibilities] = useState([]);
	const [expiryDate, setExpiryDate] = useState<any>(null);

	const handleUpdateTags = (updatedTags: any) => {
		setTags(updatedTags);
	};
	const handleDateChange = (date: any) => {
		setExpiryDate(new Date(date));
	};
	useEffect(() => {
		industriesRefetch();
	}, [industriesData]);

	useEffect(() => {
		setJobPostState({ ...jobPostState, tags: tags });
	}, [tags]);

	useEffect(() => {
		setJobPostState({ ...jobPostState, expiryDate: expiryDate });
	}, [expiryDate]);

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		setSubmitting(true);
		const variables = {
			jobCreateInput: {
				title: jobPostState.title,
				position: jobPostState.position,
				responsibilities: jobPostState.responsibilities,
				company: jobPostState.company,
				description: jobPostState.description,
				salary: jobPostState.salary,
				location: jobPostState.location,
				nature: jobPostState.jobNature,
				categoryId: jobPostState.categoryId,
				experience: jobPostState.experience,
				education: jobPostState.education,
				expiryDate: jobPostState.expiryDate,
				// externalLink: jobPostState.externalLink,
			},
		};
		try {
			const result = await createJob({
				variables,
			});
			toast.success(result.data ? result.data.createJob : "Job Created!", {
				position: "bottom-center",
				theme: "light",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: false,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
			setJobPostState(formState);
			setTags([]);
			setExpiryDate("");
			setSubmitting(false);
		} catch (error: any) {
			setSubmitting(false);
			console.log(error);
			toast.error(
				`${
					error?.message
						? error?.message
						: "Oops! An error occured. Please try again!"
				}`,
				{
					position: "bottom-center",
					theme: "light",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				},
			);
			if (error.message === "Unauthorized") location.replace("/login");
		}
	};

	return (
		<div className="px-5 md:px-auto">
			<ToastContainer />
			<h1 className="mb-4 font-medium text-xl">Post a Job</h1>
			<form className="grid gap-5" onSubmit={handleSubmit}>
				<div className="md:flex grid gap-4 items-center">
					<div className="md:w-3/5">
						<label htmlFor="jobTitle" className="text-sm text-zinc-500">
							Job Title
						</label>
						<input
							className="w-full outline-none p-2 focus:ring-0 focus:shadow-lg focus:shadow-blue-200 shadow shadow-blue-200 rounded-lg"
							name="jobTitle"
							placeholder="Job Title"
							value={jobPostState.title}
							onChange={(e) =>
								setJobPostState({ ...jobPostState, title: e.target.value })
							}
						/>
					</div>
					<div className="md:w-2/5">
						<label htmlFor="jobCategory" className="text-sm text-zinc-500">
							Job Category
						</label>
						<select
							className="w-full text-sm outline-none p-2.5 focus:ring-0 focus:shadow-lg focus:shadow-blue-200 shadow shadow-blue-200 rounded-lg"
							name="jobCategory"
							onChange={(e) =>
								setJobPostState({ ...jobPostState, categoryId: e.target.value })
							}
						>
							<option value="">Select</option>
							{industriesData?.getAllIndustries.map(
								(category: IndustryType, i: any) => {
									return (
										<option key={i} value={category.id}>
											{category.title}
										</option>
									);
								},
							)}
						</select>
					</div>
				</div>
				<div className="md:flex grid gap-4">
					<div className="md:w-3/5">
						<label htmlFor="tags" className="text-sm text-zinc-500">
							Tags
						</label>
						<TagsComponent initialTags={tags} onUpdateTags={handleUpdateTags} />
					</div>
					<div className="md:w-2/5">
						<label htmlFor="jobCategory" className="text-sm text-zinc-500">
							Position
						</label>
						<input
							className="w-full outline-none p-2 placeholder:text-xs focus:ring-0 focus:shadow-lg focus:shadow-blue-200 shadow shadow-blue-200 rounded-lg"
							name="jobCategory"
							value={jobPostState.position}
							onChange={(e) =>
								setJobPostState({ ...jobPostState, position: e.target.value })
							}
							placeholder="FrontEnd Developer, Product Manager..."
						/>
					</div>
				</div>
				<div
					className="grid gap-4 mt-5 items-center w-full"
					style={{ maxWidth: "90vw" }}
				>
					<h1 className="font-medium">Job Description</h1>
					<RichTextEditor
						editorContent={jobPostState.description}
						className="border-none bg-white rounded-[10px]"
						handleEditorChange={(value: string) => {
							setJobPostState({ ...jobPostState, description: value });
						}}
					/>
					<label htmlFor="" className="text-red-400 text-xs mt-[.6px]">
						The description field is required
					</label>
				</div>
				<div className="mt-3">
					<ResonsibilitiesTagComponent
						responsibilities={responsibilities}
						onUpdateResponsibilities={(responsibilities: any) =>
							setResponsibilities(responsibilities)
						}
						handleClearAll={() => setResponsibilities([])}
					/>
				</div>

				<div className="mt-3">
					<h1 className="font-medium mb-4">Salary</h1>
					<div className="flex gap-5 items-center">
						<label
							htmlFor="salaryRange"
							className="flex items-center gap-1 text-sm text-zinc-300"
						>
							<input
								type="radio"
								name="salaryRange"
								className=""
								checked={isSalaryRange}
								onClick={() => setIsSalaryRange(true)}
								id="salaryRange"
							/>
							Salary Range
						</label>
						<label
							htmlFor="customSalary"
							className="flex items-center gap-1 text-sm text-zinc-300"
						>
							<input
								type="radio"
								onClick={() => setIsSalaryRange(false)}
								checked={!isSalaryRange}
								name="customSalary"
								className=""
								id="customSalary"
							/>
							Custom Salary
						</label>
					</div>
					<div className="md:flex grid gap-4 items-center mt-4">
						<div className="md:w-3/5">
							{!isSalaryRange ? (
								<label htmlFor="" className="text-sm text-zinc-500 mt-4 md:mt-0">
									Custom Salary
									<input
										className="w-full outline-none p-3 focus:ring-0 focus:shadow-lg focus:shadow-blue-200 shadow shadow-blue-200 rounded-lg"
										name="customSalary"
										placeholder="Competitive"
										value={jobPostState.salary}
										onChange={(e) =>
											setJobPostState({ ...jobPostState, salary: e.target.value })
										}
									/>
								</label>
							) : (
								<>
									<div className="grid grid-cols-2 gap-2 mt-4 md:mt-0">
										<div className="">
											<label htmlFor="" className="text-sm text-zinc-500">
												Minimum Salary
											</label>
											<div className="relative">
												<span
													className="bg-zinc-100 h-full flex items-center text-center 
                                    px-5 absolute left-0 text-xl rounded-bl-lg rounded-tl-lg"
												>
													$
												</span>
												<input
													type="number"
													className="w-full pl-16 outline-none p-3 focus:ring-0 focus:shadow-lg focus:shadow-blue-200 shadow shadow-blue-200 rounded-lg"
													placeholder="50.00"
													name="salary_range_min"
													value={jobPostState.salary}
													onChange={(e) =>
														setJobPostState({ ...jobPostState, salary: e.target.value })
													}
												/>
											</div>
										</div>
										<div className="">
											<label htmlFor="" className="text-sm text-zinc-500">
												Maximum Salary
											</label>
											<div className="relative">
												<span
													className="bg-zinc-100 h-full flex items-center text-center 
                                    px-5 absolute left-0 text-xl rounded-bl-lg rounded-tl-lg"
												>
													$
												</span>
												<input
													// value={jobPostState.salary}
													// onChange={(e) =>
													// 	setJobPostState({
													// 		...jobPostState,
													// 		salary: e.target.value,
													// 	})
													// }
													type="number"
													className="w-full pl-16 outline-none p-3 focus:ring-0 focus:shadow-lg focus:shadow-blue-200 shadow shadow-blue-200 rounded-lg"
													placeholder="100.00"
													name="salary_range_max"
												/>
											</div>
										</div>
									</div>
								</>
							)}
						</div>
						<div className="md:w-2/5">
							<label htmlFor="" className="text-sm text-zinc-500">
								Salary Type
							</label>
							<select
								onChange={(e) =>
									setJobPostState({ ...jobPostState, salaryType: e.target.value })
								}
								className="w-full text-sm outline-none p-3 focus:ring-0 focus:shadow-lg focus:shadow-blue-200 shadow shadow-blue-200 rounded-lg"
							>
								<option value="">Select</option>
								<option value="Hourly">Hourly</option>
								<option value="Project Basis">Project Basis</option>
								<option value="Monthly">Monthly</option>
								<option value="Yearly">Yearly</option>
							</select>
						</div>
					</div>
				</div>
				<div className="md:flex grid gap-4 mt-5">
					<div className="w-full">
						<h1 className="font-medium mb-3">Advance Information</h1>
						<div className="grid md:grid-cols-3 gap-3">
							<div>
								<label htmlFor="" className="text-sm text-zinc-500">
									Education
								</label>
								<select
									onChange={(e) =>
										setJobPostState({ ...jobPostState, education: e.target.value })
									}
									className="w-full text-sm outline-none p-3 focus:ring-0 focus:shadow-lg focus:shadow-blue-200 shadow shadow-blue-200 rounded-lg"
								>
									<option value="Any">Any</option>
									<option value="High School">High School</option>
									<option value="Under-Graduate">Under-Graduate</option>
									<option value="Bachelor's Degree">Bachelor&apos;s Degree</option>
									<option value="Master's Degree">Master&apos;s Degree</option>
									<option value="Any">Any</option>
								</select>
							</div>
							<div>
								<label htmlFor="" className="text-sm text-zinc-500">
									Experience
								</label>
								<select
									onChange={(e) =>
										setJobPostState({ ...jobPostState, experience: e.target.value })
									}
									className="w-full text-sm outline-none p-3 focus:ring-0 focus:shadow-lg focus:shadow-blue-200 shadow shadow-blue-200 rounded-lg"
								>
									<option value="">Select</option>
									{/* <option value="Intern">Intern</option> */}
									<option value="1-2">1-2 years</option>
									<option value="3-5">3-5 years</option>
									<option value="5+">5+ years</option>
									<option value="8+">8+ years</option>
									<option value="10+">10+ years</option>
								</select>
							</div>
							<div>
								<label htmlFor="" className="text-sm text-zinc-500">
									Job Type
								</label>
								<select
									onChange={(e) =>
										setJobPostState({ ...jobPostState, jobType: e.target.value })
									}
									className="w-full text-sm outline-none p-3 focus:ring-0 focus:shadow-lg focus:shadow-blue-200 shadow shadow-blue-200 rounded-lg"
								>
									<option value="">Select</option>
									<option value="Full-Time">Full-Time</option>
									<option value="Part-Time">Part-Time</option>
									<option value="Contractual">Contractual</option>
									<option value="Freelance">Freelance</option>
								</select>
							</div>
						</div>
					</div>
				</div>
				<div className="md:flex grid gap-4 mt-5 items-center">
					<div className="md:w-4/5">
						<div>
							<label htmlFor="" className="text-sm text-zinc-500">
								Job Nature
							</label>
							<select
								onChange={(e) =>
									setJobPostState({ ...jobPostState, jobNature: e.target.value })
								}
								className="w-full text-sm outline-none p-3 focus:ring-0 focus:shadow-lg focus:shadow-blue-200 shadow shadow-blue-200 rounded-lg"
							>
								<option>Select</option>
								{[`HYBRID`, `ONSITE`, `REMOTE`].map((value) => (
									<option key={value} value={value}>
										{value}
									</option>
								))}
								{/* <option value="Remote">Remote</option>
								<option value="Hybrid">Hybrid</option>
								<option value="On-site">On-Site</option> */}
							</select>
						</div>
					</div>
					<div className="md:w-2/5">
						<label
							htmlFor=""
							className="text-sm text-zinc-500 flex items-center gap-2"
						>
							Deadline
							<label htmlFor="" className="text-red-400 text-xs mt-[.6px]">
								Maximum deadline limit: 30 Days
							</label>
						</label>
						<div className="flex items-center gap-2">
							{/* <CalendarOutline /> */}
							<DatePicker
								selected={expiryDate}
								placeholderText="M-D-Y"
								onChange={handleDateChange}
								showTimeSelect
								timeFormat="HH:mm"
								minDate={new Date()}
								maxDate={new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000)}
								timeIntervals={15}
								dateFormat="MM/dd/yyyy h:mm aa"
								className="text-sm outline-none p-3 focus:ring-0 focus:shadow-lg focus:shadow-blue-200 shadow shadow-blue-200 rounded-lg"
							/>
						</div>
					</div>
				</div>
				{
					<div className="grid gap-4 mt-5 items-center">
						<h1 className="font-medium">Location</h1>
						{/* <div>
						<PlacesAutocompleteComponent />
					</div> */}
						<div className="flex items-center gap-2 w-full bg-white outline-none p-3 hover:shadow-lg hover:shadow-blue-200 shadow shadow-blue-200 rounded-lg">
							<LocationOutline height="25px" width="25px" />
							<input
								className="w-full h-full bg-transparent focus:ring-0 outline-none"
								name="location"
								value={jobPostState.location}
								onChange={(e) =>
									setJobPostState({ ...jobPostState, location: e.target.value })
								}
								placeholder="..."
							/>
						</div>
					</div>
				}
				<div className="md:flex grid gap-4 items-center mt-4">
					<div className="">
						<label htmlFor="" className="text-sm text-zinc-500 mt-4 md:mt-0">
							Apply On External Platform
							<input
								type="url"
								className="w-full outline-none p-3 focus:ring-0 focus:shadow-lg 
								focus:shadow-blue-200 shadow shadow-blue-200 rounded-lg invalid:shadow-red-500"
								name="externalLink"
								placeholder="https://link.example"
							/>
						</label>
					</div>
				</div>
				<div className="mt-4 flex justify-center items-center">
					<div
						onClick={handleSubmit}
						className="font-medium text-center bg-blue-500 p-3 px-6 rounded text-white hover:bg-blue-800 duration-300 cursor-pointer"
					>
						<div className="text-center flex items-center gap-4">
							Submit
							{submitting ? (
								<svg
									className="animate-spin h-5 w-5 text-white"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
								>
									<circle
										className="opacity-25"
										cx="12"
										cy="12"
										r="10"
										stroke="currentColor"
										strokeWidth="4"
									></circle>
									<circle
										cx="16"
										cy="16"
										r="1"
										stroke="currentColor"
										strokeWidth="5"
									></circle>
								</svg>
							) : (
								<ArrowForwardOutline color="white" />
							)}
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};

export default PostNewJob;
