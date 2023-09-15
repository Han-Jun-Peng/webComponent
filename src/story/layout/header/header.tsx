import React, { ReactNode, memo } from "react";

interface HeaderProp {
	children?: ReactNode;
	border?: boolean;
}

export const WBHeader = memo(function WBHeader({
	children,
	border = false,
}: HeaderProp) {
	const className = [
		"block",
		"w-full",
		"rounded",
		"px-4 py-2",
		"bg-black-1 dark:bg-white-1",
		"shadow dark:shadow-white-2",
	];

	switch (border) {
		case true:
			className.push("border border-black-3 dark:border-white-3");
			break;
		case false:
			break;
		default:
			throw new Event(`不能将${typeof border}类型, 赋值给boolean类型的border`);
	}

	return <header className={className.join(" ")}>{children}</header>;
});
