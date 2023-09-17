import { WBMark } from "./mark.tsx";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
	title: "内容/行内文本/Mark",
	component: WBMark,
	tags: ["autodocs"],
	argTypes: {
		children: {
			table: {
				type: {
					summary: "ReactNode",
				},
			},
		},
	},
} satisfies Meta<typeof WBMark>;

type Story = StoryObj<typeof WBMark>;
export const Mark: Story = {
	args: {
		children: "标记, 背景高亮",
	},
};

export default meta;
