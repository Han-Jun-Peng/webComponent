import { WBFlex } from "./flex.tsx";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

const meta = {
	title: "布局/弹性布局",
	component: WBFlex,
	tags: ["autodocs"],
	argTypes: {
		children: {
			description: "属性的描述",
			table: {
				type: {
					summary: "ReactNode",
				},
			},
		},
		direction: {
			description: "配置子元素的排列方向",
			table: {
				defaultValue: {
					summary: "horizontal",
				},
			},
		},
		wrap: {
			description: "子元素溢出时, 是否可换行",
			table: {
				defaultValue: {
					summary: true,
				},
			},
		},
		gap: {
			description: "配置子元素与子元素之间的间距",
			table: {
				defaultValue: {
					summary: "medium",
				},
			},
		},
		alignX: {
			description: "子元素在x轴上的对齐位置",
			table: {
				defaultValue: {
					summary: "start",
				},
			},
		},
		alignY: {
			description: "子元素在y轴上的对齐位置",
			table: {
				defaultValue: {
					summary: "start",
				},
			},
		},
	},
} satisfies Meta<typeof WBFlex>;

type Story = StoryObj<typeof WBFlex>;
export const Flex: Story = {
	args: {
		children: (
			<>
				<div className="bg-blue-1">1</div>
				<div className="bg-blue-1">2</div>
				<div className="bg-blue-1">3</div>
			</>
		),
		direction: "horizontal",
		wrap: true,
		gap: "medium",
		alignX: "start",
		alignY: "start",
	},
};

export default meta;
