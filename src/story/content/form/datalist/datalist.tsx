import React, { memo } from "react";
import { WBUl } from "../../../container/ul/ul.tsx";
import { WBLi } from "../../../container/li/li.tsx";
import { WBP } from "../../text/p/p.tsx";

interface Datalistprop {
	option: { id: string; value: string }[];
	onClick: (mouseEvent: React.MouseEvent) => void;
}

export const WBDatalist = memo(function WBDatalist({
	option,
	onClick,
}: Datalistprop) {
	if (!option) {
		throw new Event("option不能为空");
	}

	if (!onClick) {
		throw new Event("onClick不能为空");
	}
	return (
		<div className="inline-block w-full border border-t-0 border-black-3 dark:border-white-3 rounded rounded-t-none bg-black-1 dark:bg-white-1 shadow">
			<WBUl direction="vertical" gap="zero">
				{option.map((item) => {
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
