import Description from './Description';
import Footer from './Footer';
import logo from './logo.svg';

import "./Navbar"; 
import Navbar from './Navbar';
import Workshops from './Workshop';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Description/>
      <Workshops/>
      <Footer/>
    </div>
  );
}

export default App;
