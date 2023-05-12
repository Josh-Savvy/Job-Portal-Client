import Link from "next/link";

export const OutlinedButton1 = ({
	title,
	link,
	icon,
	className,
}: {
	title: string;
	link?: string;
	icon?: any;
	className?: string;
}) => {
	return (
		<Link href={link ? link : "#"}>
			<div className={className}>
				<div className="w-full group border border-blue-300 hover:border-blue-500 rounded p-2.5 px-4 text-blue-500 cursor-pointer hover:bg-blue-100 duration-300 font-medium">
					<div className="flex items-center gap-3">
						{title}
						{icon}
					</div>
				</div>
			</div>
		</Link>
	);
};

export const OutlinedButton2 = ({
	title,
	link,
	icon,
	className,
}: {
	title: string;
	link?: string;
	icon?: any;
	className?: string;
}) => {
	return (
		<Link href={link ? link : "#"}>
			<div className={className}>
				<div className="w-full group rounded p-3 px-4 text-blue-500 cursor-pointer bg-blue-100 hover:bg-blue-500 duration-300 font-medium">
					<div className="flex items-center gap-3 group-hover:text-white">
						{title}
						{icon}
					</div>
				</div>
			</div>
		</Link>
	);
};

export const DangerButton = ({
	title,
	link,
	icon,
}: {
	title: string;
	link?: string;
	icon?: any;
}) => {
	return (
		<Link href={link ? link : "#"}>
			<div className="group border border-red-300 rounded p-3 px-4 text-red-500 hover:text-white cursor-pointer hover:bg-red-500 duration-300 font-medium">
				<div className="flex items-center gap-3">
					{title}
					{icon}
				</div>
			</div>
		</Link>
	);
};

export const PrimaryButton = ({
	title,
	link,
	icon,
	className,
	onClick,
}: {
	title: string;
	link?: string;
	icon?: any;
	className?: string;
	onClick?: Function;
}) => {
	return (
		<Link href={link ? link : "#"}>
			<div className={className}>
				<div className="bg-blue-500 p-3 rounded text-white hover:bg-blue-600 duration-300 cursor-pointer">
					<div className="flex items-center gap-3 text-sm">
						{title} {icon}
					</div>
				</div>
			</div>
		</Link>
	);
};
