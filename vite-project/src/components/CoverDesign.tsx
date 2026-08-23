import Gallery from '../components/Gallery';
import { coverDesigns } from "../data/coverDesign";

export default function CoverDesign()  {
    return ( 
        <section id="cover-designs">
            <h2>Cover Designs</h2>

            <Gallery items={coverDesigns} />
        </section>
    );
}
