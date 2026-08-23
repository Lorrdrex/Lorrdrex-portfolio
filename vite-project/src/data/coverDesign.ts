import crowCover from "../assets/images/Cover-crow.png";
import farmerCover from "../assets/images/Character-farmer.jpeg"

import type { GalleryItem } from "./types";

export const coverDesigns: GalleryItem[] = [
    {
        id: 1,
        title: "Cover Design 1",
        image: crowCover,
        alt: "Book cover of a crow warrior based book",
    },
    {
        id: 2,
        title: "cover Design 2",
        image: farmerCover,
        alt: "Book cover of a farmer based novel",
    }
]