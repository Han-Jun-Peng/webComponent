import { WBHeader } from "./header.tsx";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
	title: "布局/Header",
	component: WBHeader,
	tags: ["autodocs"],
	argTypes: {
		children: {
			table: {
				type: {
					summary: "ReactNode",
				},
			},
		},
		border: {
			description: "是否显示边框",
			table: {
				type: {
					summary: false,
				},
			},
		},
	},
} satisfies Meta<typeof WBHeader>;

type Story = StoryObj<typeof WBHeader>;
export const Header: Story = {
	args: {
		children: "页眉",
		border: false,
	},
};

export default meta;
