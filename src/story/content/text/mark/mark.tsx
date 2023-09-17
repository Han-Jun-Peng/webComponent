import React, { ReactNode, memo } from "react";

export interface MarkProp {
	children?: ReactNode;
}

export const WBMark = memo(function WBMark({ children }: MarkProp) {
	const className = [
		"inline",
		"font-normal",
		"text-black-6",
		"dark:text-white-6",
		"bg-blue-1",
		"selection:bg-blue-3",
		"dark:bg-blue-10",
		"dark:selection:bg-blue-8",
	];

	return <strong className={className.join(" ")}>{children}</strong>;
});
