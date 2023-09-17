import type { Meta, StoryObj } from "@storybook/react";
import { WBWord } from "./word.tsx";

const meta = {
	title: "内容/行内文本/Word",
	component: WBWord,
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
} satisfies Meta<typeof WBWord>;

type Story = StoryObj<typeof WBWord>;
export const Word: Story = {
	args: {
		children: "word",
	},
};

export default meta;
