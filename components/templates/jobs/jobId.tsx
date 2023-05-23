import React, { useEffect, useState } from "react";
import { JobType, UserType } from "../../../interfaces/user.type";
import Link from "next/link";
import {
	ArrowForward,
	BookmarkOutline,
	BriefcaseOutline,
	CalendarOutline,
	CashOutline,
	ClipboardOutline,
	LocationOutline,
	LogoFacebook,
	LogoTwitter,
	LogoWhatsapp,
	PersonOutline,
	SchoolOutline,
	StopwatchOutline,
} from "react-ionicons";
import { OutlinedButton2, PrimaryButton } from "../../ui/atoms/buttons";
import { copyURLToClipboard, formatDate } from "../../../utils";
import { ToastContainer, toast } from "react-toastify";
import { isAuth } from "../../../utils/auth";
import { useMutation } from "@apollo/client";
import {
	APPLY_FOR_JOB,
	SAVE_JOB_TO_PROFILE,
} from "../../../types/graphql.type";

const JobIdPageTemplate = ({ data }: { data: JobType }) => {
	const {
		active,
		company,
		createdBy,
		createdAt,
		description,
		expired,
		id,
		location,
		nature,
		responsibilities,
		position,
		salary,
		slug,
		title,
		category,
	} = data;
	const { title: categoryTitle, slug: categorySlug } = category;
	let imgSrc;
	const [applyForJob, { loading, error }] = useMutation(APPLY_FOR_JOB);
	const [saveJob, { loading: saveJobLoading, error: saveJobError }] =
		useMutation(SAVE_JOB_TO_PROFILE);
	const handleJobApply = () => {
		try {
			if (!isAuth()) {
				toast.error("Please login to apply for this job", {
					position: "top-right",
					theme: "light",
					autoClose: 3000,
					hideProgressBar: true,
					closeOnClick: true,
					draggable: true,
					progress: undefined,
				});
				return;
			}

			applyForJob({ variables: { jobId: id } })
				.then(() => {
					toast.success("Job application success!", {
						position: "top-center",
						theme: "light",
						autoClose: 3000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
					});
				})
				.catch((err: any) => {
					console.log({ saveJobError: err });
					if (err.message !== "Unauthorized") {
						toast.error(`${err.message}`, {
							position: "top-center",
							theme: "light",
							autoClose: 3000,
							hideProgressBar: false,
							closeOnClick: true,
							pauseOnHover: true,
							draggable: true,
							progress: undefined,
						});
					}
				});
			console.log(id);
		} catch (e) {
			console.log(e);
			toast.error("An error was encountered", {
				position: "top-right",
				theme: "light",
				autoClose: 3000,
				hideProgressBar: true,
				closeOnClick: true,
				draggable: true,
				progress: undefined,
			});
		}
	};
	const handleBookmark = async (e: any, jobId: string) => {
		e.preventDefault();
		if (process.browser) {
			if (!isAuth()) {
				toast.error("Please login to perform this action!", {
					position: "top-center",
					theme: "light",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
			} else {
				saveJob({ variables: { jobId } })
					.then(() => {
						toast.success("Job Saved to Profile Successfully!", {
							position: "top-center",
							theme: "light",
							autoClose: 5000,
							hideProgressBar: false,
							closeOnClick: true,
							pauseOnHover: true,
							draggable: true,
							progress: undefined,
						});
					})
					.catch((err) => {
						console.log({ saveJobError: err });
						if (err.message !== "Unauthorized") {
							toast.error(`${err.message}`, {
								position: "top-center",
								theme: "light",
								autoClose: 5000,
								hideProgressBar: false,
								closeOnClick: true,
								pauseOnHover: true,
								draggable: true,
								progress: undefined,
							});
						}
					});
			}
		}
	};
	return (
		<div className="h-[150vh] pt-5 mb-[40vh] md:mb-20">
			<ToastContainer />
			<div className="bg-zinc-100 flex justify-between text-sm md:px-16 px-8 pt-20 pb-4">
				<h1>Job Details</h1>
				<div className="flex gap-1 text-xs">
					<Link href="/">
						<span className="cursor-pointer">Home</span>
					</Link>
					/ <span>Job Details</span>
				</div>
			</div>
			<div className="flex justify-between md:px-16 px-5 pt-10 pb-4 items-center">
				<div className="flex gap-3 items-center">
					<div className="hidden md:flex w-20 h-20">
						<img
							src={imgSrc ? imgSrc : "/images/default_image.png"}
							className="w-full h-full rounded-full border object-contain"
							alt={title + "_" + position}
						/>
					</div>
					<div className="grid gap-3">
						<h1 className="font-medium text-2xl">{position}</h1>
						<div className="flex gap-2 items-center">
							<span>at {company}</span>
							<span className="text-sm bg-green-600 text-white px-4 p-1 rounded">
								{nature}
							</span>
						</div>
					</div>
				</div>
				<div className="hidden md:flex gap-2 text-sm items-center">
					<div
						onClick={(e) => handleBookmark(e, id)}
						className="p-3 rounded flex items-center duration-300 hover:bg-blue-100 cursor-pointer"
					>
						<BookmarkOutline />
					</div>
					<div className="" onClick={handleJobApply}>
						<PrimaryButton title={"Apply Now"} />
					</div>
				</div>
			</div>
			<div className="grid gap-1 md:px-16 p-5">
				<div className="md:flex grid gap-1">
					<div className="md:w-2/3 pr-3">
						<h1 className="md:text-2xl text-xl font-medium md:mt-5">
							Job Description
						</h1>
						<p>{description}</p>
						<ul className="list-disc px-5 mb-6">
							<h1 className="-ml-5 md:text-2xl text-xl font-medium mt-5">
								Responsibilities:
							</h1>
							{responsibilities.map((res: string, i: any) => {
								return (
									<li className="" key={i}>
										{res}
									</li>
								);
							})}
						</ul>
					</div>

					<div className="md:w-1/3 grid gap-4">
						<div
							className="border border-blue-100 p-2 rounded-lg lg:flex grid items-center lg:divide-x
							 divide-y lg:divide-y-0 divide-blue-100 gap-6"
						>
							<span className="p-6 flex items-center gap-2">
								<CashOutline color="blue" /> {salary}
							</span>
							<div className="grid">
								<span className="flex items-center gap-2 text-sm p-6">
									<BriefcaseOutline color="blue" /> {nature}
								</span>
								<span className="flex items-center gap-2 text-sm p-6">
									<LocationOutline color="blue" /> {location}
								</span>
							</div>
						</div>
						<div className="border border-blue-100 p-5 rounded-lg lg:flex grid items-center gap-6">
							<div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 sm:grid-cols-4 gap-4">
								<Link href={`/jobs/category?${categorySlug}`}>
									<span
										style={{ whiteSpace: "nowrap" }}
										className="cursor-pointer bg-zinc-100 hover:bg-zinc-300 duration-300 p-2 rounded 
										text-center text-[11px] text-[blue] font-medium"
									>
										{categoryTitle}
									</span>
								</Link>
							</div>
						</div>
						<div className="border border-blue-100 p-5 rounded-tr-lg rounded-tl-lg">
							<h1>Job Overview</h1>
							<div className="grid grid-cols-2 items-center mt-4 gap-6">
								<div className="text-xs grid gap-1 items-center">
									<CalendarOutline color="blue" height="20px" width="20px" />
									<h1 className="text-zinc-400 uppercase">Job Posted:</h1>
									<p>{formatDate(createdAt)}</p>
								</div>
								<div className="text-xs grid gap-1 items-center">
									<StopwatchOutline color="blue" height="20px" width="20px" />
									<h1 className="text-zinc-400 uppercase">Expires in:</h1>
									<p>null</p>
								</div>
								<div className="text-xs grid gap-1 items-center">
									<BriefcaseOutline color="blue" height="20px" width="20px" />
									<h1 className="text-zinc-400 uppercase">Job type:</h1>
									<p>{nature}</p>
								</div>
								<div className="text-xs grid gap-1 items-center">
									<PersonOutline color="blue" height="20px" width="20px" />
									<h1 className="text-zinc-400 uppercase">Job Role:</h1>
									<p>{position}</p>
								</div>
								<div className="text-xs grid gap-1 items-center">
									<SchoolOutline color="blue" height="20px" width="20px" />
									<h1 className="text-zinc-400 uppercase">Education:</h1>
									<p>null</p>
								</div>
								<div className="text-xs grid gap-1 items-center">
									<ClipboardOutline color="blue" height="20px" width="20px" />
									<h1 className="text-zinc-400 uppercase">Experience:</h1>
									<p>null</p>
								</div>
							</div>
						</div>
						<div className="border border-blue-100 p-5 rounded-br-lg rounded-bl-lg -mt-4">
							<h1>Share this Job:</h1>
							<div className="flex gap-4 items-center mt-3">
								<div className="flex justify-center">
									<OutlinedButton2
										title="Copy link"
										onClick={() => {
											copyURLToClipboard((error: any) => {
												error
													? toast.error(error, {
															position: "top-right",
															theme: "light",
															autoClose: 3000,
															hideProgressBar: true,
															closeOnClick: true,
															draggable: true,
															progress: undefined,
													  })
													: toast.success("Link Copied!", {
															position: "top-right",
															theme: "light",
															autoClose: 3000,
															hideProgressBar: true,
															closeOnClick: true,
															draggable: true,
															progress: undefined,
													  });
											});
										}}
									/>
								</div>
								<div className="hover:bg-blue-100 cursor-pointer duration-300 p-2 rounded">
									<LogoFacebook color="dodgerblue" />
								</div>
								<div className="hover:bg-blue-100 cursor-pointer duration-300 p-2 rounded">
									<LogoTwitter color="skyblue" />
								</div>
								<a href="https://wa.me/" target="_blank" rel="noreferrer">
									<div className="hover:bg-blue-100 cursor-pointer duration-300 p-2 rounded">
										<LogoWhatsapp color="green" />
									</div>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default JobIdPageTemplate;
