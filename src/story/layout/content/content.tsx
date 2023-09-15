import React, { ReactNode, memo } from "react";
import { WBFlex } from "../flex/flex.tsx";

interface ContentProp {
	children?: ReactNode;
	direction?: "horizontal" | "vertical";
	padding?: boolean;
	hasAside?: boolean;
}

export const WBContent = memo(function WBContent({
	children,
	direction = "horizontal",
	padding = false,
	hasAside = false,
}: ContentProp) {
	const className = ["block", "flex-1", "overflow-hidden"];
	let gap: "zero" | "large" = "zero";

	switch (direction) {
		case "horizontal":
			className.push("w-full");
			if (hasAside) {
				gap = "large";
			}
			break;
		case "vertical":
			className.push("h-full");
			gap = "large";
			break;
		default:
			throw new Event(`不能将${typeof direction}类型, 赋值给类型的direction`);
	}

	if (padding) {
		className.push("px-4 py-2");
	}

	return (
		<div className={className.join(" ")}>
			<WBFlex direction={direction} gap={gap}>
				{direction == "horizontal" ? (
					<>
						{hasAside ? (
							children
						) : (
							<>
								<div className=" flex-1"></div>
								{children}
								<div className=" flex-1"></div>
							</>
						)}
					</>
				) : (
					<>{children}</>
				)}
			</WBFlex>
		</div>
	);
});
