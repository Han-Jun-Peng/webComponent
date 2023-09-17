import React, { ReactNode, memo } from "react";

export interface EmProp {
	children?: ReactNode;
}

export const WBEm = memo(function WBEm({ children }: EmProp) {
	return (
		<em className="inline italic text-black-6 dark:text-white-6 selection:bg-blue-1 dark:selection:bg-blue-10">
			{children}
		</em>
	);
});
