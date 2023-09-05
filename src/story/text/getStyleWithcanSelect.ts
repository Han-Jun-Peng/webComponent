export default function getStyleWithcanSelect(canSelect: boolean) {
	switch (canSelect) {
		case true:
			return "select-auto";
		case false:
			return "select-none";
		default:
			throw new Event(
				`不能将${typeof canSelect}类型, 赋值给boolean类型的canSelect`,
			);
	}
}
