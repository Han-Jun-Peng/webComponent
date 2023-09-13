import React, { ReactNode, memo } from "react";

export interface SmallProp {
	children?: ReactNode;
}

export const WBSmall = memo(function WBSmall({ children }: SmallProp) {
	return (
		<small className="inline text-sm text-black-5 dark:text-white-5 selection:bg-blue-1 dark:selection:bg-blue-10">
			{children}
		</small>
	);
});
