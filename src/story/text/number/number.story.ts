import { WBNumber } from "./number.tsx";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
	title: "行内文本/数字",
	component: WBNumber,
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
} satisfies Meta<typeof WBNumber>;

type Story = StoryObj<typeof WBNumber>;
export const Number: Story = {
	args: {
		children: "1,000",
	},
};

export default meta;
