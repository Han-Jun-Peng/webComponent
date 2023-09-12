import type { Meta, StoryObj } from "@storybook/react";
import WBStrong from "./strong.tsx";

const meta = {
	title: "行内文本/加粗",
	component: WBStrong,
	tags: ["autodocs"],
	argTypes: {
		children: {
			control: "text",
			table: {
				type: {
					summary: "ReactNode",
				},
			},
		},

		fontWeight: {
			control: "radio",
			options: ["medium", "semibold"],
			description: "配置字体粗细: 1. 中文使用medium, 2. 英文使用semibold",
			table: {
				defaultValue: {
					summary: "medium",
				},
				type: {
					summary: "medium | semibold",
				},
			},
		},
	},
} satisfies Meta<typeof WBStrong>;

type Story = StoryObj<typeof WBStrong>;
export const Main: Story = {
	args: {
		children: "语义上的特别强调--加粗",
		fontWeight: "medium",
	},
};

export default meta;
