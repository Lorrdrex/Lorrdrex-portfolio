import Gallery from '../components/Gallery';
import { medievalArts } from "../data/medievalArts";

export default function MedievalArts()  {
    return ( 
        <section id="medieval-arts">
            <h2>Medieval Arts</h2>

            <Gallery items={medievalArts} />
        </section>
    );
}
