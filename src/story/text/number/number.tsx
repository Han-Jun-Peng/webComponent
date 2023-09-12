import React, { ReactNode, memo } from "react";

interface NumberProp {
	children?: ReactNode;
}

const WBNumber = memo(function WBNumber({ children }: NumberProp) {
	return <p className="inline font-mono selection:bg-blue-1">{children}</p>;
});

export default WBNumber;
