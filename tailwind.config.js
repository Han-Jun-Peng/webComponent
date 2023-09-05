/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,ts,tsx}"],
	darkMode: ["class", '[data-mode="dark"]'],
	theme: {
		screens: {
			sm: "320px",
			md: "480px",
			lg: "768px",
			xl: "1024px",
			"2xl": "1280px",
		},
		colors: {
			transparent: "transparent",
			current: "currentColor",
			black: {
				1: "#F5F5F5FF", // 背景色
				2: "#0505050F", // 分割线
				3: "#D9D9D9FF", // 边框
				4: "#00000040", // 禁用文本
				5: "#000000A6", // 装饰性文本
				6: "#000000E0", // 常规, 标题
			},
			white: {
				1: "#000000FF",
				2: "#FDFDFD1F",
				3: "#424242FF",
				4: "#FFFFFF40",
				5: "#FFFFFFA6",
				6: "#FFFFFFD9",
			},

			blue: {
				1: "#e6f7ff", // 选中
				2: "#bae7ff",
				3: "#91d5ff",
				4: "#69c0ff",
				5: "#40a9ff", // 悬浮
				6: "#1890ff", // 常规
				7: "#096dd9", // 点击
				8: "#0050b3",
				9: "#003a8c",
				10: "#002766",
			},
			green: {
				1: "#f6ffed", // 选中
				2: "#d9f7be",
				3: "#b7eb8f",
				4: "#95de64",
				5: "#73d13d", // 悬浮
				6: "#52c41a", // 常规
				7: "#389e0d", // 点击
				8: "#237804",
				9: "#135200",
				10: "#092b00",
			},
			yellow: {
				1: "#feffe6", // 选中
				2: "#ffffb8",
				3: "#fffb8f",
				4: "#fff566",
				5: "#ffec3d", // 悬浮
				6: "#fadb14", // 常规
				7: "#d4b106", // 点击
				8: "#ad8b00",
				9: "#876800",
				10: "#614700",
			},
			red: {
				1: "#fff1f0", // 选中
				2: "#ffccc7",
				3: "#ffa39e",
				4: "#ff7875",
				5: "#ff4d4f", // 悬浮
				6: "#f5222d", // 常规
				7: "#cf1322", // 点击
				8: "#a8071a",
				9: "#820014",
				10: "#5c0011",
			},
		},
		fontSize: {
			sm: ["12px", "20px"], // p, small
			base: ["16px", "24px"], // p, h3
			xl: ["24px", "32px"], // h1+加粗, h2
		},
		fontWeight: {
			normal: "400", //常规
			medium: "500", //中文加粗
			semibold: "600", //字母加粗
		},
		extend: {},
	},
	plugins: [],
};
