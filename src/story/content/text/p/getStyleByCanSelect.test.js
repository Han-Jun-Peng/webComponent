// import { test, expect, describe } from "@jest/globals";
import getStyleByCanSelect from "./getStyleByCanSelect.js";

describe("getStyleWithcanSelect()", () => {
	test("getStyleWithcanSelect(true), 返回字符串'select-auto'", () => {
		expect(getStyleByCanSelect(true)).toBe("select-auto");
	});

	test("getStyleWithcanSelect(false), 返回字符串'select-none'", () => {
		expect(getStyleByCanSelect(false)).toBe("select-none");
	});

	test("getStyleWithcanSelect(), 抛出错误", () => {
		expect(() => {
			getStyleByCanSelect();
		}).toThrow();
	});
});
