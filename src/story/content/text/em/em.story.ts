import { WBEm } from "./em.tsx";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
	title: "内容/行内文本/Em",
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
export const Em: Story = {
	args: {
		children: "斜体强调",
	},
};

export default meta;
