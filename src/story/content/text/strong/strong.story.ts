import type { Meta, StoryObj } from "@storybook/react";
import { WBStrong } from "./strong.tsx";

const meta = {
	title: "内容/行内文本/Strong",
	component: WBStrong,
	tags: ["autodocs"],
	argTypes: {
		children: {
			table: {
				type: {
					summary: "ReactNode",
				},
			},
		},

		fontWeight: {
			description: "配置字体粗细: 1. 中文使用medium, 2. 英文使用semibold",
			table: {
				defaultValue: {
					summary: "medium",
				},
			},
		},
	},
} satisfies Meta<typeof WBStrong>;

type Story = StoryObj<typeof WBStrong>;
export const Strong: Story = {
	args: {
		children: "加粗强调",
		fontWeight: "medium",
	},
};

export default meta;
