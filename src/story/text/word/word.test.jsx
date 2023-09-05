import { test, expect, describe } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Word from "./word.tsx";
import React from "react";

describe("<Word />", () => {
	test("<Word />", () => {
		render(<Word />);
		const element = screen.getByLabelText("字母");
		expect(element).toHaveTextContent("");
	});

	test("<Word canSelect={false}/>", () => {
		render(<Word canSelect={false}>word</Word>);
		const element = screen.getByLabelText("字母");
		expect(element).toHaveClass("select-none");
	});

	test("<Word />快照", () => {
		const element = render(<Word />);
		expect(element).toMatchSnapshot();
	});
});
