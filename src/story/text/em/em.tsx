import React, { ReactNode, memo } from "react";

interface EmProp {
	children?: ReactNode;
}

const WBEm = memo(function WBEm({ children }: EmProp) {
	return <em className="inline italic selection:bg-blue-1">{children}</em>;
});

export default WBEm;
