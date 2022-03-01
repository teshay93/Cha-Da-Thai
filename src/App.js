import './App.css';
import Navbar from './components/Navbar/Navbar';
import AboutUs from './container/AboutUs/AboutUs';
import FIndUs from './container/FindUs/FindUs';
import Header from './container/Header/Header';
import Menu from './container/Menu/Menu';
import Footer from './container/Footer/Footer';

function App() {
  return (
    <div className="App">
   <Navbar />
   <Header />
   <AboutUs />
   <Menu />
   <FIndUs />
   <Footer />
    </div>
  );
}

export default App;
