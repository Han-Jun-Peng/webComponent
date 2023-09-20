import React, { ReactNode, memo } from "react";
import { WBFlex } from "../../layout/flex/flex.tsx";

interface FigureProp {
	children: ReactNode;
	figcaption?: string;
	align?: "start" | "center" | "end";
	border?: boolean;
	padding?: boolean;
}

export const WBFigure = memo(function WBFigure({
	children,
	figcaption,
	align = "start",
	border = false,
	padding = false,
}: FigureProp) {
	const className = ["rounded"];
	const figcaptionClassName = [
		"w-80 block font-sans font-normal text-sm text-black-5 dark:text-white-5 selection:bg-blue-1 dark:selection:bg-blue-10 truncate",
	];

	switch (align) {
		case "start":
			figcaptionClassName.push("text-start");
			break;
		case "center":
			figcaptionClassName.push("text-center");
			break;
		case "end":
			figcaptionClassName.push("text-end");
			break;
		default:
			throw new Event(
				`不能将${typeof align}类型, 赋值给"start" | "center" | "end"类型的align`,
			);
	}

	if (border) {
		if (typeof border !== "boolean") {
			throw new Event(`不能将${typeof border}类型, 赋值给boolean类型的border`);
		}
		className.push("border border-black-3 dark:border-white-3");
	}

	if (padding) {
		if (typeof padding !== "boolean") {
			throw new Event(
				`不能将${typeof padding}类型, 赋值给boolean类型的padding`,
			);
		}
		className.push("px-4 pt-2 pb-1");
	}

	return (
		<div className="w-full">
			<WBFlex direction="horizontal" alignX="center">
				<figure className={className.join(" ")}>
					<WBFlex direction="vertical" gap="zero" alignX="center">
						<div className="w-full">{children}</div>
						{figcaption ? (
							<figcaption className={figcaptionClassName.join(" ")}>
								{figcaption}
							</figcaption>
						) : null}
					</WBFlex>
				</figure>
			</WBFlex>
		</div>
	);
});
