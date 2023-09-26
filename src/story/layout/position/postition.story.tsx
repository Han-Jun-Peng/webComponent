import { WBPostiton } from "./position.tsx";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

const meta = {
	title: "布局/Position",
	component: WBPostiton,
	tags: ["autodocs"],
	argTypes: {
		children: {
			table: {
				type: {
					summary: "ReactNode",
				},
			},
		},
		position: {
			description:
				"配置定位类型: 1. 不定位, 2. 固定定位, 3. 粘性定位, 4. 相对定位, 5. 绝对定位",
			table: {
				defaultValue: {
					summary: "relative",
				},
			},
		},
		left: {
			description:
				"配置水平位置: 1. 起点外侧, 2. 起点内侧, 3. 中心, 4. 终点内侧, 5. 终点外侧, 6.undefined",
		},
		top: {
			description:
				"配置垂直位置: 1. 起点外侧, 2. 起点内侧, 3. 中心, 4. 终点内侧, 5. 终点外侧, 6.undefined",
		},
		display: {
			description: "配置元素为不显示, 行内块, 块",
			table: {
				defaultValue: {
					summary: "inline-block",
				},
			},
		},
		displayHover: {
			description: "配置父辈元素或兄弟元素悬停时, 此元素为不显示, 行内块, 块",
			table: {
				defaultValue: {
					summary: "inline-block",
				},
			},
		},
		displayFocus: {
			description:
				"配置父辈元素或兄弟元素获得焦点时, 此元素为不显示, 行内块, 块",
			table: {
				defaultValue: {
					summary: "inline-block",
				},
			},
		},
	},
} satisfies Meta<typeof WBPostiton>;
export default meta;

type Story = StoryObj<typeof WBPostiton>;

export const Static: Story = {
	args: {
		children: "不定位",
		position: "static",
	},
};

export const Fixed: Story = {
	args: {
		children: "固定定位: 相对于视口",
		position: "fixed",
		left: "center",
		top: "center",
	},
};

export const Sticky: Story = {
	args: {
		children: "粘性定位: 相对于可滚动的父级或祖宗级元素的定位",
		position: "sticky",
		left: 300,
		top: 10,
	},
	decorators: [
		(Story) => {
			return (
				<div className="bg-blue-1 overflow-scroll">
					<Story />
				</div>
			);
		},
	],
};

export const Relative: Story = {
	args: {
		children: "相对定位: 相对于流式布局时, 自身位置的定位",
		position: "relative",
		left: 300,
		top: 10,
	},
	decorators: [
		(Story) => {
			return (
				<div className="bg-blue-1">
					<div className="bg-blue-2">1</div>
					<Story />
					<div className="bg-blue-2">2</div>
				</div>
			);
		},
	],
};

export const Absolute: Story = {
	args: {
		children: "绝对定位: 相对于使用相对定位的元素的定位",
		position: "absolute",
		left: "center",
		top: "end-outside",
	},
	decorators: [
		(Story) => {
			return (
				<div className="bg-blue-1 inline">
					<WBPostiton position="relative">
						相对定位
						<Story />
					</WBPostiton>
				</div>
			);
		},
	],
};
