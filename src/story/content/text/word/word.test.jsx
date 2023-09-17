import { test, expect, describe } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import WBWord from "./word.tsx";
import React from "react";

describe("<WBWord />", () => {
	test("<WBWord />", () => {
		render(<WBWord />);
		const element = screen.getByRole("paragraph");
		expect(element).toHaveTextContent("");
	});

	test("<WBWord canSelect={false}/>", () => {
		render(<WBWord canSelect={false}>word</WBWord>);
		const element = screen.getByRole("paragraph");
		expect(element).toHaveClass("select-none");
	});

	test("<WBWord />快照", () => {
		const element = render(<WBWord />);
		expect(element).toMatchSnapshot();
	});
});
