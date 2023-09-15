import React, { ReactNode, memo } from "react";
import { WBFlex } from "../flex/flex.tsx";

export interface PageProp {
	children: ReactNode;
	height?: "boundless" | "screen" | number;
	direction?: "horizontal" | "vertical";
}

export const WBPage = memo(function WBPage({
	children,
	height = "screen",
	direction = "vertical",
}: PageProp) {
	const className = ["block", "bg-black-1", "dark:bg-white-1", "w-screen"];
	const style: { height?: string } = {};
	let gap: "large" | "zero" = "large";

	switch (height) {
		case "boundless":
			className.push("");
			break;
		case "screen":
			className.push("h-screen overflow-hidden");
			break;
		default:
			if (typeof height == "number") {
				style.height = height + "px";
				className.push("overflow-y-auto");
				break;
			} else {
				throw new Event(`不能将${typeof height}类型, 赋值给类型的height`);
			}
	}

	if (direction !== "horizontal") {
		if (direction !== "vertical") {
			throw new Event(`不能将${typeof direction}类型, 赋值给类型的direction`);
		}
	}

	if (direction == "horizontal") {
		gap = "zero";
	}

	return (
		<div className={className.join(" ")} style={style}>
			<WBFlex direction={direction} gap={gap}>
				{children}
			</WBFlex>
		</div>
	);
});
