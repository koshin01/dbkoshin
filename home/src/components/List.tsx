import type { FC } from "react";

interface Image {
	src: string;
	alt: string;
}

interface Item {
	name: string;
	description: string | Date;
	icon?: Image;
	contentUrl?: string;
}

interface Props {
	items: Item[];
}

const List: FC<Props> = (props) => {
	return (
		<ul className="flex flex-col gap-6 list-none p-0 m-0 lg:p-0 lg:m-0">
			{props.items.map((item) => (
				<li key={item.name}>
					<a
						href={item.contentUrl}
						target={item.contentUrl?.startsWith("/") ? "_self" : "_blank"}
						className={`flex items-center gap-7 p-2 no-underline ${
							item.contentUrl && "hover:bg-gray-100 rounded-md lg:p-4"
						}`}
						rel="noreferrer"
					>
						{item.icon && (
							<img
								src={item.icon.src}
								className="rounded-lg w-16 object-contain aspect-square bg-white m-0 lg:m-2"
								alt={item.icon.alt}
							/>
						)}
						<div className="flex flex-col">
							<span className="font-semibold text-slate-800 text-2xl">
								{item.name}
							</span>
							{typeof item.description === "string" ? (
								<span className="text-slate-500">{item.description}</span>
							) : (
								<time className="text-slate-500">
									{`${item.description.getFullYear()}/${item.description.getMonth()}/${item.description.getDate()}`}
								</time>
							)}
						</div>
					</a>
				</li>
			))}
		</ul>
	);
};

export default List;
