import WBH2 from "./h2.tsx";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
	title: "块文本/H2",
	component: WBH2,
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
} satisfies Meta<typeof WBH2>;

type Story = StoryObj<typeof WBH2>;
export const Main: Story = {
	args: {
		children: "标题2, 限制1行, 溢出隐藏, 显示省略号",
	},
};

export default meta;
