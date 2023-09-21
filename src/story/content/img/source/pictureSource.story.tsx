import { WBPictureSource } from "./pictureSource.tsx";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
	title: "内容/图片/PictureSource",
	component: WBPictureSource,
	tags: ["autodocs"],
	argTypes: {
		srcSet: {
			description: "配置图片的资源地址",
		},
		mime: {
			description: "配置图片的资源类型",
			table: {
				defaultValue: {
					summary: "image/webp",
				},
			},
		},
		mediaMinWidth: {
			description: "配置媒体查询min-width的值(像素)",
		},
	},
} satisfies Meta<typeof WBPictureSource>;

type Story = StoryObj<typeof WBPictureSource>;
export const PictureSource: Story = {
	args: {
		srcSet: "",
		mime: "image/webp",
		mediaMinWidth: 320,
	},
};

export default meta;
