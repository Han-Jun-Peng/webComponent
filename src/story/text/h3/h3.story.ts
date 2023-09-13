import { WBH3 } from "./h3.tsx";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
	title: "块文本/H3",
	component: WBH3,
	tags: ["autodocs"],
	argTypes: {
		children: {
			table: {
				type: {
					summary: "ReactNode",
				},
			},
		},
	},
} satisfies Meta<typeof WBH3>;

type Story = StoryObj<typeof WBH3>;
export const Main: Story = {
	args: {
		children: "标题3",
	},
};

export default meta;
