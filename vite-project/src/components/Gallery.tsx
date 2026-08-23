import { useState } from "react";
import type { GalleryItem } from "../data/types";

type GalleryProps = {
    items: GalleryItem[];
};

export default function Gallery({ items }: GalleryProps) {

    const [selectedImage, setSelectedImage] =
        useState<GalleryItem | null>(null);

    const currentIndex = selectedImage
        ? items.indexOf(selectedImage)
        : -1;

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
                <div
                    className="modal"
                    onClick={(event) => {
                        event.stopPropagation();
                        setSelectedImage(null)}}
                >
                    <button
                        className="modal-close"
                        onClick={() => setSelectedImage(null)}
                    >
                        ✕
                    </button>

                    {currentIndex > 0 && (
                        <button
                            className="modal-prev"
                            onClick={(event) => {
                                event.stopPropagation();
                                setSelectedImage(
                                    items[currentIndex - 1]
                                );
                            }}
                        >
                            ←
                        </button>
                    )}

                    <img
                        className="modal-image"
                        src={selectedImage.image}
                        alt={selectedImage.alt}
                        onClick={(event) => event.stopPropagation()}
                    />

                    <p
                        className="modal-title"
                        onClick={(event) => event.stopPropagation()}
                    >
                        {selectedImage.title}
                    </p>
                    {currentIndex < items.length - 1 && (
                        <button
                            className="modal-next"
                            onClick={(event) => {
                                event.stopPropagation();
                                setSelectedImage(
                                    items[currentIndex + 1]
                                );
                            }}
                        >
                            →
                        </button>
                    )}
                </div>
            )}
        </>
    );
}