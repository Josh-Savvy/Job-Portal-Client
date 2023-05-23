import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const RichTextEditor = ({
	editorContent,
	className,
	handleEditorChange,
}: {
	editorContent: string;
	className?: string;
	handleEditorChange: any;
}) => {
	return (
		<ReactQuill
			className={`${className} max-w-[90vw]`}
			value={editorContent}
			onChange={handleEditorChange}
		/>
	);
};

export default RichTextEditor;
