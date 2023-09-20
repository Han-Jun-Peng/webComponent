import { WBTr } from "./tr.tsx";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
	title: "容器/表格/Tr",
	component: WBTr,
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
		backgroundColor: {
			description: "是否启用背景颜色样式",
			table: {
				defaultValue: {
					summary: false,
				},
			},
		},
	},
} satisfies Meta<typeof WBTr>;

type Story = StoryObj<typeof WBTr>;

export const Tr: Story = {
	args: {
		children: "表格行",
		border: "none",
		backgroundColor: false,
	},
};

export default meta;
