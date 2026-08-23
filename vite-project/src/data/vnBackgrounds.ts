import moraleCity from "../assets/images/morale-city.jpg"
import classroomBackground from "../assets/images/Classroom-background.jpg"
import classroomBackground2 from "../assets/images/classroom-background2.jpg"
import roomBackground from "../assets/images/Room-background.jpg"


import type { GalleryItem } from "./types";

export const vnBackgrounds: GalleryItem[] = [
    {
        id: 1,
        title: "V.N Background 1",
        image: moraleCity,
        alt: "Character design of a medieval-swordsman",
    },
    {
        id: 2,
        title: "V.N Background 2",
        image: classroomBackground,
        alt: "Character design of a medival-warrior",
    },
    {
        id: 3,
        title: "V.N Background 3",
        image: classroomBackground2,
        alt: "Character design of a medieval-maskedmage",
    },
    {
        id: 4,
        title: "V.N Background 4",
        image: roomBackground,
        alt: "Character design of a medieval-cavalry",
    }
]