import { WBDialog } from "./dialog.tsx";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
	title: "反馈/Dialog",
	component: WBDialog,
	tags: ["autodocs"],
	argTypes: {
		children: {
			table: {
				type: {
					summary: "ReactNode",
				},
			},
		},
		modalDialog: {
			description: "是否为模态对话框",
			defaultValue: {
				summary: true,
			},
		},
		open: {
			description: "是否显示对话框",
			defaultValue: {
				summary: false,
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
	},
} satisfies Meta<typeof WBDialog>;

type Story = StoryObj<typeof WBDialog>;
export const Dialog: Story = {
	args: {
		children: "对话框",
		modalDialog: true,
		open: false,
		border: false,
	},
};

export default meta;
