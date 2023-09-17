import { WBLi } from "./li.tsx";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
	title: "容器/Li",
	component: WBLi,
	tags: ["autodocs"],
	argTypes: {
		children: {
			table: {
				type: {
					summary: "ReactNode",
				},
			},
		},
		key: {
			description: "配置li的key值",
		},
		dataId: {
			description: "配置自定义的data-id",
		},
		border: {
			description: "是否启用边框样式",
			table: {
				type: {
					summary: false,
				},
			},
		},
		noBackground: {
			description: "是否启用背景:hover和:active样式",
			table: {
				type: {
					summary: false,
				},
			},
		},
		isActive: {
			description: "是否被用户激活或选中",
			table: {
				type: {
					summary: false,
				},
			},
		},
	},
} satisfies Meta<typeof WBLi>;

type Story = StoryObj<typeof WBLi>;
export const Li: Story = {
	args: {
		children: "li",
		key: "1",
		border: false,
		noBackground: false,
		isActive: false,
	},
};

export default meta;
