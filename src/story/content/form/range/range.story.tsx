import { WBRange } from "./range.tsx";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
	title: "内容/表单/Range",
	component: WBRange,
	tags: ["autodocs"],
	argTypes: {
		width: {
			description: "配置滑块的宽度(像素)",
			table: {
				defaultValue: {
					summary: 320,
				},
			},
		},
		height: {
			description: "配置滑块的高度(像素)",
			table: {
				defaultValue: {
					summary: 8,
				},
			},
		},
		name: {
			description: "配置滑块的name属性",
		},
		value: {
			description: "配置滑块的value属性",
			table: {
				defaultValue: {
					summary: 50,
				},
			},
		},
		setValue: {
			description: "配置setValue()函数, 在点击或按键时修改value的值",
		},
		min: {
			description: "配置滑块最小值",
			table: {
				defaultValue: {
					summary: 0,
				},
			},
		},
		max: {
			description: "配置滑块最大值",
			table: {
				defaultValue: {
					summary: 100,
				},
			},
		},
		step: {
			description: "配置滑块每次滑动的值",
			table: {
				defaultValue: {
					summary: 1,
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
	},
} satisfies Meta<typeof WBRange>;

type Story = StoryObj<typeof WBRange>;
export const Range: Story = {
	args: {
		width: 320,
		height: 8,
		name: "range",
		value: 50,
		min: 0,
		max: 100,
		step: 1,
		disabled: false,
	},
};

export default meta;
