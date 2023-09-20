import { WBTfoot } from "./tfoot.tsx";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
	title: "容器/表格/Tfoot",
	component: WBTfoot,
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
			description: "是否启用边框样式",
			table: {
				defaultValue: {
					summary: "none",
				},
			},
		},
	},
} satisfies Meta<typeof WBTfoot>;

type Story = StoryObj<typeof WBTfoot>;

export const Tfoot: Story = {
	args: {
		children: "tfoot",
		border: "none",
	},
};

export default meta;
