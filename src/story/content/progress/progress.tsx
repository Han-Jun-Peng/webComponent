import React, { memo } from "react";

interface ProgressProp {
	width?: number;
	height?: number;
	max: number;
	value: number;
	cacheValue?: number;
	onClick?: (mouseEvent?: React.MouseEvent) => void;
	onClickCapture?: (mouseEvent?: React.MouseEvent) => void;
	onKeyDown?: (keyboardEvent?: React.KeyboardEvent) => void;
	onKeyDownCapture?: (keyboardEvent?: React.KeyboardEvent) => void;
	onKeyUp?: (keyboardEvent?: React.KeyboardEvent) => void;
	onKeyUpCapture?: (keyboardEvent?: React.KeyboardEvent) => void;
}
export const WBProgress = memo(function WBProgress({
	width = 100,
	height = 8,
	max = 100,
	value = 50,
	cacheValue,
	onClick,
	onClickCapture,
	onKeyDown,
	onKeyDownCapture,
	onKeyUp,
	onKeyUpCapture,
}: ProgressProp) {
	if (width) {
		if (typeof width !== "number") {
			throw new Event(`不能将${typeof width}类型, 赋值给number类型的width`);
		}
	}

	if (height) {
		if (typeof height !== "number") {
			throw new Event(`不能将${typeof height}类型, 赋值给number类型的height`);
		}
	}

	if (max) {
		if (typeof max !== "number") {
			throw new Event(`不能将${typeof max}类型, 赋值给number类型的max`);
		}
	} else {
		throw new Event(`缺少必要属性max`);
	}

	if (value) {
		if (typeof value !== "number") {
			throw new Event(`不能将${typeof value}类型, 赋值给number类型的value`);
		}
	} else {
		throw new Event(`缺少必要属性value`);
	}

	if (cacheValue) {
		if (typeof cacheValue !== "number") {
			throw new Event(
				`不能将${typeof cacheValue}类型, 赋值给number类型的cacheValue`,
			);
		}
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

	if (onkeydown) {
		if (typeof onkeydown !== "function") {
			throw new Event(
				`不能将${typeof onkeydown}类型, 赋值给function类型的onkeydown`,
			);
		}
	}

	if (onKeyDownCapture) {
		if (typeof onKeyDownCapture !== "function") {
			throw new Event(
				`不能将${typeof onKeyDownCapture}类型, 赋值给function类型的onKeyDownCapture`,
			);
		}
	}

	if (onkeyup) {
		if (typeof onkeyup !== "function") {
			throw new Event(
				`不能将${typeof onkeyup}类型, 赋值给function类型的onkeyup`,
			);
		}
	}

	if (onKeyUpCapture) {
		if (typeof onKeyUpCapture !== "function") {
			throw new Event(
				`不能将${typeof onKeyUpCapture}类型, 赋值给function类型的onKeyUpCapture`,
			);
		}
	}

	const backgroundClassName = [
		"relative",
		"border border-block-3 dark:border-white-3 rounded",
		"bg-block-1 dark:bg-white-1",
		"z-0",
		"focus:outline-4 focus:outline-blue-2 dark:focus:outline-blue-8 focus:outline-dashed focus:outline-offset-2",
	];

	const backgroundStyle = {
		width: `${width}px`,
		height: `${height}px`,
	};

	const cacheClassName = [
		"absolute",
		"w-full h-full",
		"rounded",
		"bg-black-2 dark:bg-white-2",
		"z-10",
	];

	const cacheStyle: { width?: string } = {};
	if (cacheValue) {
		cacheStyle.width = `${(width * cacheValue) / max}px`;
	}

	const progressClassName = [
		"absolute",
		"w-full h-full",
		"rounded",
		"bg-blue-2 dark:bg-blue-9",
		"z-20",
	];

	const progressStyle = {
		width: `${(width * value) / max}px`,
	};

	return (
		<div
			role="progressbar"
			tabIndex={cacheValue ? 0 : undefined}
			className={backgroundClassName.join(" ")}
			style={backgroundStyle}
			onClick={cacheValue ? onClick : undefined}
			onClickCapture={cacheValue ? onClickCapture : undefined}
			onKeyDown={cacheValue ? onKeyDown : undefined}
			onKeyDownCapture={cacheValue ? onKeyDownCapture : undefined}
			onKeyUp={cacheValue ? onKeyUp : undefined}
			onKeyUpCapture={cacheValue ? onKeyUpCapture : undefined}
		>
			{cacheValue ? (
				<div className={cacheClassName.join(" ")} style={cacheStyle}></div>
			) : null}
			<div className={progressClassName.join(" ")} style={progressStyle}></div>
		</div>
	);
});
