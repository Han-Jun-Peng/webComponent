import { WBThead } from "./thead.tsx";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
	title: "容器/表格/Thead",
	component: WBThead,
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
} satisfies Meta<typeof WBThead>;

type Story = StoryObj<typeof WBThead>;

export const Thead: Story = {
	args: {
		children: "表格头",
		border: "none",
	},
};

export default meta;
