import { WBMenu } from "./menu.tsx";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { WBHr } from "../../layout/hr/hr.tsx";

const meta = {
	title: "容器/列表/Menu",
	component: WBMenu,
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
					summary: false,
				},
			},
		},
		gap: {
			description: "配置子元素与子元素之间的间距",
			table: {
				defaultValue: {
					summary: "small",
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
} satisfies Meta<typeof WBMenu>;

type Story = StoryObj<typeof WBMenu>;
export const Menu: Story = {
	args: {
		children: (
			<>
				<li>
					<button type="button" className="inline border">
						按钮1
					</button>
				</li>
				<li className="w-full">
					<WBHr></WBHr>
				</li>
				<li>
					<button type="button" className="inline border">
						按钮2
					</button>
				</li>

				<li className="w-full">
					<WBHr></WBHr>
				</li>
				<li>
					<button type="button" className="inline border">
						按钮3
					</button>
				</li>
			</>
		),
		direction: "vertical",
		wrap: false,
		gap: "small",
		alignX: "start",
		alignY: "start",
	},
};

export default meta;
