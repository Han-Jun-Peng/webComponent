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
			description:
				"配置页面高度: 1. 输入高度(数字)(像素), 2. 不限定高度, 3. 与屏幕同高",
			table: {
				defaultValue: {
					summary: "screen",
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
		<div className="bg-blue-1 h-12 w-full">header</div>
		<div className="bg-blue-2 flex-1 w-full">content</div>
		<div className="bg-blue-3 h-12 w-full">footer</div>
	</>
);

type Story = StoryObj<typeof WBPage>;
export const TopToBottom: Story = {
	args: {
		children: children1,
		height: "screen",
		direction: "vertical",
	},
};

const children2 = (
	<>
		<div className="bg-blue-1 h-full w-52">aside</div>
		<div className="bg-blue-2 h-full flex-1">content</div>
	</>
);

export const LiftToRight: Story = {
	args: {
		children: children2,
		height: "screen",
		direction: "horizontal",
	},
};

export default meta;
