import React, { memo } from "react";

interface ThProp {
	children: React.ReactNode;
	colSpan?: number;
	rowSpan?: number;
	width?: number | string;
	border?:
		| "none"
		| "all"
		| "topBottom"
		| "leftRright"
		| "top"
		| "right"
		| "bottom"
		| "left";
	scope?: "row" | "col";
}

export const WBTh = memo(function WBTh({
	children,
	colSpan = 1,
	rowSpan = 1,
	width,
	border = "none",
	scope = "col",
}: ThProp) {
	const className = [
		"rounded",
		"border-black-3 dark:border-white-3",
		"px-4 py-2",
		"truncate",
	];

	const style: {
		borderTopWidth?: string;
		borderRightWidth?: string;
		borderBottomWidth?: string;
		borderLeftWidth?: string;
		width?: number | string;
	} = {};

	if (width) {
		if (typeof width !== "number" && typeof width !== "string") {
			throw new Event(
				`不能将${typeof width}类型, 赋值给number | string类型的width`,
			);
		}
		style.width = width;
	}

	switch (border) {
		case "none":
			break;
		case "all":
			className.push("border");
			break;
		case "topBottom":
			style.borderTopWidth = "1px";
			style.borderBottomWidth = "1px";
			break;
		case "leftRright":
			style.borderLeftWidth = "1px";
			style.borderRightWidth = "1px";
			break;
		case "top":
			style.borderTopWidth = "1px";
			break;
		case "right":
			style.borderRightWidth = "1px";
			break;
		case "left":
			style.borderLeftWidth = "1px";
			break;
		case "bottom":
			style.borderBottomWidth = "1px";
			break;
		default:
			throw new Event(`不能将${typeof border}类型, 赋值给"none"
		| "all"
		| "topBottom"
		| "leftRright"
		| "top"
		| "right"
		| "bottom"
		| "left"类型的border`);
	}

	return (
		<th
			colSpan={colSpan}
			rowSpan={rowSpan}
			scope={scope}
			className={className.join(" ")}
			style={style}
		>
			{children}
		</th>
	);
});
