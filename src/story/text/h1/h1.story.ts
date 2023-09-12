import WBH1 from "./h1.tsx";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
	title: "块文本/H1",
	component: WBH1,
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
} satisfies Meta<typeof WBH1>;

type Story = StoryObj<typeof WBH1>;
export const Main: Story = {
	args: {
		children: "标题1, 限制1行, 溢出隐藏, 显示省略号",
	},
};

export default meta;
