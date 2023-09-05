import { test, expect, describe } from "@jest/globals";
import getStyleWithcanSelect from "./getStyleWithcanSelect.ts";

describe("getStyleWithcanSelect()", () => {
	test("getStyleWithcanSelect(true), 返回字符串'select-auto'", () => {
		expect(getStyleWithcanSelect(true)).toBe("select-auto");
	});

	test("getStyleWithcanSelect(false), 返回字符串'select-none'", () => {
		expect(getStyleWithcanSelect(false)).toBe("select-none");
	});

	test("getStyleWithcanSelect(), 抛出错误", () => {
		expect(() => {
			getStyleWithcanSelect();
		}).toThrow();
	});
});
