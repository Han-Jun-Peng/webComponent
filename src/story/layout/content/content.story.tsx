import { WBContent } from "./content.tsx";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { WBAside } from "../aside/aside.tsx";
import { WBMain } from "../main/main.tsx";
import { WBP } from "../../text/p/p.tsx";

const meta = {
	title: "布局/Content",
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
			description: "是否启用内边距",
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

const children = (
	<>
		<WBAside>aside</WBAside>
		<WBContent direction="horizontal">
			<WBMain>
				<div className="w-50 sm:w-[100px] md:w-[400px] lg:w-[700px] xl:w-[850px] xxl:w-[980px] overflow-y-auto h-full bg-blue-1">
					<WBP>
						content-main-div, 这是一个为了实现响应式的嵌套结构, 1.
						content负责自动伸缩, 2. 为了更灵活的断点, 所以main只设置了样式, 3.
						组件库的使用者需要手动编写div, 并设置断点宽度
					</WBP>
				</div>
			</WBMain>
		</WBContent>
	</>
);

type Story = StoryObj<typeof WBContent>;
export const Content: Story = {
	args: {
		children: children,
		direction: "horizontal",
		padding: false,
		hasAside: true,
	},
};

export default meta;
