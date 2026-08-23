import type { GalleryItem } from "../data/characterDesign";

type GalleryProps = {
    items: GalleryItem[]
};

export default function Gallery({items}: GalleryProps) {
    return (
        <div className="gallery">
                {items.map((item) => (
                    <figure key={item.id}>
                        <img src={item.image} alt={item.alt} />
                    <figcaption>{item.title}</figcaption>
                </figure>
            ))}
        </div>
    )
}