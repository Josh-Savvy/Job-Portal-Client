import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const TagsComponent = ({
	initialTags,
	onUpdateTags,
}: {
	initialTags: string[];
	onUpdateTags: Function;
}) => {
	const [tags, setTags] = useState(initialTags);
	const [inputValue, setInputValue] = useState("");
	const [showSuggestions, setShowSuggestions] = useState(false);
	const [suggestions, setSuggestions] = useState([
		"JavaScript",
		"Java",
		"TypeScript",
		"Software",
		"Management",
		"Management",
		"AGILE",
		"SCRUM",
		"Management",
	]);
	const handleSuggestionClick = (suggestion: string) => {
		addTag(suggestion.trim());
		setShowSuggestions(false);
	};

	const handleInputChange = (event: any) => {
		const { value } = event.target;
		setInputValue(value);
		setShowSuggestions(value !== "");
		if (!suggestions.includes(value)) {
			suggestions.push(value);
		}
	};

	const handleInputKeyDown = (event: any) => {
		if (event.key === "Enter" && showSuggestions) {
			event.preventDefault();
			setShowSuggestions(false);
			if (tags.length >= 6) {
				toast.error("Tags limit reached!", {
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
				// &&
				addTag(inputValue.trim());
			}
		}
	};

	const addTag = (tag: any) => {
		if (tag && !tags.includes(tag)) {
			const newTags = [...tags, tag];
			setTags(newTags);
			onUpdateTags(newTags);
			setInputValue("");
		}
	};

	const removeTag = (tag: any) => {
		const newTags = tags.filter((t: any) => t !== tag);
		setTags(newTags);
		onUpdateTags(newTags);
	};

	const getRandomColor = (index: any) => {
		const colorClasses = [
			"bg-red-200",
			"bg-blue-200",
			"bg-green-200",
			"bg-yellow-200",
			"bg-purple-200",
			"bg-pink-200",
			"bg-indigo-200",
			"bg-teal-200",
			"bg-gray-200",
		];
		const randomIndex = Math.floor(Math.random() * colorClasses.length);
		const randomColorClass = colorClasses[index];
		colorClasses.splice(randomIndex, 1);
		return randomColorClass;
	};

	return (
		<div className="">
			<ToastContainer />
			<div className="relative">
				{showSuggestions && (
					<ul className="mt-2 px-3 py-2 border border-gray-300 rounded-lg absolute top-6 bg-white w-full">
						{suggestions
							.filter((suggestion) =>
								suggestion.toLowerCase().includes(inputValue.toLowerCase()),
							)
							.map((suggestion, index) => (
								<li
									key={index}
									className="cursor-pointer hover:bg-gray-200"
									onClick={() => handleSuggestionClick(suggestion)}
								>
									{suggestion}
								</li>
							))}
					</ul>
				)}
				<input
					maxLength={10}
					type="text"
					className="w-full text-sm outline-none p-2 focus:ring-0 focus:shadow-lg focus:shadow-blue-200 shadow shadow-blue-200 rounded-lg"
					name="tags"
					value={inputValue}
					onChange={handleInputChange}
					onKeyDown={handleInputKeyDown}
					placeholder="Add tags"
				/>
			</div>
			<div className="mt-4 grid md:grid-cols-3 lg:grid-cols-4 items-center gap-3">
				{tags.length > 0 ? (
					tags.map((tag: string, index: any) => {
						return (
							<div
								className={`whitespace-nowrap job-tag p-1 rounded flex items-center justify-between px-6 ${getRandomColor(
									index,
								)}`}
								key={index}
							>
								{tag}
								<div
									className="text-xl cursor-pointer"
									onClick={(e) => {
										e.preventDefault();
										removeTag(tag);
									}}
								>
									&times;
								</div>
							</div>
						);
					})
				) : (
					<span className="text-sm text-red-400 whitespace-nowrap">
						No Tags selected
					</span>
				)}
			</div>
		</div>
	);
};

export default TagsComponent;
