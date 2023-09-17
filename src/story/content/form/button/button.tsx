import React, { memo } from "react";
import { WBLoading } from "../../../feedback/loading/loading.tsx";

export interface ButtonProp {
	children?: React.ReactNode;
	type?: "button" | "submit" | "reset";
	onClick?: (mouseEvent: React.MouseEvent) => void;
	onClickCapture?: (mouseEvent: React.MouseEvent) => void;
	as?: "primary" | "secondary" | "dashed" | "text";
	disabled?: boolean;
	isLoadling?: boolean;
	isDanger?: boolean;
}

export const WBButton = memo(function WBButton({
	children,
	type = "button",
	onClick,
	onClickCapture,
	as = "secondary",
	disabled = false,
	isLoadling = false,
	isDanger = false,
}: ButtonProp) {
	const className = [
		"font-sans", // 字体
		"font-normal", // 不加粗
		"text-base", // 16号
		"overflow-hidden",
		"text-clip",
		"whitespace-nowrap",

		"rounded", // 圆角边框
		"px-4", // 内边距16px
		"transition-all", // 启动过渡
	];

	className.push(getStyle(as, disabled, isDanger, isLoadling));

	return (
		<button
			type={type}
			onClick={onClick}
			onClickCapture={onClickCapture}
			tabIndex={0}
			disabled={disabled}
			className={className.join(" ")}
		>
			{isLoadling ? (
				<div className="py-1">
					<WBLoading></WBLoading>
				</div>
			) : (
				children
			)}
		</button>
	);
});

function getStyle(
	as: "primary" | "secondary" | "dashed" | "text",
	disabled: boolean,
	isDanger: boolean,
	isLoadling: boolean,
) {
	switch (as) {
		case "primary":
			if (disabled || isLoadling) {
				return "border border-black-3 border-solid text-black-4 bg-black-1 dark:border-white-3 dark:text-white-4 dark:bg-white-1 cursor-not-allowed";
			}
			if (isDanger) {
				return "border border-red-6 border-solid text-white-6 bg-red-6 hover:border-red-5 hover:bg-red-5  active:outline-4 active:outline-red-1 active:outline active:border-red-7 active:bg-red-7 dark:border-red-5 dark:text-black-6 dark:bg-red-5 dark:hover:border-red-6 dark:hover:bg-red-6 dark:active:outline-red-10 dark:active:border-red-4 dark:active:bg-red-4";
			}
			return "border border-blue-6 border-solid text-white-6 bg-blue-6 hover:border-blue-5 hover:bg-blue-5  active:outline-4 active:outline-blue-1 active:outline active:border-blue-7 active:bg-blue-7 dark:border-blue-5 dark:text-black-6 dark:bg-blue-5 dark:hover:border-blue-6 dark:hover:bg-blue-6 dark:active:outline-blue-10 dark:active:border-blue-4 dark:active:bg-blue-4";
		case "secondary":
			if (disabled || isLoadling) {
				return "border border-black-3 border-solid text-black-4 bg-black-1 cursor-not-allowed	dark:border-white-3 dark:text-white-4 dark:bg-white-1";
			}
			if (isDanger) {
				return "border border-red-6 border-solid text-red-6 hover:border-red-5 hover:text-red-5  active:outline-4 active:outline-red-1 active:outline active:border-red-7 active:text-red-7 dark:border-red-5 dark:text-red-5 dark:bg-white-1 dark:hover:border-red-6 dark:hover:text-red-6 dark:hover:bg-white-1 dark:active:border-red-4 dark:active:text-red-4 dark:active:bg-white-1 dark:active:outline-red-10";
			}
			return "border border-black-6 border-solid text-black-6 hover:border-blue-5 hover:text-blue-5  active:outline-4 active:outline-blue-1 active:outline active:border-blue-7 active:text-blue-7 dark:border-blue-5 dark:text-blue-5 dark:bg-white-1 dark:hover:border-blue-6 dark:hover:text-blue-6 dark:hover:bg-white-1 dark:active:border-blue-4 dark:active:text-blue-4 dark:active:bg-white-1 dark:active:outline-blue-10";
		case "dashed":
			if (disabled || isLoadling) {
				return "border border-black-3 border-disable text-black-4 bg-black-1 cursor-not-allowed	dark:border-white-3 dark:text-white-4 dark:bg-white-1";
			}
			if (isDanger) {
				return "border border-red-6 border-dashed text-red-6 hover:border-red-5 hover:text-red-5  active:outline-4 active:outline-red-1 active:outline active:border-red-7 active:text-red-7 dark:border-red-5 dark:text-red-5 dark:bg-white-1 dark:hover:border-red-6 dark:hover:text-red-6 dark:hover:bg-white-1 dark:active:border-red-4 dark:active:text-red-4 dark:active:bg-white-1 dark:active:outline-red-10";
			}
			return "border border-black-6 border-dashed text-black-6 hover:border-blue-5 hover:text-blue-5  active:outline-4 active:outline-blue-1 active:outline active:border-blue-7 active:text-blue-7 dark:border-blue-5 dark:text-blue-5 dark:bg-white-1 dark:hover:border-blue-6 dark:hover:text-blue-6 dark:hover:bg-white-1 dark:active:border-blue-4 dark:active:text-blue-4 dark:active:bg-white-1 dark:active:outline-blue-10";
		case "text":
			if (disabled || isLoadling) {
				return "text-black-4 cursor-not-allowed	dark:text-white-4";
			}
			if (isDanger) {
				return "text-red-6 hover:text-red-5 hover:bg-red-1 active:text-red-7 active:bg-red-2 dark:text-red-5 dark:hover:bg-red-10 dark:active:bg-red-9";
			}
			return "text-black-6 hover:bg-black-1 active:bg-black-2 dark:text-white-6 dark:hover:bg-white-1 dark:active:bg-white-2";
		default:
			throw new Event(`不能将类型, 赋值给"primary"|"secondary"|"add"类型的as`);
	}
}
