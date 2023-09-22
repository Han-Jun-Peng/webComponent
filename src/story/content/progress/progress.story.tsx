import { WBProgress } from "./progress.tsx";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
	title: "内容/Progress",
	component: WBProgress,
	tags: ["autodocs"],
	argTypes: {
		width: {
			description: "配置进度条的宽度(像素)",
			table: {
				defaultValue: {
					summary: 100,
				},
			},
		},
		height: {
			description: "配置进度条的高度(像素)",
			table: {
				defaultValue: {
					summary: 8,
				},
			},
		},
		max: {
			description: "配置进度条最大值",
			table: {
				defaultValue: {
					summary: 100,
				},
			},
		},
		value: {
			description: "配置进度条的当前值",
			table: {
				defaultValue: {
					summary: 50,
				},
			},
		},
		cacheValue: {
			description: "配置进度条的缓存值(用于音视频的缓存进度)",
		},
	},
} satisfies Meta<typeof WBProgress>;

type Story = StoryObj<typeof WBProgress>;
export const Progress: Story = {
	args: {
		width: 100,
		height: 8,
		max: 100,
		value: 50,
		cacheValue: 70,
	},
};

export default meta;
