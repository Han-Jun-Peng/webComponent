import React, { memo, useCallback, useState } from "react";
import { WBPostiton } from "../../../layout/position/position.tsx";
import { WBSmall } from "../../text/small/small.tsx";
import { WBP } from "../../text/p/p.tsx";

interface TextProp {
	children?: React.ReactNode;
	id?: string;
	list?: string;
	name: string;
	value?: string;
	width?: number;
	minlength?: number;
	maxlength?: number;
	pattern?: string;
	required?: boolean;
	readonly?: boolean;
	disabled?: boolean;
	onChange?: (changeEvent: React.ChangeEvent) => void;
	placeholder?: string;
	requiredFailWarning?: string;
	patternFailWarning?: string;
}

export const WBText = memo(function WBText({
	children,
	id,
	list,
	name,
	value,
	width = 320,
	minlength = 0,
	maxlength = 20,
	pattern,
	required = false,
	readonly = false,
	disabled = false,
	onChange,
	placeholder = "请输入",
	requiredFailWarning = "内容不能为空",
	patternFailWarning = "未通过正则验证",
}: TextProp) {
	if (id) {
		if (typeof id !== "string") {
			throw new Event(`不能将${typeof id}类型, 赋值给string类型的id`);
		}
	}

	if (list) {
		if (typeof list !== "string") {
			throw new Event(`不能将${typeof list}类型, 赋值给string类型的list`);
		}
	}

	if (name) {
		if (typeof name !== "string") {
			throw new Event(`不能将${typeof name}类型, 赋值给string类型的name`);
		}
	} else {
		throw new Event(`name未赋值`);
	}

	if (value) {
		if (typeof value !== "string") {
			throw new Event(`不能将${typeof value}类型, 赋值给string类型的value`);
		}
	}

	if (width) {
		if (typeof width !== "number") {
			throw new Event(`不能将${typeof width}类型, 赋值给number类型的width`);
		}
	}

	if (minlength) {
		if (typeof minlength !== "number") {
			throw new Event(
				`不能将${typeof minlength}类型, 赋值给number类型的minlength`,
			);
		}
	}

	if (maxlength) {
		if (typeof maxlength !== "number") {
			throw new Event(
				`不能将${typeof maxlength}类型, 赋值给number类型的maxlength`,
			);
		}
	}

	if (pattern) {
		if (typeof pattern !== "string") {
			throw new Event(`不能将${typeof pattern}类型, 赋值给string类型的pattern`);
		}
	}

	if (required) {
		if (typeof required !== "boolean") {
			throw new Event(
				`不能将${typeof required}类型, 赋值给boolean类型的required`,
			);
		}
	}

	if (readonly) {
		if (typeof readonly !== "boolean") {
			throw new Event(
				`不能将${typeof readonly}类型, 赋值给boolean类型的readonly`,
			);
		}
	}

	if (disabled) {
		if (typeof disabled !== "boolean") {
			throw new Event(
				`不能将${typeof disabled}类型, 赋值给boolean类型的disabled`,
			);
		}
	}

	if (placeholder) {
		if (typeof placeholder !== "string") {
			throw new Event(
				`不能将${typeof placeholder}类型, 赋值给string类型的placeholder`,
			);
		}
	}

	if (requiredFailWarning) {
		if (typeof requiredFailWarning !== "string") {
			throw new Event(
				`不能将${typeof requiredFailWarning}类型, 赋值给string类型的requiredFailWarning`,
			);
		}
	}

	if (patternFailWarning) {
		if (typeof patternFailWarning !== "string") {
			throw new Event(
				`不能将${typeof patternFailWarning}类型, 赋值给string类型的patternFailWarning`,
			);
		}
	}

	// 失去焦点, 验证输入内容
	const [patternResult, setPatternResult] = useState("");
	const handlerInput = useCallback(
		(formEvent: React.FormEvent) => {
			const input = formEvent.currentTarget as HTMLInputElement;
			const validityState = input.validity;

			// 输入的内容为空时
			if (validityState.valueMissing) {
				input.setCustomValidity(requiredFailWarning);
				setPatternResult(input.validationMessage);
				return;
			}

			// 未通过正则验证时
			if (validityState.patternMismatch) {
				input.setCustomValidity(patternFailWarning);
				setPatternResult(input.validationMessage);
				return;
			}

			// 通过验证
			input.setCustomValidity("");
			setPatternResult(input.validationMessage);
		},
		[setPatternResult, requiredFailWarning, patternFailWarning],
	);

	const className = [
		"inline-block px-4 py-2 border border-black-3 dark:border-white-3 rounded invalid:border-red-6 peer",
	];

	if (children) {
		className.push(" focus:rounded-b-none");
	}

	return (
		<WBPostiton position="relative">
			<input
				type="text"
				id={id}
				name={name}
				value={value ? value : undefined}
				minLength={minlength}
				maxLength={maxlength}
				size={20}
				placeholder={placeholder}
				pattern={pattern ? pattern : undefined}
				required={required}
				readOnly={readonly}
				disabled={disabled}
				tabIndex={0}
				onChange={onChange}
				onInput={handlerInput}
				className={className.join(" first-letter:")}
				style={{ width: width + "px" }}
			/>
			<WBPostiton position="absolute" left="start-inside" top="end-outside">
				<WBP>
					<WBSmall>
						<span aria-live="polite" className=" text-red-6">
							{patternResult}
						</span>
					</WBSmall>
				</WBP>
			</WBPostiton>
			<WBPostiton
				position="absolute"
				left="start-inside"
				top="end-outside"
				display="none"
				displayHover="none"
				displayFocus="block"
			>
				{children}
			</WBPostiton>
		</WBPostiton>
	);
});
