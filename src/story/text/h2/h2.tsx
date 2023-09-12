import React, { ReactNode, memo } from "react";

interface H2Prop {
	children?: ReactNode;
}

const WBH2 = memo(function WBH2({ children }: H2Prop) {
	return (
		<h2 className="font-sans font-normal text-xl text-black-6 dark:text-white-6 truncate selection:bg-blue-1">
			{children}
		</h2>
	);
});

export default WBH2;
