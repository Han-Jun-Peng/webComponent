import React, { memo } from "react";

interface ButtonProp {
	children?: React.ReactNode;
	type?: "button" | "submit" | "reset";
	onClick?: (mouseEvent: React.MouseEvent) => void;
	onClickCapture?: (mouseEvent: React.MouseEvent) => void;
	as?: "primary" | "secondary" | "dashed" | "text";
	disabled?: boolean;
	isLoadling?: boolean;
	isDanger?: boolean;
}

const WBButton = memo(function WBButton({
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
		"px-2", // 内边距4px
		"transition-all",
	];

	className.push(getStyle(as, disabled, isDanger));

	return (
		<button
			type={type}
			onClick={onClick}
			onClickCapture={onClickCapture}
			tabIndex={0}
			disabled={disabled}
			className={className.join(" ")}
		>
			{isLoadling ? null : children}
		</button>
	);
});

export default WBButton;

function getStyle(
	as?: "primary" | "secondary" | "dashed" | "text",
	disabled?: boolean,
	isDanger?: boolean,
) {
	switch (as) {
		case "primary":
			if (disabled) {
				return "border border-black-3 border-solid text-black-4 bg-black-1";
			}
			if (isDanger) {
				return "border border-red-6 border-solid text-white-6 bg-red-6 hover:border-red-5 hover:bg-red-5  active:outline-4 active:outline-red-1 active:outline active:border-red-7 active:bg-red-7";
			}
			return "border border-blue-6 border-solid text-white-6 bg-blue-6 hover:border-blue-5 hover:bg-blue-5  active:outline-4 active:outline-blue-1 active:outline active:border-blue-7 active:bg-blue-7";
		case "secondary":
			if (disabled) {
				return "border border-black-3 border-solid text-black-4 bg-black-1";
			}
			if (isDanger) {
				return "border border-red-6 border-solid text-red-6 hover:border-red-5 hover:text-red-5  active:outline-4 active:outline-red-1 active:outline active:border-red-7 active:text-red-7";
			}
			return "border border-black-6 border-solid text-black-6 hover:border-blue-5 hover:text-blue-5  active:outline-4 active:outline-blue-1 active:outline active:border-blue-7 active:text-blue-7";
		case "dashed":
			if (disabled) {
				return "border border-black-3 border-disable text-black-4 bg-black-1";
			}
			if (isDanger) {
				return "border border-red-6 border-dashed text-red-6 hover:border-red-5 hover:text-red-5  active:outline-4 active:outline-red-1 active:outline active:border-red-7 active:text-red-7";
			}
			return "border border-black-6 border-dashed text-black-6 hover:border-blue-5 hover:text-blue-5  active:outline-4 active:outline-blue-1 active:outline active:border-blue-7 active:text-blue-7";
		case "text":
			if (disabled) {
				return "text-black-4";
			}
			if (isDanger) {
				return "text-red-6 hover:text-red-5 hover:bg-red-1 active:text-red-7 active:bg-red-2";
			}
			return "text-black-6 hover:bg-black-1 active:bg-black-2";
		default:
			throw new Event(`不能将类型, 赋值给"primary"|"secondary"|"add"类型的as`);
	}
}