import { WBButton } from "./button.tsx";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
	title: "内容/表单/Button",
	component: WBButton,
	tags: ["autodocs"],
	argTypes: {
		children: {
			table: {
				type: {
					summary: "ReactNode",
				},
			},
		},
		type: {
			description: "配置按钮是普通按钮, 还是表单中的提交或重置",
		},

		as: {
			description: "配置按钮的样式, 主按钮, 次按钮, 虚线按钮, 文本按钮",
			table: {
				defaultValue: {
					summary: "secondary",
				},
			},
		},
		disabled: {
			description: "是否禁用按钮",
			table: {
				defaultValue: {
					summary: "false",
				},
			},
		},
		isLoadling: {
			description: "是否处于加载状态",
			table: {
				defaultValue: {
					summary: "false",
				},
			},
		},
		isDanger: {
			description: "是否为危险操作按钮",
			table: {
				defaultValue: {
					summary: "false",
				},
			},
		},
	},
} satisfies Meta<typeof WBButton>;

type Story = StoryObj<typeof WBButton>;
export const Primary: Story = {
	args: {
		children: "按钮",
		type: "button",
		as: "primary",
		disabled: false,
		isLoadling: false,
		isDanger: false,
	},
};

export const Secondary: Story = {
	args: {
		children: "按钮",
		type: "button",
		as: "secondary",
		disabled: false,
		isLoadling: false,
		isDanger: false,
	},
};
export const Dashed: Story = {
	args: {
		children: "按钮",
		type: "button",
		as: "dashed",
		disabled: false,
		isLoadling: false,
		isDanger: false,
	},
};
export const Text: Story = {
	args: {
		children: "按钮",
		type: "button",
		as: "text",
		disabled: false,
		isLoadling: false,
		isDanger: false,
	},
};
export default meta;
