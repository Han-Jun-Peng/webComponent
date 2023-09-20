import React, { memo } from "react";

interface LiProp {
	children?: React.ReactNode;
	key: string;
	dataId?: string;
	onClick?: (mouseEvent?: React.MouseEvent) => void;
	onClickCapture?: (mouseEvent?: React.MouseEvent) => void;
	border?: boolean;
	noBackground?: boolean;
	isActive?: boolean;
}

export const WBLi = memo(function WBLi({
	children,
	key,
	dataId,
	onClick,
	onClickCapture,
	border = false,
	noBackground = false,
	isActive = false,
}: LiProp) {
	const className = [
		"inline-block w-full h-full px-4 py-2 rounded shadow dark:shadow-white-2",
	];

	if (border) {
		if (typeof border !== "boolean") {
			throw new Event(`不能将${typeof border}类型, 赋值给boolean类型的border`);
		}

		className.push("border border-black-3 dark:border-white-3");
	}

	if (!noBackground) {
		if (typeof noBackground !== "boolean") {
			throw new Event(
				`不能将${typeof noBackground}类型, 赋值给boolean类型的noBackground`,
			);
		}

		className.push(
			"hover:bg-blue-5 active:bg-blue-7 dark:hover:bg-blue-6 dark:active:bg-blue-4",
		);
	}

	if (isActive) {
		if (typeof isActive !== "boolean") {
			throw new Event(
				`不能将${typeof isActive}类型, 赋值给boolean类型的isActive`,
			);
		}

		className.push("bg-blue-1 dark:bg-blue-10");
	}

	return (
		<li
			key={key}
			data-id={dataId}
			onClick={onClick}
			onClickCapture={onClickCapture}
			className={className.join(" ")}
		>
			{children}
		</li>
	);
});
