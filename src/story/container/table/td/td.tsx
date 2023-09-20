import React, { memo } from "react";

interface TdProp {
	children: React.ReactNode;
	colSpan?: number;
	rowSpan?: number;
	verticalAlign?: "baseline" | "top" | "middle" | "bottom";
	border?:
		| "none"
		| "all"
		| "topBottom"
		| "leftRright"
		| "top"
		| "right"
		| "bottom"
		| "left";
}

export const WBTd = memo(function WBTd({
	children,
	colSpan = 1,
	rowSpan = 1,
	verticalAlign = "middle",
	border = "none",
}: TdProp) {
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

	switch (verticalAlign) {
		case "baseline":
			className.push("align-baseline");
			break;
		case "top":
			className.push("align-top");
			break;
		case "middle":
			className.push("align-middle");
			break;
		case "bottom":
			className.push("align-bottom");
			break;
		default:
			throw new Event(
				`不能将${typeof verticalAlign}类型, 赋值给"baseline" | "top" | "middle" | "bottom"类型的`,
			);
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
		<td
			colSpan={colSpan}
			rowSpan={rowSpan}
			className={className.join(" ")}
			style={style}
		>
			{children}
		</td>
	);
});
