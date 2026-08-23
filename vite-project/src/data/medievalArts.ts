import medievalSwordsman from "../assets/images/medieval-swordsman.jpg"
import medivalWarrior from "../assets/images/medival-warrior.jpg"
import medievalMaskedmage from "../assets/images/medieval-maskedmage.jpg"
import medievalCavalry from "../assets/images/medieval-cavalry.jpg"


import type { GalleryItem } from "./types";

export const medievalArts: GalleryItem[] = [
    {
        id: 1,
        title: "Medieval Art 1",
        image: medievalSwordsman,
        alt: "Character design of a medieval-swordsman",
    },
    {
        id: 2,
        title: "Medieval Art 2",
        image: medivalWarrior,
        alt: "Character design of a medival-warrior",
    },
    {
        id: 3,
        title: "Medieval Art 3",
        image: medievalMaskedmage,
        alt: "Character design of a medieval-maskedmage",
    },
    {
        id: 4,
        title: "Medieval Art 4",
        image: medievalCavalry,
        alt: "Character design of a medieval-cavalry",
    }
]