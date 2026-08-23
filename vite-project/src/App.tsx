import './index.css'
import About from './pages/About'
import Header from './pages/Header'
import CharacterDesign from './pages/CharacterDesign'
import Contact from './pages/Contact'
import Footer from './pages/Footer'
import Illustrations from './pages/Illustrations'
import MapDesign from './pages/MapDesign'
import MedievalArts from './pages/MedievalArts'
import CoverDesign from './pages/CoverDesign'
import VNbackground from './pages/VNbackground'

export default function App() {
  return (
    <>
      <Header />

      <main>
        <About />
        <CharacterDesign />
        <CoverDesign />
        <Illustrations />
        <MapDesign />
        <MedievalArts />
        <VNbackground />
        <Contact />
      </main>

      <Footer />
    </>
  );
}