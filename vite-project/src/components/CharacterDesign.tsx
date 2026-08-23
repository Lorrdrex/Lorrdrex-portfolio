import Gallery from '../components/Gallery';
import { characterDesigns } from "../data/characterDesign";

export default function CharacterDesign()  {
    return ( 
        <section id="character-design">
            <h2>Character Design</h2>

            <Gallery items={characterDesigns} />
        </section>
    );
}

<div className="gallery">
    {characterDesigns.map((character) => (
        <figure key={character.id}>
            <img 
            src={character.image}
            alt={character.alt}
            />
            <figcaption>{character.title}</figcaption>
        </figure>
    ))}
</div>
      