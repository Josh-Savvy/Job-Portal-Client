import { useState, useEffect } from "react";

export function NumberCounter({ limit }: { limit: number | any }) {
	const [count, setCount] = useState(0);

	if (isNaN(limit)) {
		throw new Error("Limit is not a number");
	}

	useEffect(() => {
		if (count < limit) {
			const intervalId = setInterval(() => {
				setCount(count + 1);
			}, 100);

			return () => {
				clearInterval(intervalId);
			};
		}
	}, [count, limit]);

	return <>{count}</>;
}

function merge(left: any, right: any, dateProp: string) {
	let result = [];
	let il = 0;
	let ir = 0;
	while (il < left.length && ir < right.length) {
		if (new Date(right[ir][dateProp]) > new Date(left[il][dateProp])) {
			result.push(right[ir++]);
		} else {
			result.push(left[il++]);
		}
	}
	return result.concat(left.slice(il)).concat(right.slice(ir));
}

export function sortArray(arr: any[], dateProp: string): any[] {
	if (arr.length === 1) {
		return arr;
	}
	const middle = Math.floor(arr.length / 2);
	const left = arr.slice(0, middle);
	const right = arr.slice(middle);
	return merge(sortArray(left, dateProp), sortArray(right, dateProp), dateProp);
}

export const formatDate = (date: Date) => {
	const createdAt = new Date(date);
	const currentTime = new Date();

	const timeDiff = currentTime.getTime() - createdAt.getTime();

	const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
	const hours = Math.floor(
		(timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
	);
	const week = Math.round(days / 7);

	if (days >= 7) {
		if (week >= 2) return `${week}wks`;
		else {
			return `${week} week`;
		}
	}
	if (days >= 28) {
		return `${days / 28}mos`;
	}
	return `${days}d ${hours}hr`;
};
export function extractUuidsFromString(str: string) {
	const uuidPattern =
		/[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-4[a-fA-F0-9]{3}-[8|9|aA|bB][a-fA-F0-9]{3}-[a-fA-F0-9]{12}/g;
	const uuid = str.match(uuidPattern);
	return uuid;
}

export function copyURLToClipboard(next?: Function) {
	const currentURL = window.location.href;
	navigator.clipboard
		.writeText(currentURL)
		.then(() => {
			console.log("URL copied to clipboard:", currentURL);
			next && next();
		})
		.catch((error) => {
			console.error("Failed to copy URL to clipboard:", error);
			next && next();
			return error;
		});
}
