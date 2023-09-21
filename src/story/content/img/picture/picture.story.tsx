import { WBPicture } from "./picture.tsx";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { WBPictureSource } from "../source/pictureSource.tsx";
import img720 from "./720_480.png";
import img1080 from "./1080_720.png";
import img1620 from "./1620_1080.png";

const meta = {
	title: "内容/图片/Picture",
	component: WBPicture,
	tags: ["autodocs"],
	argTypes: {
		children: {
			description: "配置0个或多个Source",
		},
		width: {
			description: "配置图片的宽度(像素)",
		},
		height: {
			description: "配置图片的高度(像素)",
		},
		src: {
			description: "配置图片的资源路径",
		},
		srcSet: {
			description: "配置固定尺寸图片的资源地址(普清, 高清, 2k, 4k...)",
		},
		alt: {
			description: "配置图片加载失败时的文字介绍",
			table: {
				defaultValue: {
					summary: "图片",
				},
			},
		},
		useMap: {
			description: "配置可被热点图关联的#id",
		},
		objectFit: {
			description: "配置图片缩放策略",
			table: {
				defaultValue: {
					summary: "cover",
				},
			},
		},
	},
} satisfies Meta<typeof WBPicture>;

export default meta;

type Story = StoryObj<typeof WBPicture>;
export const Picture: Story = {
	args: {
		src: img720,
		alt: "图片",
		objectFit: "cover",
	},
};

const children = (
	<>
		<WBPictureSource srcSet={img1620} mime="image/png" mediaMinWidth={1620} />
		<WBPictureSource srcSet={img1080} mime="image/png" mediaMinWidth={1080} />
		<WBPictureSource srcSet={img720} mime="image/png" mediaMinWidth={720} />
	</>
);
export const ResponsivePicture: Story = {
	args: {
		children: children,
		src: img720,
		alt: "图片",
		objectFit: "cover",
	},
};

export const ResolutionPicture: Story = {
	args: {
		width: 720,
		height: 480,
		src: img1080,
		srcSet: [
			{
				src: img720,
				width: 720,
			},
			{
				src: img1080,
				width: 1080,
			},
			{
				src: img1620,
				width: 1620,
			},
		],
		alt: "图片",
		objectFit: "cover",
	},
};

export const MapPicture: Story = {
	args: {
		src: img720,
		alt: "图片",
		useMap: "#mapImage",
		objectFit: "cover",
	},
};
