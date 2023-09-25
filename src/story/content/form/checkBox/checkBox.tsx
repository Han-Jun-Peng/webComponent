import React, { memo, useCallback } from "react";
import { WBP } from "../../text/p/p.tsx";
import { WBFlex } from "../../../layout/flex/flex.tsx";

interface CheckBoxProp {
	children?: React.ReactNode;
	name: string;
	value: string;
	required?: boolean;
	disabled?: boolean;
	checked?: boolean;
	onChange?: (changeEvent: React.ChangeEvent) => void;
}

export const WBCheckBox = memo(function WBCheckBox({
	children = "复选",
	name,
	value,
	required = false,
	disabled = false,
	checked = false,
	onChange,
}: CheckBoxProp) {
	if (name) {
		if (typeof name !== "string") {
			throw new Event(`不能将${typeof name}类型, 赋值给string类型的name`);
		}
	} else {
		throw new Event(`缺少必要属性name`);
	}

	if (value) {
		if (typeof value !== "string") {
			throw new Event(`不能将${typeof value}类型, 赋值给string类型的value`);
		}
	} else {
		throw new Event(`缺少必要属性value`);
	}

	if (required) {
		if (typeof required !== "boolean") {
			throw new Event(
				`不能将${typeof required}类型, 赋值给boolean类型的required`,
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

	if (checked) {
		if (typeof checked !== "boolean") {
			throw new Event(
				`不能将${typeof checked}类型, 赋值给boolean类型的checked`,
			);
		}
	}

	if (onChange) {
		if (typeof onChange !== "function") {
			throw new Event(
				`不能将${typeof onChange}类型, 赋值给boolean类型的onChange`,
			);
		}
	}

	const handlerKeyDown = useCallback((keyboardEvent: React.KeyboardEvent) => {
		keyboardEvent.stopPropagation();
		if (keyboardEvent.key == "Enter") {
			const input = keyboardEvent.target as HTMLInputElement;
			input.click();
		}
	}, []);

	return (
		<label className="inline-block">
			<WBFlex direction="horizontal" alignY="center" gap="small">
				<input
					type="checkbox"
					name={name}
					value={value}
					required={required}
					disabled={disabled}
					checked={checked == false ? undefined : checked}
					tabIndex={0}
					className="focus:outline-2 focus:outline-blue-2 dark:focus:outline-blue-8 focus:outline-dashed focus:outline-offset-2 accent-blue-2 border border-black-3 dark:border-white-3"
					onKeyDown={handlerKeyDown}
					onChange={onChange}
				/>
				<WBP noWarp>{children}</WBP>
			</WBFlex>
		</label>
	);
});
