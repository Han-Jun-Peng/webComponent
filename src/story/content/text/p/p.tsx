import React, { ReactNode, memo, useCallback, useState } from "react";

export interface PProp {
	children?: ReactNode;
	canSelect?: boolean;
	isRetraction?: boolean;
	contentEditable?: boolean;
	setChildren?: (children: ReactNode) => void;
	align?: "start" | "center" | "end";
	noWarp?: boolean;
}

export const WBP = memo(function WBP({
	children,
	canSelect = true,
	isRetraction = false,
	contentEditable = false,
	setChildren,
	align = "start",
	noWarp = false,
}: PProp) {
	const className = [
		"block",
		"font-sans", // 字体
		"font-normal", // 不加粗
		"text-base", // 16号
		"text-black-6", // 字体颜色
		"dark:text-white-6", // 深色模式, 字体颜色
		"break-all", // 单词溢出时, 截断放下一行, 再溢出, 重复
		"hyphens-auto", // 单词溢出时, 换行时,添加连字符
		"selection:bg-blue-1", // 用户选中时, 背景高亮
		"dark:selection:bg-blue-10",
	];

	switch (canSelect) {
		case true:
			className.push("select-auto");
			break;
		case false:
			className.push("select-none");
			break;
		default:
			throw new Event(
				`不能将${typeof canSelect}类型, 赋值给boolean类型的canSelect`,
			);
	}

	if (isRetraction) {
		if (typeof isRetraction !== "boolean") {
			throw new Event(
				`不能将${typeof isRetraction}类型, 赋值给boolean类型的isRetraction`,
			);
		}
		className.push("indent-8"); //缩进
	}

	switch (align) {
		case "start":
			className.push("text-start");
			break;
		case "center":
			className.push("text-center");
			break;
		case "end":
			className.push("text-end");
			break;
		default:
			throw new Event(
				`不能将${typeof align}类型, 赋值给"start" | "center" | "end"类型的align`,
			);
	}

	switch (noWarp) {
		case true:
			className.push("truncate");
			break;
		case false:
			className.push("overflow-y-hidden text-clip");
			break;
		default:
			throw new Event(`不能将${typeof noWarp}类型, 赋值给boolean类型的noWarp`);
	}

	const [value, setValue] = useState(children);

	const handlerBlur = useCallback(
		(fouceEvent: React.FocusEvent) => {
			const p = fouceEvent.target as HTMLParagraphElement;
			setValue(p.innerText);

			if (setChildren) {
				setChildren(p.innerText);
			}
		},
		[setValue, setChildren],
	);

	return (
		<p
			contentEditable={contentEditable}
			inputMode="text"
			className={className.join(" ")}
			onBlur={handlerBlur}
			suppressContentEditableWarning
		>
			{value}
		</p>
	);
});
