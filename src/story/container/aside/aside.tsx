import React, { ReactNode, memo } from "react";
import { WBFlex } from "../../layout/flex/flex.tsx";

interface AsideProp {
	children?: ReactNode;
	border?: boolean;
	padding?: boolean;
	shadow?: boolean;
}

export const WBAside = memo(function WBAside({
	children,
	border = false,
	padding = false,
	shadow = false,
}: AsideProp) {
	const className = [
		"inline-block",
		"h-full",
		"rounded",

		"bg-black-1 dark:bg-white-1",
	];

	if (border) {
		if (typeof border !== "boolean") {
			throw new Event(`不能将${typeof border}类型, 赋值给boolean类型的border`);
		}
		className.push("border border-black-3 dark:border-white-3");
	}

	if (padding) {
		if (typeof padding !== "boolean") {
			throw new Event(
				`不能将${typeof padding}类型, 赋值给boolean类型的padding`,
			);
		}
		className.push("px-4 py-2");
	}

	if (shadow) {
		if (typeof shadow !== "boolean") {
			throw new Event(`不能将${typeof shadow}类型, 赋值给boolean类型的shadow`);
		}
		className.push("shadow dark:shadow-white-2");
	}

	return (
		<aside className={className.join(" ")}>
			<WBFlex direction="vertical" gap="zero">
				{children}
				<div className="flex-1"></div>
			</WBFlex>
		</aside>
	);
});
