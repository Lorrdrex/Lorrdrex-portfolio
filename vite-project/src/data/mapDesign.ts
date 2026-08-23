import mapDesign from "../assets/images/Map-design.jpg"
import mordernCityMap from "../assets/images/Modern-citymap.jpeg"

import type { GalleryItem } from "./types";

export const mapDesigns: GalleryItem[] = [
    {
        id: 1,
        title: "Map 1",
        image: mapDesign,
        alt: "Illustration of Royalties in a throne room ",
    },
    {
        id: 2,
        title: "Map 2",
        image: mordernCityMap,
        alt: "Illustration of polar warriors",
    },
]