import React, { memo } from "react";

interface PictureProp {
	children?: React.ReactNode;
	width?: number;
	height?: number;
	src: string;
	srcSet?: { src: string; width?: number; pixel?: number }[];
	alt?: string;
	useMap?: string;
	objectFit?: "none" | "fill" | "cover" | "contain";
}

export const WBPicture = memo(function WBPicture({
	children,
	width,
	height,
	src,
	srcSet,
	alt = "图片",
	useMap,
	objectFit = "cover",
}: PictureProp) {
	if (width) {
		if (typeof width !== "number") {
			throw new Event(`不能将${typeof width}类型, 赋值给number类型的width`);
		}
	}

	if (height) {
		if (typeof height !== "number") {
			throw new Event(`不能将${typeof height}类型, 赋值给number类型的height`);
		}
	}

	if (src) {
		if (typeof src !== "string") {
			throw new Event(`不能将${typeof src}类型, 赋值给string类型的src`);
		}
	}

	let srcSetOrign: string | undefined;
	if (srcSet) {
		srcSetOrign = srcSet
			.map((item) => {
				if (item.width) {
					if (typeof item.width !== "number") {
						throw new Event(
							`不能将${typeof item.width}类型, 赋值给number类型的srcSet[x].width`,
						);
					}
					return `${item.src} ${item.width}w,`;
				}

				if (item.pixel) {
					if (typeof item.pixel !== "number") {
						throw new Event(
							`不能将${typeof item.pixel}类型, 赋值给number类型的srcSet[x].pixel`,
						);
					}
					return `${item.src} ${item.pixel}x,`;
				}
				return `${item.src},`;
			})
			.join(" ");
	}

	if (alt) {
		if (typeof alt !== "string") {
			throw new Event(`不能将${typeof alt}类型, 赋值给string类型的alt`);
		}
	}

	let useMapId = useMap;
	if (useMap) {
		if (typeof useMap !== "string") {
			throw new Event(`不能将${typeof useMap}类型, 赋值给string类型的useMap`);
		}
		if (useMap[0] !== "#") {
			useMapId = "#" + useMap;
		} else {
			useMapId = useMap;
		}
	}

	const className: string[] = [];
	switch (objectFit) {
		case "none":
			className.push("object-none");
			break;
		case "fill":
			className.push("object-fill");
			break;
		case "cover":
			className.push("object-cover");
			break;
		case "contain":
			className.push("object-contain");
			break;
		default:
			throw new Event(
				`不能将${typeof objectFit}类型, 赋值给"none" | "fill" | "cover" | "contain"类型的objectFit`,
			);
	}

	return (
		<picture>
			{children}
			<img
				role="img"
				src={src}
				srcSet={srcSetOrign}
				alt={alt}
				width={width}
				height={height}
				referrerPolicy="strict-origin-when-cross-origin"
				crossOrigin="anonymous"
				decoding="auto"
				loading="lazy"
				useMap={useMapId}
				className={className.join(" ")}
			/>
		</picture>
	);
});
