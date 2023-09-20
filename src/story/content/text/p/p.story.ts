import { WBP } from "./p.tsx";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
	title: "内容/块文本/P",
	component: WBP,
	tags: ["autodocs"],
	argTypes: {
		children: {
			table: {
				type: {
					summary: "ReactNode",
				},
			},
		},
		canSelect: {
			description: "用户是否可选中文本",
			table: {
				defaultValue: {
					summary: true,
				},
			},
		},
		isRetraction: {
			description: "是否缩进文本",
			table: {
				defaultValue: {
					summary: false,
				},
			},
		},
		contentEditable: {
			description: "内容是否可编辑",
			table: {
				defaultValue: {
					summary: false,
				},
			},
		},
		setChildren: {
			description: "配置设置children的setChildren函数",
		},
		align: {
			description: "配置内容的水平对齐位置",
			table: {
				defaultValue: {
					summary: "start",
				},
			},
		},
	},
} satisfies Meta<typeof WBP>;

type Story = StoryObj<typeof WBP>;
export const P: Story = {
	args: {
		children: "这是一段文字",
		canSelect: true,
		isRetraction: false,
		contentEditable: false,
		align: "start",
	},
};

export default meta;
