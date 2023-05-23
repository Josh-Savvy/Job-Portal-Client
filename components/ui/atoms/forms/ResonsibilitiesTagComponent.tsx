import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const ResonsibilitiesTagComponent = ({
	responsibilities,
	onUpdateResponsibilities,
	handleClearAll,
}: {
	responsibilities: string[];
	onUpdateResponsibilities: Function;
	handleClearAll: Function;
}) => {
	const [responsibilitiesTags, setResponsibilitiesTags] =
		useState(responsibilities);
	const [inputValue, setInputValue] = useState("");
	const handleSuggestionClick = (suggestion: string) => {
		addTag(suggestion.trim());
	};

	const handleInputChange = (event: any) => {
		const { value } = event.target;
		setInputValue(value);
	};

	// const handleInputKeyDown = (event: any) => {
	// 	if (event.key === "Enter") {
	// 		event.preventDefault();
	// 		// &&
	// 		addTag(inputValue.trim());
	// 	}
	// };

	const addTag = (tag: any) => {
		if (tag && !responsibilitiesTags.includes(tag)) {
			const newResponsibilitiesTags = [...responsibilitiesTags, tag];
			setResponsibilitiesTags(newResponsibilitiesTags);
			onUpdateResponsibilities(newResponsibilitiesTags);
			setInputValue("");
		}
	};

	const removeTag = (tag: any) => {
		const newResponsibilitiesTags = responsibilitiesTags.filter(
			(t: any) => t !== tag,
		);
		setResponsibilitiesTags(newResponsibilitiesTags);
		onUpdateResponsibilities(newResponsibilitiesTags);
	};

	return (
		<div className="">
			<ToastContainer />
			<div className="relative flex gap-5">
				<div className="bg-white flex justify-between w-full text-sm p-2 shadow shadow-blue-200 rounded-tr-lg rounded-tl-lg rounded-bl-lg">
					<input
						type="text"
						className="bg-transparent outline-none focus:ring-0 w-full pr-5"
						name="responsibilties"
						value={inputValue}
						onChange={handleInputChange}
						// onKeyDown={handleInputKeyDown}
						placeholder="Type responsibilities..."
					/>
					<span
						onClick={() => {
							if (responsibilities.length >= 6) {
								toast.error("Resposibilities Tags limit reached!", {
									position: "bottom-right",
									theme: "light",
									autoClose: 5000,
									hideProgressBar: false,
									closeOnClick: true,
									pauseOnHover: true,
									draggable: true,
									progress: undefined,
								});
								return;
							} else {
								addTag(inputValue.trim());
							}
						}}
						className="cursor-pointer bg-blue-200 p-2 rounded"
					>
						Add
					</span>
				</div>
			</div>

			<div
				className="cursor-pointer text-sm flex justify-end "
				onClick={(e) => {
					e.preventDefault();
					setResponsibilitiesTags([]);
					handleClearAll();
				}}
			>
				<div
					className={`${
						responsibilities.length > 0 ? "animate__slideInLeft flex" : "hidden"
					} animate__animated items-center gap-3 bg-red-400 px-5 p-1 text-white  rounded-br-lg rounded-bl-lg`}
				>
					Clear all &times;
				</div>
			</div>

			<ul
				className="mt-4 grid md:grid-cols-2 items-center gap-3 list-disc"
				style={{ maxWidth: "95vw" }}
			>
				{responsibilitiesTags.length > 0 ? (
					responsibilitiesTags.map((tag: string, index: any) => {
						return (
							<li
								className={`text-sm mb-1 ml-6`}
								key={index}
								style={{
									whiteSpace: "break-spaces",
									wordBreak: "break-all",
								}}
							>
								{tag}
							</li>
						);
					})
				) : (
					<span className="text-sm text-red-400 whitespace-nowrap">
						Please input the candidate&quot;s responsibilities
					</span>
				)}
			</ul>
		</div>
	);
};

export default ResonsibilitiesTagComponent;
