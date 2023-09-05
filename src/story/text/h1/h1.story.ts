//button.stories.ts

// 1. 导入
import type { Meta, StoryObj } from "@storybook/react";

// 2. 导入要显示的组件
import H1 from "./h1.tsx";

// 3. 配置组件元数据, 用于在故事书中显示
const meta: Meta<typeof H1> = {
	title: "基础/按钮",
	component: H1,
};

// 4. 默认导出组件元数据
export default meta;

// 5. 配置故事1, 并导出
// 至少要导出1个故事, 不然不显示组件
// 故事的名称遵循大驼峰命名法
type Story = StoryObj<typeof H1>;
export const Title: Story = {
	args: {},
};
