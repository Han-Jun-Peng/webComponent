import { WBSmall } from "./small.tsx";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
	title: "内容/行内文本/Small",
	component: WBSmall,
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
} satisfies Meta<typeof WBSmall>;

type Story = StoryObj<typeof WBSmall>;
export const Small: Story = {
	args: {
		children: "边注释, 附属细则(法律文本, 版权信息)等内容",
	},
};

export default meta;
