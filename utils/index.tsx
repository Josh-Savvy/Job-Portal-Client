import { useState, useEffect } from "react";

function NumberCounter({ limit }: { limit: number }) {
	const [count, setCount] = useState(0);

	useEffect(() => {
		const intervalId = setInterval(() => {
			if (count < limit) {
				setCount(count + 1);
			}
		}, 100);

		return () => {
			clearInterval(intervalId);
		};
	}, [count]);

	return <>{count}</>;
}

export default NumberCounter;
