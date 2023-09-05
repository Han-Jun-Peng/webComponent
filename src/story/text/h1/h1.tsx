import React from "react";
import { memo } from "react";

function H1() {
	return (
		<>
			<h1 className=" bg-yellow-400 w-20 ">这是一个标题1</h1>
		</>
	);
}

export default memo(H1);
