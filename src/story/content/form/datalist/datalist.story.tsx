import { WBDatalist } from "./datalist.tsx";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
	title: "内容/表单/Datalist",
	component: WBDatalist,
	tags: ["autodocs"],
	argTypes: {
		option: {
			description: "配置datalist的选项",
		},
		onClick: {
			description:
				"配置点击事件处理函数(可通过event.currentTarget.dataset.id 或event.currentTarget.dataset.value 获取被点击的值)",
		},
	},
} satisfies Meta<typeof WBDatalist>;

type Story = StoryObj<typeof WBDatalist>;
export const Datalist: Story = {
	args: {
		option: [
			{ id: "1", value: "爱奇艺" },
			{ id: "2", value: "优酷" },
			{ id: "3", value: "腾讯视频" },
		],
		onClick: () => {},
	},
};

export default meta;
