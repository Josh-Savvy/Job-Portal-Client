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

export function formatDate(createdAt: Date): string {
	const timeDiff = Date.now() - new Date(createdAt).getTime();
	const minutes = Math.floor(timeDiff / 60000);
	if (minutes < 60) {
		return `${minutes} mins ago`;
	}
	const hours = Math.floor(minutes / 60);
	if (hours == 1) {
		return `${hours} hour ago`;
	}
	if (hours < 24) {
		return `${hours} hours ago`;
	}
	if (hours == 24) {
		return `${hours} day ago`;
	}
	const days = Math.floor(hours / 24);
	return `${days} days ago`;
}
