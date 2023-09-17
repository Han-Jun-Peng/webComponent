import React, { ReactNode, memo } from "react";

export interface NumberProp {
	children?: ReactNode;
}

export const WBNumber = memo(function WBNumber({ children }: NumberProp) {
	return (
		<p className="inline font-mono text-black-6 dark:text-white-6 selection:bg-blue-1 dark:selection:bg-blue-10">
			{children}
		</p>
	);
});
