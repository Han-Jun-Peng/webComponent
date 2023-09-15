import { WBAside } from "./aside.tsx";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
	title: "布局/Aside",
	component: WBAside,
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
} satisfies Meta<typeof WBAside>;

type Story = StoryObj<typeof WBAside>;
export const Aside: Story = {
	args: {
		children: "侧边栏",
		border: false,
	},
};

export default meta;
