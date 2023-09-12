import React, { ReactNode, memo } from "react";

interface MarkProp {
	children?: ReactNode;
}

const WBMark = memo(function WBMark({ children }: MarkProp) {
	const className = [
		"inline",
		"font-normal",
		"bg-blue-1",
		"selection:bg-blue-2",
	];

	return <strong className={className.join(" ")}>{children}</strong>;
});

export default WBMark;
