import React, { ReactNode, memo } from "react";

interface H1Prop {
	children?: ReactNode;
}

const WBH1 = memo(function WBH1({ children }: H1Prop) {
	return (
		<h1 className="font-sans font-medium text-xl text-black-6 dark:text-white-6 truncate selection:bg-blue-1">
			{children}
		</h1>
	);
});

export default WBH1;
