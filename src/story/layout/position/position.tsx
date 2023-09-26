import React, { memo } from "react";

interface PostitionProp {
	children?: React.ReactNode;
	position?: "static" | "fixed" | "sticky" | "relative" | "absolute";
	left?:
		| "start-outside"
		| "start-inside"
		| "center"
		| "end-inside"
		| "end-outside"
		| number;

	top?:
		| "start-outside"
		| "start-inside"
		| "center"
		| "end-inside"
		| "end-outside"
		| number;
	display?: "none" | "inline-block" | "block";
	displayHover?: "none" | "inline-block" | "block";
	displayFocus?: "none" | "inline-block" | "block";
}

export const WBPostiton = memo(function WBPostiton({
	children,
	position = "relative",
	left,
	top,
	display = "inline-block",
	displayHover = "inline-block",
	displayFocus = "inline-block",
}: PostitionProp) {
	const className: string[] = [];
	const style: { left?: string; top?: string } = {};

	switch (position) {
		case "static":
			className.push("static");
			break;
		case "fixed":
			className.push("fixed");
			break;
		case "sticky":
			className.push("sticky");
			break;
		case "relative":
			className.push("relative");
			break;
		case "absolute":
			className.push("absolute");
			break;
		default:
			throw new Event(
				`不能将${typeof position}类型, 赋值给"static" | "fixed" | "sticky" | "relative" | "absolute"类型的position`,
			);
	}

	switch (left) {
		case undefined:
			break;
		case "start-outside":
			className.push("left-0 -translate-x-full");
			break;
		case "start-inside":
			className.push("left-0");
			break;
		case "center":
			className.push("left-1/2 -translate-x-1/2");
			break;
		case "end-inside":
			className.push("right-0");
			break;
		case "end-outside":
			className.push("right-0 translate-x-full");
			break;
		default:
			if (typeof left == "number") {
				style.left = left + "px";
				break;
			}
			throw new Event(
				`不能将${typeof left}类型, 赋值给 "start-outside"| "start-inside"| "center"| "end-inside"| "end-outside"类型的left`,
			);
	}

	switch (top) {
		case undefined:
			break;
		case "start-outside":
			className.push("top-0 -translate-y-full");
			break;
		case "start-inside":
			className.push("top-0");
			break;
		case "center":
			className.push("top-1/2 -translate-y-1/2");
			break;
		case "end-inside":
			className.push("-bottom-0");
			break;
		case "end-outside":
			className.push("bottom-0 translate-y-full");
			break;
		default:
			if (typeof top == "number") {
				style.top = top + "px";
				break;
			}
			throw new Event(
				`不能将${typeof top}类型, 赋值给 "start-outside"| "start-inside"| "center"| "end-inside"| "end-outside"类型的top`,
			);
	}

	switch (display) {
		case "none":
			className.push("hidden");
			break;
		case "inline-block":
			className.push("inline-block");
			break;
		case "block":
			className.push("block");
			break;
		default:
			throw new Event(
				`不能将${typeof display}类型, 赋值给"none" | "inline-block" | "block"类型的display`,
			);
	}

	switch (displayHover) {
		case "none":
			className.push("peer-hover:hidden group-hover:hidden");
			break;
		case "inline-block":
			className.push("peer-hover:inline-block group-hover:inline-block");
			break;
		case "block":
			className.push("peer-hover:block group-hover:block");
			break;
		default:
			throw new Event(
				`不能将${typeof displayHover}类型, 赋值给"none" | "inline-block" | "block"类型的displayHover`,
			);
	}

	switch (displayFocus) {
		case "none":
			className.push("peer-focus:hidden group-focus:hidden");
			break;
		case "inline-block":
			className.push("peer-focus:inline-block group-focus:inline-block");
			break;
		case "block":
			className.push("peer-focus:block group-focus:block");
			break;
		default:
			throw new Event(
				`不能将${typeof displayFocus}类型, 赋值给"none" | "inline-block" | "block"类型的displayFocus`,
			);
	}

	return (
		<div className={className.join(" ")} style={style}>
			{children}
		</div>
	);
});
