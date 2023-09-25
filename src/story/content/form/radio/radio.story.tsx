import { WBRadio } from "./radio.tsx";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
	title: "内容/表单/Radio",
	component: WBRadio,
	tags: ["autodocs"],
	argTypes: {
		children: {
			description: "配置单选的文字描述",
			table: {
				defaultValue: {
					summary: "单选",
				},
				type: {
					summary: "ReactNode",
				},
			},
		},
		name: {
			description: "配置单选name属性",
		},
		value: {
			description: "配置单选value属性",
		},
		required: {
			description: "是否为必选项",
			table: {
				defaultValue: {
					summary: false,
				},
			},
		},
		disabled: {
			description: "是否禁用",
			table: {
				defaultValue: {
					summary: false,
				},
			},
		},
		checked: {
			description: "是否默认被选中",
			table: {
				defaultValue: {
					summary: false,
				},
			},
		},
		onChange: {
			description: "配置onChange事件处理函数",
		},
	},
} satisfies Meta<typeof WBRadio>;

type Story = StoryObj<typeof WBRadio>;
export const Radio: Story = {
	args: {
		children: "男",
		name: "gender",
		value: "man",
		required: false,
		disabled: false,
		checked: false,
	},
};

export default meta;
