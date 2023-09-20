import React, { memo } from "react";

interface TbodyProp {
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
}

export const WBTbody = memo(function WBTbody({
	children,
	border = "none",
}: TbodyProp) {
	const className = [
		"rounded",
		"border-black-3 dark:border-white-3",
		"overflow-x-hidden",
		"overflow-y-auto",
	];

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

	return (
		<tbody className={className.join(" ")} style={style}>
			{children}
		</tbody>
	);
});
