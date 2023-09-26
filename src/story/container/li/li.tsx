import React, { memo } from "react";

interface LiProp {
	children?: React.ReactNode;
	id: string;
	dataId?: string;
	dataValue?: string;
	onClick?: (mouseEvent: React.MouseEvent) => void;
	onClickCapture?: (mouseEvent: React.MouseEvent) => void;
	border?: boolean;
	noBackground?: boolean;
	isActive?: boolean;
}

export const WBLi = memo(function WBLi({
	children,
	id,
	dataId,
	dataValue,
	onClick,
	onClickCapture,
	border = false,
	noBackground = false,
	isActive = false,
}: LiProp) {
	const className = [
		"inline-block w-full h-full px-4 py-2 rounded shadow dark:shadow-white-2",
	];

	if (id) {
		if (typeof id !== "string") {
			throw new Event(`不能将${typeof id}类型, 赋值给string类型的id`);
		}
	} else {
		throw new Event("缺少id属性, 这是必选项");
	}

	if (onClick) {
		if (typeof onClick !== "function") {
			throw new Event(
				`不能将${typeof onClick}类型, 赋值给function类型的onClick`,
			);
		}
	}

	if (onClickCapture) {
		if (typeof onClickCapture !== "function") {
			throw new Event(
				`不能将${typeof onClickCapture}类型, 赋值给function类型的onClickCapture`,
			);
		}
	}

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
			key={id}
			data-id={dataId}
			data-value={dataValue}
			onClick={onClick}
			onClickCapture={onClickCapture}
			className={className.join(" ")}
		>
			{children}
		</li>
	);
});
