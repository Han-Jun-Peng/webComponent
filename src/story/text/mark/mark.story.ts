import { WBMark } from "./mark.tsx";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
	title: "行内文本/标记",
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
export const Main: Story = {
	args: {
		children: "背景高亮",
	},
};

export default meta;
