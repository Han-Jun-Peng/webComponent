import { WBEm } from "./em.tsx";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
	title: "行内文本/斜体",
	component: WBEm,
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
} satisfies Meta<typeof WBEm>;

type Story = StoryObj<typeof WBEm>;
export const Main: Story = {
	args: {
		children: "斜体",
	},
};

export default meta;
