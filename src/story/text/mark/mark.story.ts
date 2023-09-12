import WBMark from "./mark.tsx";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
	title: "行内文本/标记",
	component: WBMark,
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
	},
} satisfies Meta<typeof WBMark>;

type Story = StoryObj<typeof WBMark>;
export const Main: Story = {
	args: {
		children: "语义上表示被标记文本的上下文联系",
	},
};

export default meta;
