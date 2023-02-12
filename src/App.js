import './App.css';
import Navbar from './Components/Navbar.js';
import Slideshow from './Components/Slideshow.js';

function App() {
  return (
    <div className="App">
      <Navbar />

      <marquee className="moving-text" width="100%" direction="left" height="100px">
        A D M I S S I O N S  &nbsp; &nbsp;   O P E N &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; |&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; W E ' R E &nbsp; &nbsp; H I R I N G&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; |&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; B R O C H U R E
      </marquee>

      <Slideshow />
    </div>
  );
}

export default App;
