import Gallery from '../components/Gallery';
import { mapDesigns } from "../data/mapDesign";

export default function MapDesign()  {
    return ( 
        <section id="map-designs">
            <h2>Map Designs</h2>

            <Gallery items={mapDesigns} />
        </section>
    );
}
