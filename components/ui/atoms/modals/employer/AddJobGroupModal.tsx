import React, { useState } from "react";
import Modal from "..";
import { OutlinedButton1, PrimaryButton } from "../../buttons";

const AddJobGroupModal = ({ handleClose, open, handleCreateCategory }: any) => {
	const [categoryTitle, setCategoryTitle] = useState<string>("");
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		handleCreateCategory(categoryTitle);
		setCategoryTitle("");
		handleClose();
	};
	return (
		<Modal open={open} handleClose={handleClose} title="Add New Category">
			<form onSubmit={handleSubmit}>
				<label className="grid gap-2 text-sm" htmlFor="newGroupName">
					Title
					<input
						type="text"
						name="newGroupName"
						value={categoryTitle}
						onChange={(e) => setCategoryTitle(e.target.value)}
						className="outline-none border rounded focus:ring-0 p-1"
					/>
				</label>

				<div className="mt-5 flex justify-between items-center">
					<div onClick={handleClose}>
						<OutlinedButton1 title="Cancel" link="#applications" />
					</div>
					<div>
						<PrimaryButton title="Add" link="#applications" onClick={handleSubmit} />
					</div>
				</div>
			</form>
		</Modal>
	);
};

export default AddJobGroupModal;
