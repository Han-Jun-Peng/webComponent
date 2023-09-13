import React, { memo } from "react";

interface FlexProp {
	children: React.ReactNode;
	direction?: "horizontal" | "vertical";
	wrap?: boolean;
	gap?: "zero" | "small" | "medium" | "large";
	alignX?: "start" | "center" | "end" | "baseline";
	alignY?: "start" | "center" | "end" | "baseline";
}

export const WBFlex = memo(function WBFlex({
	children,
	direction = "horizontal",
	wrap = true,
	gap = "medium",
	alignX = "start",
	alignY = "start",
}: FlexProp) {
	const className = ["flex", "w-full", "h-full", "overflow-y-auto"];

	// 方向
	switch (direction) {
		case "horizontal":
			className.push("flex-row");

			// 子元素在当前元素x轴上的位置
			switch (alignX) {
				case "start":
					className.push("justify-start justify-items-start");
					break;
				case "center":
					className.push("justify-center justify-items-center");
					break;
				case "end":
					className.push("justify-end justify-items-end");
					break;
				case "baseline":
					break;
				default:
					throw new Event(
						`不能将${typeof alignX}类型, 赋值给"horizontal" | "vertical"类型的alignX`,
					);
			}

			// 子元素在当前元素Y轴上的位置
			switch (alignY) {
				case "start":
					className.push("content-start items-start");
					break;
				case "center":
					className.push("content-center items-center");
					break;
				case "end":
					className.push("content-end items-end");
					break;
				case "baseline":
					className.push("content-baseline items-baseline");
					break;
				default:
					throw new Event(
						`不能将${typeof alignY}类型, 赋值给"horizontal" | "vertical"类型的alignY`,
					);
			}
			break;
		case "vertical":
			className.push("flex-col");

			// 子元素在当前元素x轴上的位置
			switch (alignX) {
				case "start":
					className.push("content-start items-start ");
					break;
				case "center":
					className.push("content-center items-center");
					break;
				case "end":
					className.push("content-end items-end");
					break;
				case "baseline":
					className.push("content-baseline items-baseline");
					break;
				default:
					throw new Event(
						`不能将${typeof alignX}类型, 赋值给"horizontal" | "vertical"类型的alignX`,
					);
			}

			// 子元素在当前元素Y轴上的位置
			switch (alignY) {
				case "start":
					className.push("justify-start justify-items-start");
					break;
				case "center":
					className.push("justify-center justify-items-center");
					break;
				case "end":
					className.push("justify-end justify-items-end");
					break;
				case "baseline":
					break;
				default:
					throw new Event(
						`不能将${typeof alignY}类型, 赋值给"horizontal" | "vertical"类型的alignY`,
					);
			}
			break;
		default:
			throw new Event(
				`不能将${typeof direction}类型, 赋值给"horizontal" | "vertical"类型的direction`,
			);
	}

	// 换行
	switch (wrap) {
		case true:
			className.push("flex-wrap");
			break;
		case false:
			className.push("flex-nowrap");
			break;
		default:
			throw new Event(
				`不能将${typeof wrap}类型, 赋值给"horizontal" | "vertical"类型的wrap`,
			);
	}

	// 间距
	switch (gap) {
		case "zero":
			className.push("gap-0");
			break;
		case "small":
			className.push("gap-2");
			break;
		case "medium":
			className.push("gap-4");
			break;
		case "large":
			className.push("gap-6");
			break;
		default:
			throw new Event(
				`不能将${typeof gap}类型, 赋值给"horizontal" | "vertical"类型的gap`,
			);
	}

	return <div className={className.join("  ")}>{children}</div>;
});
