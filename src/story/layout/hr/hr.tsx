import React, { memo } from "react";

export interface HrProp {
	type?: "solid" | "dashed" | "arrow" | "home";
	direction?: "horizontal" | "vertical";
}

export const WBHr = memo(function WBHr({
	type = "solid",
	direction = "horizontal",
}: HrProp) {
	const className: string[] = [];
	let children: React.ReactNode;

	switch (type) {
		case "solid":
			className.push(
				"block",
				"border-black-2",
				"dark:border-white-2 border-solid",
			);
			switch (direction) {
				case "horizontal":
					className.push("border-t");
					break;
				case "vertical":
					className.push("border-l h-full");
					break;
				default:
					throw new Event(
						`不能将${typeof direction}类型, 赋值给"horizontal" | "vertical"类型的direction`,
					);
			}
			break;
		case "dashed":
			className.push(
				"block",
				"border-black-2",
				"dark:border-white-2 border-dashed",
			);
			switch (direction) {
				case "horizontal":
					className.push("border-t");
					break;
				case "vertical":
					className.push("border-l h-full");
					break;
				default:
					throw new Event(
						`不能将${typeof direction}类型, 赋值给"horizontal" | "vertical"类型的direction`,
					);
			}
			break;
		case "arrow":
			children = (
				<svg
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-4 h-4 text-black-5 dark:text-white-5"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M8.25 4.5l7.5 7.5-7.5 7.5"
					/>
				</svg>
			);
			break;
		case "home":
			children = (
				<svg
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-6 h-6 text-blue-6 hover:text-blue-5 active:text-blue-7  dark:text-blue-5 dark:hover:text-blue-6 dark:active:text-blue-4"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
					/>
				</svg>
			);
			break;
		default:
			throw new Event(
				`不能将${typeof type}类型, 赋值给"solid" | "dashed" | "arrow"类型的type`,
			);
	}

	return (
		<div role="separator" className={className.join(" ")}>
			{children}
		</div>
	);
});
