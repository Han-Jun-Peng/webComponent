import { WBCheckBox } from "./checkBox.tsx";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
	title: "内容/表单/CheckBox",
	component: WBCheckBox,
	tags: ["autodocs"],
	argTypes: {
		children: {
			description: "配置复选的文字描述",
			table: {
				defaultValue: {
					summary: "复选",
				},
				type: {
					summary: "ReactNode",
				},
			},
		},
		name: {
			description: "配置复选name属性",
		},
		value: {
			description: "配置复选value属性",
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
	},
} satisfies Meta<typeof WBCheckBox>;

type Story = StoryObj<typeof WBCheckBox>;
export const CheckBox: Story = {
	args: {
		children: "复选",
		name: "hobby",
		value: "motion",
		required: false,
		disabled: false,
		checked: false,
	},
};

export default meta;
