import comicIllustration from "../assets/images/Royal-illustration.jpg";
import battleIllustration from "../assets/images/Dual-elemental-warrior.jpeg"
import illustration from "../assets/images/grim-reaper.jpeg" 
import nightIllustration from "../assets/images/Shadow-slayer.jpeg"
import natureIllustration from "../assets/images/Reptilian-thor.png"
import fantasyIllustration from "../assets/images/Rodent-musician.png"

import type { GalleryItem } from "./types";

export const illustrations: GalleryItem[] = [
    {
        id: 1,
        title: "Illustration 1",
        image: comicIllustration,
        alt: "Illustration of Royalties in a throne room ",
    },
    {
        id: 2,
        title: "Illustration 2",
        image: battleIllustration,
        alt: "Illustration of polar warriors",
    },
    {
        id: 3,
        title: "Illustration 3",
        image: illustration,
        alt: "Illustration of grim reaper, his scythe and pet",
    },
    {
        id: 4,
        title: "Illustration 4",
        image: nightIllustration,
        alt: "Illustration of a armed three piece suited guy in a mordern city",
    },
    {
        id: 5,
        title: "Illustration 5",
        image: natureIllustration,
        alt: "Illustration of a thunder lizard king with his weapon",
    },
    {
        id: 6,
        title: "Illustration 6",
        image: fantasyIllustration,
        alt: "Illustration of guitarist",
    }
]