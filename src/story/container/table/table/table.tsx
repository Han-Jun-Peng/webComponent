import React, { memo } from "react";

interface TableProp {
	children: React.ReactNode;
	tableLayout?: "fixed" | "auto";
	border?: boolean;
	borderCollapse?: boolean;
}

export const WBTable = memo(function WBTable({
	children,
	tableLayout = "fixed",
	border = true,
	borderCollapse = true,
}: TableProp) {
	const className = [
		"w-full",
		// "h-full",
		"rounded",
		"px-4 py-2",
		"bg-black-1 dark:bg-white-1",
		"overflow-x-hidden",
		"overflow-y-auto",
	];

	// 表格的尺寸
	switch (tableLayout) {
		case "fixed":
			className.push("table-fixed");
			break;
		case "auto":
			className.push("table-auto");
			break;
		default:
			throw new Event(
				`不能将${typeof tableLayout}类型, 赋值给"fixed" | "auto"类型的tableLayout`,
			);
	}

	switch (border) {
		case true:
			className.push("border border-black-3 dark:border-white-3");
			break;
		case false:
			break;
		default:
			throw new Event(`不能将${typeof border}类型, 赋值给boolean类型的border`);
	}

	// 合并表格边框与单元格边框
	switch (borderCollapse) {
		case true:
			className.push("border-collapse");
			break;
		case false:
			className.push("border-separate");
			break;
		default:
			throw new Event(
				`不能将${typeof borderCollapse}类型, 赋值给boolean类型的borderCollapse`,
			);
	}

	return <table className={className.join(" ")}>{children}</table>;
});
