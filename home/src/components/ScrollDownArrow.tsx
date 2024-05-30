import { useEffect, useState } from "react";

const ScrollDownArrow = () => {
	const [isHiidenArrow, setIsHiidenArrow] = useState(false);

	const handleScroll = () => {
		if (window.scrollY > 30) {
			setIsHiidenArrow(true);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [handleScroll]);

	return (
		<div
			className={`${
				isHiidenArrow && "hidden"
			} animate-bounce text-4xl bottom-10 absolute left-1/2 -ml-4`}
		>
			👇
		</div>
	);
};

export default ScrollDownArrow;
