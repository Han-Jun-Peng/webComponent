import React, { ReactNode, memo } from "react";

export interface H1Prop {
	children?: ReactNode;
}

export const WBH1 = memo(function WBH1({ children }: H1Prop) {
	return (
		<h1 className="font-sans font-medium text-xl text-black-6 dark:text-white-6 truncate selection:bg-blue-1 dark:selection:bg-blue-10">
			{children}
		</h1>
	);
});
