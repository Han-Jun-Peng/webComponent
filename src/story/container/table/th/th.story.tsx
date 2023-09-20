import { WBTh } from "./th.tsx";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
	title: "容器/表格/Th",
	component: WBTh,
	tags: ["autodocs"],
	argTypes: {
		children: {
			table: {
				type: {
					summary: "ReactNode",
				},
			},
		},
		colSpan: {
			description: "配置向右占据几列, 0表示一直占据到最后一列",
			table: {
				defaultValue: {
					summary: 1,
				},
			},
		},
		rowSpan: {
			description: "配置向下占据几行, 0表示一直占据到最后一行",
			table: {
				defaultValue: {
					summary: 1,
				},
			},
		},
		width: {
			description:
				"配置th的宽度(像素), 推荐使用百分比; 如果不设置将像弹性布局那样自动调整",
		},
		border: {
			description: "是否启用边框样式",
			table: {
				defaultValue: {
					summary: "none",
				},
			},
		},
		scope: {
			description: "配置th在语义上关联一行, 还是一列",
			table: {
				defaultValue: {
					summary: "col",
				},
			},
		},
	},
} satisfies Meta<typeof WBTh>;

type Story = StoryObj<typeof WBTh>;

export const Th: Story = {
	args: {
		children: "表头单元格",
		colSpan: 1,
		rowSpan: 1,
		width: "20%",
		border: "none",
		scope: "col",
	},
};

export default meta;
