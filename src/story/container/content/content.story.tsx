import { WBContent } from "./content.tsx";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

const meta = {
	title: "容器/网页结构/Content",
	component: WBContent,
	tags: ["autodocs"],
	argTypes: {
		children: {
			table: {
				type: {
					summary: "ReactNode",
				},
			},
		},
		direction: {
			description: "配置子元素的排列方向: 水平或垂直",
			table: {
				defaultValue: {
					summary: "horizontal",
				},
			},
		},
		padding: {
			description: "是否启用元素的内边距样式",
			table: {
				defaultValue: {
					summary: false,
				},
			},
		},
		hasAside: {
			description: "子元素是否有侧边栏",
			table: {
				defaultValue: {
					summary: false,
				},
			},
		},
	},
} satisfies Meta<typeof WBContent>;
export default meta;

type Story = StoryObj<typeof WBContent>;

const children1 = (
	<main className="bg-blue-2">在main左右两侧, 是被占据的剩余空间</main>
);
export const Content1: Story = {
	args: {
		children: children1,
		direction: "horizontal",
		padding: false,
		hasAside: false,
	},
};

const children2 = (
	<>
		<aside className="bg-blue-1">aside</aside>
		<WBContent direction="horizontal">
			<main className="bg-blue-2">在main左右两侧, 是被占据的剩余空间</main>
		</WBContent>
	</>
);
export const Content2: Story = {
	args: {
		children: children2,
		direction: "horizontal",
		padding: false,
		hasAside: true,
	},
};

const children3 = (
	<>
		<header className="bg-blue-1 w-full">header</header>
		<WBContent direction="horizontal">
			<main className="bg-blue-2">在main左右两侧, 是被占据的剩余空间</main>
		</WBContent>
		<footer className="bg-blue-3 w-full">footer</footer>
	</>
);
export const Content3: Story = {
	args: {
		children: children3,
		direction: "vertical",
		padding: false,
		hasAside: false,
	},
};
