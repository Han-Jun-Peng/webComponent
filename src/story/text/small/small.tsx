import React, { memo } from "react";

interface Prop {
	children: React.ReactNode;
}

const Small = memo(function Small({ children }: Prop) {
	return <small className="font-sans text-sm font-normal">{children}</small>;
});

export default Small;
