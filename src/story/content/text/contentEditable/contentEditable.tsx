import React, { ReactNode, memo, useCallback, useState } from "react";

export interface ContentEditableProp {
	children?: ReactNode;
	contentEditable?: boolean;
	setChildren?: (children: ReactNode) => void;
}

export const WBContentEditable = memo(function WBContentEditable({
	children,
	contentEditable = false,
	setChildren,
}: ContentEditableProp) {
	const [value, setValue] = useState(children);

	const handlerBlur = useCallback(
		(fouceEvent: React.FocusEvent) => {
			const span = fouceEvent.target as HTMLSpanElement;
			setValue(span.innerText);

			if (setChildren) {
				setChildren(span.innerText);
			}
		},
		[setValue, setChildren],
	);

	return (
		<span
			contentEditable={contentEditable}
			inputMode="text"
			onBlur={contentEditable ? handlerBlur : undefined}
			suppressContentEditableWarning
		>
			{value}
		</span>
	);
});
