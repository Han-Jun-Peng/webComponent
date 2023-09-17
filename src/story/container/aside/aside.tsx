import React, { ReactNode, memo } from "react";
import { WBFlex } from "../../layout/flex/flex.tsx";

interface AsideProp {
	children?: ReactNode;
	border?: boolean;
}

export const WBAside = memo(function WBAside({
	children,
	border = false,
}: AsideProp) {
	const className = [
		"inline-block",
		"h-full",
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

	return (
		<aside className={className.join(" ")}>
			<WBFlex direction="vertical" gap="zero">
				{children}
				<div className=" flex-1"></div>
			</WBFlex>
		</aside>
	);
});
