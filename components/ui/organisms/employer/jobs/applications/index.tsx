import React, { useEffect, useState } from "react";
import { JobType, UserType } from "../../../../../../interfaces/user.type";
import { PrimaryButton } from "../../../../atoms/buttons";
import { AddCircleOutline } from "react-ionicons";
import AddJobGroupModal from "../../../../atoms/modals/employer/AddJobGroupModal";

const Applications = ({ jobs }: { jobs: JobType[] }) => {
	const [open, setOpen] = useState(false);
	const [categories, setCategories] = useState([
		{ title: "All Applications", cards: [] },
	]);

	useEffect(() => {
		const category: any = categories.find((c) => c.title === "All Applications");
		console.log({ category: category });
		if (category) {
			category.cards = jobs;
		}
	}, []);

	const onOpenModal = () => setOpen(true);
	const onCloseModal = () => setOpen(false);

	const DraggableCard = ({
		categoryTitle,
		title,
		cardId,
	}: {
		categoryTitle: string;
		cardId: string;
		title: string;
	}) => {
		const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
			e.dataTransfer.setData("text/plain", cardId);
			e.dataTransfer.effectAllowed = "move";
		};
		const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
			e.preventDefault();
			e.dataTransfer.dropEffect = "move";
			console.log("transferring");
		};
		const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
			e.preventDefault();
			const droppedCardId = e.dataTransfer.getData("text/plain");
			console.log(
				`Dropped card with ID: ${droppedCardId} into category: ${categoryTitle}`,
			);
			const sourceCategory = categories.map((cat) => {
				return cat.cards.filter((c) => c.id === droppedCardId);
			});
			console.log(sourceCategory);
			const targetCategory = categories.find((cat) => cat.title === categoryTitle);
			console.log(targetCategory);
			// if (sourceCategory && sourceCard && targetCategory) {
			// 	sourceCategory.cards = sourceCategory.cards.filter(
			// 		(card: any) => card.id !== droppedCardId,
			// 	);
			// 	targetCategory.cards.push(sourceCard);
			// 	setCategories([...categories]);
			// }
		};

		return (
			<div
				draggable
				onDragStart={handleDragStart}
				onDragOver={handleDragOver}
				onDrop={handleDrop}
				style={{
					padding: "10px",
					margin: "10px",
					border: "1px solid gray",
				}}
			>
				{title}
				<div className="mt-4">
					{/* {applicants?.map((candidate, i) => {
						return <>{candidate.email}</>;
					})} */}
				</div>
			</div>
		);
	};

	const CategoryTableCard = ({
		title,
		cards,
	}: {
		title: string;
		cards: JobType[];
	}) => {
		return (
			<div
				className="rounded shadow bg-white h-[65vh] overflow-y-scroll"
				style={{ minWidth: "300px", padding: "10px" }}
			>
				<h1 className="text-sm bg-zinc-100 w-full text-center p-2">{title}</h1>
				<div className="flex justfy-center">
					<div className="grid gap-5">
						{cards?.map((c, i) => {
							return (
								<DraggableCard
									categoryTitle={title}
									cardId={c.id}
									key={i}
									title={c.position}
								/>
							);
						})}
					</div>
				</div>
			</div>
		);
	};
	return (
		<div>
			<div className="flex justify-between mt-6">
				<h1 className="font-medium text-xl">Applications</h1>
				<PrimaryButton
					title="New Category"
					icon={<AddCircleOutline color="white" />}
					link="#applications"
					onClick={onOpenModal}
				/>
			</div>
			<div className="">
				<AddJobGroupModal
					open={open}
					handleClose={onCloseModal}
					handleCreateCategory={(categoryTitle: string) => {
						setCategories((prevCategories) => [
							...prevCategories,
							{ title: categoryTitle, cards: [] },
						]);
					}}
				/>
			</div>
			<div className="mt-10">
				<div
					className="flex gap-5 overflow-x-auto pb-4"
					style={{
						display: "flex",
						overflowX: "auto",
					}}
				>
					{/* <CategoryTableCard title="All Applications" cards={jobs} /> */}
					{categories
						?.map((cat, i) => {
							return cat ? (
								<CategoryTableCard title={cat.title} key={i} cards={cat.cards} />
							) : (
								""
							);
						})
						.sort()}
				</div>
			</div>
		</div>
	);
};

export default Applications;
