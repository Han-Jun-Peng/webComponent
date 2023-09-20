import { WBTd } from "./td.tsx";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
	title: "容器/表格/Td",
	component: WBTd,
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

		verticalAlign: {
			description: "配置td相对于tr的垂直对齐位置",
			table: {
				defaultValue: {
					summary: "middle",
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
} satisfies Meta<typeof WBTd>;

type Story = StoryObj<typeof WBTd>;

export const Td: Story = {
	args: {
		children: "单元格",
		colSpan: 1,
		rowSpan: 1,
		verticalAlign: "middle",
		border: "none",
	},
};

export default meta;
