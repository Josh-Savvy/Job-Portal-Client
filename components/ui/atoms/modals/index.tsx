import React from "react";

const Modal = ({ children, handleClose, open, title }: any) => {
	return (
		open && (
			<div
				className={`${
					open ? "flex" : "hidden"
				} z-50 fixed flex top-0 lg:left-[22%] left-0 bg-black bg-opacity-50 
			justify-center items-center h-[100vh] w-[100vw]`}
			>
				<div
					className={`${
						open ? "animate__bounceIn" : "animate__bounceOut"
					} animate__animated bg-white rounded-lg lg:w-2/5 w-5/6 h-auto p-6 duration-300`}
				>
					<div className="flex justify-between gap-6 items-center">
						<h1>{title ? title : `"Title"`}</h1>
						<span
							onClick={handleClose}
							className="text-[red] cursor-pointer text-xl bg-zinc-50 p-0.5 px-3 rounded hover:bg-zinc-100 duration-300"
						>
							&times;
						</span>
					</div>
					<div className="mt-5">{children}</div>
				</div>
			</div>
		)
	);
};

export default Modal;
