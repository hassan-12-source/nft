import './App.css';
import Collection from './Components/Collection/Collection';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Mint from './Components/Mint/Mint';
import Roadmap from './Components/Roadmap/Roadmap';
import card from './Components/Roadmap/data';
import Team from './Components/Team/Team';
import team from './Components/Team/data';
import Faq from './Components/Faq/Faq';
import Join from './Components/Join/Join';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Collection />
      <Mint />
      <Roadmap data={card} />
      <Team data={team} />
      <Faq />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
