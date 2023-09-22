import React, { type ReactNode, memo } from "react";

export interface WordProp {
	children?: ReactNode;
}

export const WBWord = memo(function WBWord({ children }: WordProp) {
	return (
		<span className="inline font-mono text-black-6 dark:text-white-6 selection:bg-blue-1 dark:selection:bg-blue-10">
			{children}
		</span>
	);
});
