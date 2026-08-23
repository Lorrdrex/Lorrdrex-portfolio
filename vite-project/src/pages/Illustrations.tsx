import Gallery from '../components/Gallery';
import { illustrations } from "../data/illustrations";

export default function Illustrations()  {
    return ( 
        <section id="illustrations">
            <h2>Illustrations</h2>

            <Gallery items={illustrations} />
        </section>
    );
}
