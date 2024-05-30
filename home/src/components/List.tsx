import type { FC } from "react";

interface Image {
	src: string;
	alt: string;
}

interface Item {
	name: string;
	description: string;
	icon?: Image;
	contentUrl?: string;
}

interface Props {
	items: Item[];
}

const UnorderedList: FC<Props> = (props) => {
	return (
		<ul className="flex flex-col gap-6">
			{props.items.map((item) => (
				<li key={item.name}>
					<a
						href={item.contentUrl}
						target="_blank"
						className={`flex items-center gap-7 p-2 ${
							item.contentUrl && "hover:bg-gray-100 rounded-md"
						}`}
						rel="noreferrer"
					>
						{item.icon && (
							<img
								src={item.icon.src}
								className="rounded-lg w-16 object-contain aspect-square bg-white"
								alt={item.icon.alt}
							/>
						)}
						<div className="flex flex-col">
							<span className="font-semibold text-slate-800 text-2xl">
								{item.name}
							</span>
							<span className="text-slate-500">{item.description}</span>
						</div>
					</a>
				</li>
			))}
		</ul>
	);
};

export default UnorderedList;
