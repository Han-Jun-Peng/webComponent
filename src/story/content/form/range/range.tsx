import React, { memo, useCallback, useState } from "react";
import { WBP } from "../../text/p/p.tsx";
import { WBNumber } from "../../text/number/number.tsx";

type fn = (v: number) => number;

interface RangeProp {
	width?: number;
	height?: number;
	name?: string;
	value?: number;
	setValue: (value: number | fn) => void;
	min?: number;
	max?: number;
	step?: number;
	disabled?: boolean;
}

export const WBRange = memo(function WBRange({
	width = 320,
	height = 8,
	min = 0,
	max = 100,
	step = 1,
	name,
	value = 50,
	disabled = false,
	setValue = () => {},
}: RangeProp) {
	if (width) {
		if (typeof width !== "number") {
			throw new Event(`不能将${typeof width}类型, 赋值给number类型的width`);
		}
		if (width < 0) {
			throw new Event(`width的值不能小于0`);
		}
	}

	if (height) {
		if (typeof height !== "number") {
			throw new Event(`不能将${typeof height}类型, 赋值给number类型的height`);
		}
		if (height < 0) {
			throw new Event(`height的值不能小于0`);
		}
	}

	if (name) {
		if (typeof name !== "string") {
			throw new Event(`不能将${typeof name}类型, 赋值给string类型的name`);
		}
	}

	if (min) {
		if (typeof min !== "number") {
			throw new Event(`不能将${typeof min}类型, 赋值给number类型的min`);
		}
		if (min < 0) {
			throw new Event(`min的值不能小于0`);
		}
	}

	if (max) {
		if (typeof max !== "number") {
			throw new Event(`不能将${typeof max}类型, 赋值给number类型的max`);
		}
		if (max < 0) {
			throw new Event(`max的值不能小于0`);
		}

		if (min > max) {
			throw new Event(`min的值不能大于max`);
		}
	}

	let validStep = step;
	if (step) {
		if (typeof step !== "number") {
			throw new Event(`不能将${typeof step}类型, 赋值给number类型的step`);
		}

		if (step < 0) {
			throw new Event(`step的值不能小于0`);
		}

		if (step > max) {
			validStep = max;
		}
	}

	let validValue = value;
	if (value) {
		if (typeof value !== "number") {
			throw new Event(`不能将${typeof value}类型, 赋值给number类型的value`);
		}

		if (value < 0) {
			throw new Event(`value的值不能小于0`);
		}

		if (value < min) {
			validValue = min;
		}

		if (value > max) {
			validValue = max;
		}
	}

	if (setValue) {
		if (typeof setValue !== "function") {
			throw new Event(
				`不能将${typeof setValue}类型, 赋值给function类型的setValue`,
			);
		}
	} else {
		throw new Event("setValue未赋值");
	}

	// 按键事件
	const handlerKeyDown = useCallback(
		(keyboardEvent: React.KeyboardEvent) => {
			keyboardEvent.stopPropagation();

			switch (keyboardEvent.key) {
				case "ArrowLeft":
					if (validValue - validStep < min) {
						setValue(min);
						break;
					}
					setValue(validValue - validStep);
					break;
				case "ArrowUp":
					if (validValue - validStep < min) {
						setValue(min);
						break;
					}
					setValue(validValue - validStep);
					break;
				case "ArrowRight":
					if (validValue + validStep > max) {
						setValue(max);
						break;
					}
					setValue(validValue + validStep);
					break;
				case "ArrowDown":
					if (validValue + validStep > max) {
						setValue(max);
						break;
					}
					setValue(validValue + validStep);
					break;
				case "Home":
					setValue(min);
					break;
				case "End":
					setValue(max);
					break;
				case "PageUp":
					if (validValue - validStep * 10 < min) {
						setValue(min);
						break;
					}
					setValue(validValue - validStep * 10);
					break;
				case "PageDown":
					if (validValue + validStep * 10 > max) {
						setValue(max);
						break;
					}
					setValue(validValue + validStep * 10);
					break;
				default:
					break;
			}
		},
		[value, setValue],
	);

	// 点击似事件
	const handlerClick = useCallback(
		(mouseEvent: React.MouseEvent) => {
			mouseEvent.stopPropagation();
			const div = mouseEvent.currentTarget as HTMLDivElement;
			const left = div.getBoundingClientRect().left;
			const mouseClickWidth = mouseEvent.clientX - left;

			let newValue = (mouseClickWidth * (max - min)) / width + min;
			newValue = newValue - (newValue % 1);
			setValue(newValue - (newValue % step));
		},
		[min, max, width, step, setValue],
	);

	// 鼠标移动事件
	const [slideCanMove, setSlideCanMove] = useState(false);
	const handlerMouseMove = useCallback(
		(mouseEvent: React.MouseEvent) => {
			mouseEvent.stopPropagation();
			setValue((v) => v + mouseEvent.movementX);
		},
		[value, setValue],
	);

	// 鼠标按下
	const handlerMouseDown = useCallback(
		(mouseEvent: React.MouseEvent) => {
			mouseEvent.stopPropagation();
			setSlideCanMove(true);
		},
		[setSlideCanMove],
	);

	// 鼠标释放
	const handlerMouseUp = useCallback(
		(mouseEvent: React.MouseEvent) => {
			mouseEvent.stopPropagation();
			setSlideCanMove(false);
		},
		[setSlideCanMove],
	);

	return (
		<div
			className="inline-block py-1"
			onMouseDown={handlerMouseDown}
			onMouseUp={handlerMouseUp}
			onMouseMove={slideCanMove ? handlerMouseMove : undefined}
		>
			<input
				type="range"
				name={name}
				value={validValue}
				min={min}
				max={max}
				step={validStep}
				className="absolute -left-[10000px] top-auto w-0 h-0 hidden"
				onChange={() => {}}
				tabIndex={-1}
				disabled={disabled}
			/>

			<div
				tabIndex={0}
				className="border bodrer-black-3 dark:border-white-3 rounded bg-black-1 dark:bg-white-1 cursor-pointer focus:outline-2 focus:outline-blue-2 dark:focus:outline-blue-8 focus:outline-dashed focus:outline-offset-2"
				style={{
					width: width + "px",
					height: height + "px",
				}}
				onKeyDown={handlerKeyDown}
				onClick={handlerClick}
			>
				<div
					className="relative h-full rounded bg-blue-1 dark:bg-blue-10 "
					style={{
						width: `${(width * (validValue - min)) / (max - min)}px`,
					}}
				>
					<span
						className="peer absolute right-0 translate-x-1/2 top-1/2 -translate-y-1/2 inline-block border bodrer-black-3 dark:border-white-3 rounded-full bg-blue-3 dark:bg-blue-7 hover:bg-blue-2 active:bg-blue-4 dark:hover:bg-blue-8 dark:active:bg-blue-6"
						style={{ width: height * 2 + "px", height: height * 2 + "px" }}
					></span>
					<div className="hidden peer-hover:inline-block absolute right-0 translate-x-1/2 -top-10 border bodrer-black-3 px-4 dark:border-white-3 rounded bg-blue-5 dark:bg-blue-6 opacity-75">
						<WBP noWarp>
							<WBNumber>{validValue}</WBNumber>
						</WBP>
					</div>
				</div>
			</div>
		</div>
	);
});
