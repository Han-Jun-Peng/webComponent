import React, { memo } from "react";

export interface StrongProp {
	children?: React.ReactNode;
	fontWeight?: "medium" | "semibold";
}

export const WBStrong = memo(function WBStrong({
	children,
	fontWeight = "medium",
}: StrongProp) {
	const className: string[] = [
		"inline",
		"text-black-6 dark:text-white-6",
		"selection:bg-blue-1",
		"dark:selection:bg-blue-10",
	];

	switch (fontWeight) {
		case "medium":
			className.push("font-medium");
			break;
		case "semibold":
			className.push("font-semibold");
			break;
		default:
			throw new Error(
				`无法将${typeof fontWeight}类型, 赋值给"normal" | "Bold"类型的属性fontWeight`,
			);
	}

	return <strong className={className.join(" ")}>{children}</strong>;
});
