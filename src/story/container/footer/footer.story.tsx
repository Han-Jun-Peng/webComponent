import { WBFooter } from "./footer.tsx";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
	title: "容器/网页结构/Footer",
	component: WBFooter,
	tags: ["autodocs"],
	argTypes: {
		children: {
			table: {
				type: {
					summary: "ReactNode",
				},
			},
		},
		border: {
			description: "是否显示边框",
			table: {
				defaultValue: {
					summary: false,
				},
			},
		},
	},
} satisfies Meta<typeof WBFooter>;

type Story = StoryObj<typeof WBFooter>;
export const Footer: Story = {
	args: {
		children: "页脚",
		border: false,
	},
};

export default meta;
