import { WBHr } from "./hr.tsx";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
	title: "布局/分隔线",
	component: WBHr,
	tags: ["autodocs"],
	argTypes: {
		type: {
			description: "配置分隔符样式: 实线, 虚线, 箭头, 首页",
			table: {
				defaultValue: {
					summary: "solid",
				},
			},
		},
		direction: {
			description: "配置分隔线方向",
			table: {
				defaultValue: {
					summary: "horizontal",
				},
			},
		},
	},
} satisfies Meta<typeof WBHr>;

type Story = StoryObj<typeof WBHr>;
export const Hr: Story = {
	args: {
		type: "solid",
		direction: "horizontal",
	},
};

export default meta;
