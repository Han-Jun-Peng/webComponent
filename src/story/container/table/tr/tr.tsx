import React, { memo } from "react";

interface TrProp {
	children: React.ReactNode;
	border?:
		| "none"
		| "all"
		| "topBottom"
		| "leftRright"
		| "top"
		| "right"
		| "bottom"
		| "left";
	backgroundColor?: boolean;
}

export const WBTr = memo(function WBTr({
	children,
	border = "none",
	backgroundColor = false,
}: TrProp) {
	const className = ["rounded", "border-black-3 dark:border-white-3"];

	const style: {
		borderTopWidth?: string;
		borderRightWidth?: string;
		borderBottomWidth?: string;
		borderLeftWidth?: string;
	} = {};

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

	if (backgroundColor) {
		if (typeof backgroundColor !== "boolean") {
			throw new Event(
				`不能将${typeof backgroundColor}类型, 赋值给boolean类型的border`,
			);
		}
		className.push("bg-black-2 dark:bg-white-2");
	}

	return (
		<tr className={className.join(" ")} style={style}>
			{children}
		</tr>
	);
});
