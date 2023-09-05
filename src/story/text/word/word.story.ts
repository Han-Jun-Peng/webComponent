import type { Meta, StoryObj } from "@storybook/react";
import Word from "./word.tsx";

const meta: Meta<typeof Word> = {
	title: "文本/字母",
	component: Word,
	tags: ["autodocs"],
	argTypes: {
		children: {
			control: "text",
			description: "文本内容",
			table: {
				type: {
					summary: "ReactNode",
				},
			},
		},
		canSelect: {
			control: "boolean",
			description: "用户是否可选中文本",
			table: {
				defaultValue: {
					summary: true,
				},
				type: {
					summary: "boolean",
				},
			},
		},
	},
};

type Story = StoryObj<typeof Word>;
export const Main: Story = {
	args: {
		children: "word",
		canSelect: true,
	},
};

export default meta;
