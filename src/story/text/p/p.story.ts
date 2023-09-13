import { WBP } from "./p.tsx";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
	title: "块文本/P",
	component: WBP,
	tags: ["autodocs"],
	argTypes: {
		children: {
			table: {
				type: {
					summary: "ReactNode",
				},
			},
		},
		canSelect: {
			description: "用户是否可选中文本",
			table: {
				defaultValue: {
					summary: true,
				},
			},
		},
		isRetraction: {
			description: "是否缩进文本",
			table: {
				defaultValue: {
					summary: false,
				},
			},
		},
	},
} satisfies Meta<typeof WBP>;

type Story = StoryObj<typeof WBP>;
export const Main: Story = {
	args: {
		children: "这是一段文字",
		canSelect: true,
		isRetraction: false,
	},
};

export default meta;
