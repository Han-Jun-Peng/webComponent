import { WBFigure } from "./figure.tsx";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

const meta = {
	title: "容器/Figure",
	component: WBFigure,
	tags: ["autodocs"],
	argTypes: {
		children: {
			table: {
				type: {
					summary: "ReactNode",
				},
			},
		},
		figcaption: {
			description: "配置引入媒体内容的标题或介绍",
		},
		align: {
			description: "配置标题或介绍的水平对齐位置",
			table: {
				defaultValue: {
					summary: "start",
				},
			},
		},
		border: {
			description: "是否显示边框",
			table: {
				defaultValue: {
					summary: false,
				},
			},
		},
		padding: {
			description: "是否启用内边距",
			table: {
				defaultValue: {
					summary: false,
				},
			},
		},
	},
} satisfies Meta<typeof WBFigure>;

type Story = StoryObj<typeof WBFigure>;

const children = <div className="bg-blue-2 h-40"></div>;

export const Figure: Story = {
	args: {
		children: children,
		figcaption: "这是一段对上方插图, 视频, 表格, 代码等插入内容的介绍",
		align: "start",
		border: true,
		padding: true,
	},
};

export default meta;
