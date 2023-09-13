import { WBLoading } from "./loading.tsx";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
	title: "操作反馈/加载中",
	component: WBLoading,
	tags: ["autodocs"],
	argTypes: {
		size: {
			description: "配置宽高尺寸(单位px)",
			table: {
				defaultValue: {
					summary: 16,
				},
			},
		},
	},
} satisfies Meta<typeof WBLoading>;

type Story = StoryObj<typeof WBLoading>;
export const Loading: Story = {};

export default meta;
