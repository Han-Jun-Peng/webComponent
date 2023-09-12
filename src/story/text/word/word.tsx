import React, { type ReactNode, memo } from "react";

export interface WordProp {
	children?: ReactNode;
}

const WBWord = memo(function WBWord({ children }: WordProp) {
	return <p className="inline font-mono selection:bg-blue-1">{children}</p>;
});

export default WBWord;
