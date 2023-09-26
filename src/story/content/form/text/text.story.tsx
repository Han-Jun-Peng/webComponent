import { WBText } from "./text.tsx";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
	title: "内容/表单/Text",
	component: WBText,
	tags: ["autodocs"],
	argTypes: {
		children: {
			description: "配置关联的WBDatalist, 作为下拉列表",
			table: {
				type: {
					summary: "ReactNode",
				},
			},
		},
		id: {
			description: "配置id属性",
		},
		name: {
			description: "配置name属性",
		},
		value: {
			description: "配置value属性",
		},
		width: {
			description: "配置元素宽度(像素)",
			table: {
				defaultValue: {
					summary: 320,
				},
			},
		},
		minlength: {
			description: "配置可输入的最少字符数",
			table: {
				defaultValue: {
					summary: 0,
				},
			},
		},
		maxlength: {
			description: "配置可输入的最多字符数",
			table: {
				defaultValue: {
					summary: 20,
				},
			},
		},
		pattern: {
			description: "配置用于验证输入的正则表达式",
		},
		required: {
			description: "是否为必选项",
			table: {
				defaultValue: {
					summary: false,
				},
			},
		},
		readonly: {
			description: "是否只读",
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
		onChange: {
			description: "配置onChange事件处理函数",
		},
		placeholder: {
			description: "配置输入内容的注意事项(占位符)",
			table: {
				defaultValue: {
					summary: "请输入",
				},
			},
		},
		requiredFailWarning: {
			description: "配置未填写内容时的警告信息",
			table: {
				defaultValue: {
					summary: "内容不能为空",
				},
			},
		},
		patternFailWarning: {
			description: "配置未通过正则验证时的警告信息",
			table: {
				defaultValue: {
					summary: "未通过正则验证",
				},
			},
		},
	},
} satisfies Meta<typeof WBText>;

type Story = StoryObj<typeof WBText>;
export const Text: Story = {
	args: {
		id: "",
		name: "text",
		value: "",
		minlength: 0,
		maxlength: 20,
		pattern: "[a-zA-Z0-9]",
		required: false,
		readonly: false,
		disabled: false,
		placeholder: "请输入",
		requiredFailWarning: "内容不能为空",
		patternFailWarning: "未通过正则验证",
	},
};

export default meta;
