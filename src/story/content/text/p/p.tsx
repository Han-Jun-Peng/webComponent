import React, { ReactNode, memo } from "react";

import getStyleByCanSelect from "./getStyleByCanSelect.ts";

export interface PProp {
	children?: ReactNode;
	canSelect?: boolean;
	isRetraction?: boolean;
}

export const WBP = memo(function WBP({
	children,
	canSelect = true,

	isRetraction = false,
}: PProp) {
	const className = [
		"font-sans", // 字体
		"font-normal", // 不加粗
		"text-base", // 16号
		"text-black-6", // 字体颜色
		"dark:text-white-6", // 深色模式, 字体颜色
		"overflow-y-hidden",
		"text-clip",
		"break-all", // 单词溢出时, 截断放下一行, 再溢出, 重复
		"hyphens-auto", // 单词溢出时, 换行时,添加连字符
		"selection:bg-blue-1", // 用户选中时, 背景高亮
		"dark:selection:bg-blue-10",
	];
	className.push(getStyleByCanSelect(canSelect));

	if (isRetraction) {
		className.push("indent-8"); //缩进
	}

	return <p className={className.join(" ")}>{children}</p>;
});
