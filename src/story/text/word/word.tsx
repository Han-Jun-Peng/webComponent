import React, { type ReactNode, memo } from "react";
import "../../../tailwind.css";
import getStyleWithcanSelect from "../getStyleWithcanSelect.ts";

export interface WordProp {
	children?: ReactNode;
	canSelect?: boolean;
}

const WBWord = memo(function Word({ children, canSelect = true }: WordProp) {
	const clssName = ["inline", "font-mono", "bg-blue-1"];
	clssName.push(getStyleWithcanSelect(canSelect));

	return (
		<span className={clssName.join(" ")} aria-label="字母">
			{children}
		</span>
	);
});

export default WBWord;
