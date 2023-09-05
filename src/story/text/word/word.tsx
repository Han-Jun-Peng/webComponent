import React from "react";
import { memo } from "react";
import getStyleWithcanSelect from "../getStyleWithcanSelect.ts";

interface Prop {
	children?: React.ReactNode;
	canSelect?: boolean;
}

const Word = memo(function Word({ children, canSelect = true }: Prop) {
	const clssName = ["inline", "font-mono"];
	clssName.push(getStyleWithcanSelect(canSelect));

	return (
		<span className={clssName.join(" ")} aria-label="字母">
			{children}
		</span>
	);
});

export default Word;
