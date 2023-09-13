import React, { memo } from "react";

export interface LoadingProp {
	size?: 16 | 24 | 32;
}

export const WBLoading = memo(function WBLoading({ size = 16 }: LoadingProp) {
	const className = [
		"border-2",
		"border-black-1",
		"border-t-black-4",
		"dark:border-white-1",
		"dark:border-t-white-4",
		"rounded-full",
		"animate-spin",
	];

	switch (size) {
		case 16:
			className.push("w-4 h-4");
			break;
		case 24:
			className.push("w-6 h-6");
			break;
		case 32:
			className.push("w-8 h-8");
			break;
		default:
			throw new Event(`不能将${typeof size}类型, 赋值给16 | 32 | 64类型的size`);
	}

	return <div className={className.join(" ")}></div>;
});
