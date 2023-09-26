import React, { memo } from "react";
import { WBUl } from "../../../container/ul/ul.tsx";
import { WBLi } from "../../../container/li/li.tsx";
import { WBP } from "../../text/p/p.tsx";
import { WBMark } from "../../text/mark/mark.tsx";

interface Datalistprop {
	option: { id: string; value: string }[];
	onClick: (mouseEvent: React.MouseEvent) => void;
	inputValue?: string;
}

export const WBDatalist = memo(function WBDatalist({
	option,
	onClick,
	inputValue,
}: Datalistprop) {
	if (!option) {
		throw new Event("option不能为空");
	}

	if (!onClick) {
		throw new Event("onClick不能为空");
	}

	let filterOption = option;
	if (inputValue) {
		if (typeof inputValue !== "string") {
			throw new Event(
				`不能将${typeof inputValue}类型, 赋值给"string"类型的inputValue`,
			);
		}

		filterOption = option.filter((item) => {
			if (item.value.startsWith(inputValue)) {
				return item;
			}
			return;
		});
	}

	return (
		<div className="inline-block w-full border border-t-0 border-black-3 dark:border-white-3 rounded rounded-t-none bg-black-1 dark:bg-white-1 shadow">
			<WBUl direction="vertical" gap="zero">
				{filterOption.map((item) => {
					if (inputValue) {
						return (
							<WBLi
								key={item.id}
								id={item.id}
								dataId={item.id}
								dataValue={item.value}
								onClick={onClick}
							>
								<WBP>
									<WBMark>{inputValue}</WBMark>
									{item.value.slice(inputValue.length)}
								</WBP>
							</WBLi>
						);
					}
					return (
						<WBLi
							key={item.id}
							id={item.id}
							dataId={item.id}
							dataValue={item.value}
							onClick={onClick}
						>
							<WBP>{item.value}</WBP>
						</WBLi>
					);
				})}
			</WBUl>
		</div>
	);
});
