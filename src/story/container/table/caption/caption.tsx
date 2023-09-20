import React, { memo } from "react";

interface CaptionProp {
	children: React.ReactNode;
	captionSide?: "top" | "bottom";
	align?: "start" | "center" | "end";
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

export const WBCaption = memo(function WBCaption({
	children,
	captionSide = "top",
	align = "center",
	border = "none",
}: CaptionProp) {
	const className = [
		"rounded",
		"px-4 py-2",
		"border-black-3 dark:border-white-3",
		"font-sans font-normal text-xl text-black-6 dark:text-white-6 truncate selection:bg-blue-1 dark:selection:bg-blue-10",
	];

	const style: {
		borderTopWidth?: string;
		borderRightWidth?: string;
		borderBottomWidth?: string;
		borderLeftWidth?: string;
	} = {};

	switch (captionSide) {
		case "top":
			className.push("caption-top");
			break;
		case "bottom":
			className.push("caption-bottom");
			break;
		default:
			throw new Event(
				`不能将${typeof captionSide}类型, 赋值给"top" | "bottom"类型的captionSide`,
			);
	}

	switch (align) {
		case "start":
			className.push("text-start");
			break;
		case "center":
			className.push("text-center");
			break;
		case "end":
			className.push("text-end");
			break;
		default:
			throw new Event(
				`不能将${typeof align}类型, 赋值给"start" | "center" | "end"类型的align`,
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
		<caption className={className.join(" ")} style={style}>
			{children}
		</caption>
	);
});
