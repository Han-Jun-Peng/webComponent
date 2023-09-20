import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
	stories: ["../src/**/*.story.@(js|jsx|mjs|ts|tsx)"],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		// "@storybook/addon-onboarding",
		// "@storybook/addon-interactions", //交互测试插件
		{
			name: "@storybook/addon-styling",
			options: {
				postCss: {
					implementation: require.resolve("postcss"),
				},
			},
		},
	],
	framework: {
		name: "@storybook/react-webpack5",
		options: {},
	},
	docs: {
		autodocs: "tag",
		defaultName: "文档",
	},
	features: {
		buildStoriesJson: true,
		storyStoreV7: false,
	},
};

export default config;
