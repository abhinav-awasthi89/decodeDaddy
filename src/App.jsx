import './App.css';
import '@fortawesome/fontawesome-free/css/all.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Scroller from './components/ScrollEffects/Scroller';
import VerticalScroll from './components/ScrollEffects/VerticalScroll';
import Footer from './components/Footer/Footer'
import SecondPage from './components/SecondPage/SecondPage';

function App() {

  return (
    <div className="App">
      <div className='right-div'>
        <Navbar />
        <Hero />
        <Scroller />
        <SecondPage />
        <Footer />

      </div>
      <div className='left-bar'>
        <VerticalScroll />
      </div>

    </div>
  );
}

export default App;
