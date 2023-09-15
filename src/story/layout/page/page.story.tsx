import { WBPage } from "./page.tsx";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

const meta = {
	title: "布局/Page",
	component: WBPage,
	tags: ["autodocs"],
	argTypes: {
		children: {
			table: {
				type: {
					summary: "ReactNode",
				},
			},
		},
		height: {
			description: "配置高度: 不限定高度, 或与屏幕同高, 或限定高度溢出滚动",
			table: {
				defaultValue: {
					summary: "boundless",
				},
			},
		},
		direction: {
			description: "配置子元素的排列方向: 水平或垂直",
			table: {
				defaultValue: {
					summary: "vertical",
				},
			},
		},
	},
} satisfies Meta<typeof WBPage>;

const children1 = (
	<>
		<div className="bg-blue-1 h-12 w-full">页眉</div>
		<div className="bg-blue-2 flex-1 w-full">内容</div>
		<div className="bg-blue-3 h-12 w-full">页脚</div>
	</>
);

type Story = StoryObj<typeof WBPage>;
export const Page1: Story = {
	args: {
		children: children1,
		height: "screen",
		direction: "vertical",
	},
};

const children2 = (
	<>
		<div className="bg-blue-1 h-full w-52">侧边栏</div>
		<div className="bg-blue-2 h-full flex-1">内容</div>
	</>
);

export const Page2: Story = {
	args: {
		children: children2,
		height: "screen",
		direction: "horizontal",
	},
};

export default meta;
