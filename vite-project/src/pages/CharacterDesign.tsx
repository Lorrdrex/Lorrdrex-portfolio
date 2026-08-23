import Gallery from '../components/Gallery';
import { characterDesigns } from "../data/characterDesigns";

export default function CharacterDesign()  {
    return ( 
        <section id="character-designs">
            <h2>Character Designs</h2>

            <Gallery items={characterDesigns} />
        </section>
    );
}
