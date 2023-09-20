import { WBDetails } from "./details.tsx";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
	title: "容器/Details",
	component: WBDetails,
	tags: ["autodocs"],
	argTypes: {
		children: {
			table: {
				type: {
					summary: "ReactNode",
				},
			},
		},
		summary: {
			description: "摘要",
			table: {
				defaultValue: {
					summary: "摘要",
				},
			},
		},
		open: {
			description: "是否展开元素",
			table: {
				defaultValue: {
					summary: false,
				},
			},
		},
	},
} satisfies Meta<typeof WBDetails>;

type Story = StoryObj<typeof WBDetails>;
export const Details: Story = {
	args: {
		children: "展开后的内容, 可以是文字, 列表, 表格, 图片, 音视频...",
		summary: "摘要",
		open: true,
	},
};

export default meta;
