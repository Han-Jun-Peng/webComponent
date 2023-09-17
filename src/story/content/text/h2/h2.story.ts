import { WBH2 } from "./h2.tsx";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
	title: "内容/块文本/H2",
	component: WBH2,
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
} satisfies Meta<typeof WBH2>;

type Story = StoryObj<typeof WBH2>;
export const H2: Story = {
	args: {
		children: "标题2",
	},
};

export default meta;
