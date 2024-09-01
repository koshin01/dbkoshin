import type { FC } from "react";

interface Image {
	src: string;
	alt: string;
}

interface Item {
	name: string;
	description?: string;
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
				<li key={item.name} className="flex gap-4">
					<a
						href={item.contentUrl}
						target={item.contentUrl?.startsWith("/") ? "_self" : "_blank"}
						className={`flex items-center p-4 no-underline w-full ${
							item.contentUrl &&
							"justify-between border-2 border-gray-100 hover:bg-gray-100/50 rounded-xl lg:p-4"
						}`}
						rel="noreferrer"
					>
						<div className="flex items-center gap-7">
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
								{item.description && (
									<span className="text-slate-500">{item.description}</span>
								)}
							</div>
						</div>
						{item.contentUrl && <div>🔗</div>}
					</a>
				</li>
			))}
		</ul>
	);
};

export default List;
