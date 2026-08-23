import './index.css'
import About from './components/About'
import Header from './components/Header'
import CharacterDesign from './components/CharacterDesign'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Illustrations from './components/Illustrations'
import MapDesign from './components/MapDesign'
import MedievalArts from './components/MedievalArts'
import CoverDesign from './components/CoverDesign'
import VNbackground from './components/VNbackground'

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