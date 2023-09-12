import React, { ReactNode, memo } from "react";

interface H3Prop {
	children?: ReactNode;
}

const WBH3 = memo(function WBH3({ children }: H3Prop) {
	return (
		<h3 className="font-sans font-normal text-base text-black-6 dark:text-white-6 truncate selection:bg-blue-1">
			{children}
		</h3>
	);
});

export default WBH3;
