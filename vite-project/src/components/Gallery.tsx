import type { GalleryItem } from "../data/types";
import { useState } from "react";

type GalleryProps = {
    items: GalleryItem[]
};

export default function Gallery({ items }: GalleryProps) {

    const [selectedImage, setSelectedImage] =
        useState<GalleryItem | null>(null);

    return (
        <>
            <div className="gallery">
                {items.map((item) => (
                    <figure key={item.id}>
                        <img
                            src={item.image}
                            alt={item.alt}
                            onClick={() => setSelectedImage(item)}
                        />
                        <figcaption>{item.title}</figcaption>
                    </figure>
                ))}
            </div>

            {selectedImage && (
                <div>
                    <img
                        src={selectedImage.image}
                        alt={selectedImage.alt}
                    />
                </div>
            )}
        </>
    );
}