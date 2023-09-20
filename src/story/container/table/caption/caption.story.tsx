import { WBCaption } from "./caption.tsx";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
	title: "容器/表格/Caption",
	component: WBCaption,
	tags: ["autodocs"],
	argTypes: {
		children: {
			table: {
				type: {
					summary: "ReactNode",
				},
			},
		},
		captionSide: {
			description: "配置表格标题的位置",
			table: {
				defaultValue: {
					summary: "top",
				},
			},
		},
		align: {
			description: "配置表格标题的对齐方式",
			table: {
				defaultValue: {
					summary: "center",
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
} satisfies Meta<typeof WBCaption>;

type Story = StoryObj<typeof WBCaption>;

export const Caption: Story = {
	args: {
		children: "表格标题",
		captionSide: "top",
		align: "center",
		border: "none",
	},
};

export default meta;
