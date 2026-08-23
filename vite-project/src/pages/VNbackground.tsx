import Gallery from '../components/Gallery';
import { vnBackgrounds } from "../data/vnBackgrounds";

export default function VNbackgrounds()  {
    return ( 
        <section id="vn-backgrounds">
            <h2>VN Backgrounds</h2>

            <Gallery items={vnBackgrounds} />
        </section>
    );
}
