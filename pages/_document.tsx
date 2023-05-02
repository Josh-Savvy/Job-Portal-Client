import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html dir="ltr">
			<Head></Head>
			<body style={{ width: "100vw", position: "absolute", overflowX: "hidden" }}>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
