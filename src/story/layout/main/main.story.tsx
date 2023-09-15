import { WBMain } from "./main.tsx";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

const meta = {
	title: "布局/Main",
	component: WBMain,
	tags: ["autodocs"],
	argTypes: {
		children: {
			table: {
				type: {
					summary: "ReactNode",
				},
			},
		},
		border: {
			description: "是否显示边框",
			table: {
				type: {
					summary: false,
				},
			},
		},
	},
} satisfies Meta<typeof WBMain>;

const children = (
	<div className="sm:w-[200px] md:w-[400px] lg:w-[700px] xl:w-[850px] xxl:w-[980px] overflow-y-auto h-full bg-blue-1">
		main, 为了实现响应式: 1. 子元素必须是div, 2. 子元素高度设定100%, 3.
		子元素需要加断点, 设定宽度
	</div>
);

type Story = StoryObj<typeof WBMain>;
export const Main: Story = {
	args: {
		children: children,
		border: false,
	},
};

export default meta;
