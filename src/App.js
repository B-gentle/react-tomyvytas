import './App.css';
import About from './components/about/About';
import Contact from './components/Contacts/Contact';
import Footer from './components/footer/Footer';
import Banner from './components/HeaderSection/Banner';
import Navbar from './components/Navbar/Navbar';
import OpeningHours from './components/OpeningHours/OpeningHours';
import Services from './components/Services/Services';
import WelcomeAddress from './components/WelcomeAddress/WelcomeAddress';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Banner />
     <Services />
     <OpeningHours />
     <Contact />
     <About />
     <WelcomeAddress />
     <Footer />
    </div>
  );
}

export default App;
