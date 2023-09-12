import React, { ReactNode, memo } from "react";

interface SmallProp {
	children?: ReactNode;
}

const WBSmall = memo(function WBSmall({ children }: SmallProp) {
	return (
		<small className="inline text-sm selection:bg-blue-1">{children}</small>
	);
});

export default WBSmall;
