import React, { memo, useEffect, useRef } from "react";

interface DialogProp {
	children?: React.ReactNode;
	modalDialog?: boolean;
	open?: boolean;
	border?: boolean;
}

export const WBDialog = memo(function WBDialog({
	children,
	modalDialog = true,
	open = false,
	border = false,
}: DialogProp) {
	const ref = useRef(null);

	useEffect(() => {
		const dialog = ref.current as unknown as HTMLDialogElement;
		if (open) {
			if (modalDialog) {
				dialog.showModal();
			} else {
				dialog.show();
			}
		} else {
			dialog.close();
		}

		return () => {
			dialog.close();
		};
	}, [ref, open, modalDialog]);

	const className = [
		"iinline",
		"rounded",
		"px-4 py-2",
		"bg-black-1 dark:bg-white-1",
		"shadow dark:shadow-white-2",
	];

	switch (border) {
		case true:
			className.push("border border-black-3 dark:border-white-3");
			break;
		case false:
			break;
		default:
			throw new Event(`不能将${typeof border}类型, 赋值给boolean类型的border`);
	}

	return (
		<dialog ref={ref} className={className.join(" ")}>
			{children}
		</dialog>
	);
});
