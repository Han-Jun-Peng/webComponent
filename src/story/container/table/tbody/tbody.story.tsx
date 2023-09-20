import { WBTbody } from "./tbody.tsx";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
	title: "容器/表格/Tbody",
	component: WBTbody,
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
} satisfies Meta<typeof WBTbody>;

type Story = StoryObj<typeof WBTbody>;

export const Tbody: Story = {
	args: {
		children: "表格体",
		border: "none",
	},
};

export default meta;
