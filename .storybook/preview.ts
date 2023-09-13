import type { Preview } from "@storybook/react";
import "../src/tailwind.css";

import { withThemeByDataAttribute } from "@storybook/addon-styling";

// 在storybook的页面工具栏, 创建个工具按钮,
// 可手动切换tailwind css 的深色模式
export const decorators = [
	withThemeByDataAttribute({
		themes: {
			light: "light",
			dark: "dark",
		},
		defaultTheme: "light",
		attributeName: "mode",
	}),
];

// 全局配置项
const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
};

export default preview;
