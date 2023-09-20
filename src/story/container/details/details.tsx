import React, { memo } from "react";
import { WBHr } from "../../layout/hr/hr.tsx";

interface DetailsProp {
	children?: React.ReactNode;
	summary?: string;
	open?: boolean;
}

export const WBDetails = memo(function WBDetails({
	children,
	summary = "摘要",
	open = false,
}: DetailsProp) {
	return (
		<details
			open={open}
			className="border rounded border-black-3 dark:border-white-3 pointer"
		>
			<summary className="px-4 py-2 font-sans font-normal text-base text-black-6 dark:text-white-6 selection:bg-blue-1 dark:selection:bg-blue-10 truncate">
				{summary}
			</summary>
			<div>
				<WBHr></WBHr>
				<div className="px-4 py-2">{children}</div>
			</div>
		</details>
	);
});
