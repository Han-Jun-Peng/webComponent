import React, { memo } from "react";

interface PictureSourceProp {
	srcSet: string;
	mime?: "image/webp" | "image/svg+xml" | "image/png" | "image/jpeg";
	mediaMinWidth?: number;
}

export const WBPictureSource = memo(function WBPictureSource({
	srcSet,
	mime = "image/webp",
	mediaMinWidth,
}: PictureSourceProp) {
	if (srcSet) {
		if (typeof srcSet !== "string") {
			throw new Event(`不能将${typeof srcSet}类型, 赋值给string类型的srcSet`);
		}
	}

	if (mime) {
		if (
			mime !== "image/webp" &&
			mime !== "image/svg+xml" &&
			mime !== "image/png" &&
			mime !== "image/jpeg"
		) {
			throw new Event(
				`不能将${typeof mime}类型, 赋值给"image/webp" | "image/svg+xml" | "image/png" | "image/jpeg"类型的mime`,
			);
		}
	}

	let media;
	if (mediaMinWidth) {
		if (typeof mediaMinWidth !== "number") {
			throw new Event(
				`不能将${typeof mediaMinWidth}类型, 赋值给number类型的mediaMinWidth`,
			);
		}
		media = `(min-width: ${mediaMinWidth}px)`;
	}

	return <source type={mime} srcSet={srcSet} media={media} />;
});
