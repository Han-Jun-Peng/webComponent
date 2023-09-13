import React, { ReactNode, memo } from "react";

export interface H2Prop {
	children?: ReactNode;
}

export const WBH2 = memo(function WBH2({ children }: H2Prop) {
	return (
		<h2 className="font-sans font-normal text-xl text-black-6 dark:text-white-6 truncate selection:bg-blue-1 dark:selection:bg-blue-10">
			{children}
		</h2>
	);
});
