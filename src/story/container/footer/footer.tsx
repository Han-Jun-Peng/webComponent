import React, { ReactNode, memo } from "react";

interface FooterProp {
	children?: ReactNode;
	border?: boolean;
	shadow?: boolean;
}

export const WBFooter = memo(function WBFooter({
	children,
	border = false,
	shadow = false,
}: FooterProp) {
	const className = [
		"block",
		"w-full",
		"rounded",
		"px-4 py-2",
		"bg-black-1 dark:bg-white-1",
	];

	if (border) {
		if (typeof border !== "boolean") {
			throw new Event(`不能将${typeof border}类型, 赋值给boolean类型的border`);
		}
		className.push("border border-black-3 dark:border-white-3");
	}

	if (shadow) {
		if (typeof shadow !== "boolean") {
			throw new Event(`不能将${typeof shadow}类型, 赋值给boolean类型的shadow`);
		}
		className.push("shadow dark:shadow-white-2");
	}

	return <footer className={className.join(" ")}>{children}</footer>;
});
