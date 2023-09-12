import React, { memo } from "react";

interface StrongProp {
	children?: React.ReactNode;
	fontWeight?: "medium" | "semibold";
}

const WBStrong = memo(function WBStrong({
	children,
	fontWeight = "medium",
}: StrongProp) {
	const className: string[] = ["inline", "selection:bg-blue-1"];

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

export default WBStrong;
