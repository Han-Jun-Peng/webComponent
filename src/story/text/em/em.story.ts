import WBEm from "./em.tsx";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
	title: "行内文本/斜体",
	component: WBEm,
	tags: ["autodocs"],
	argTypes: {
		children: {
			control: "text",
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
		children: "语义上需要强调的文本, 样式是斜体",
	},
};

export default meta;
