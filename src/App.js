import logo from './logo.svg';
import './App.css';
import Weather from './Weather';
import Search from './Search';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <div className="container">
    
      <Search/>
        <Weather defaultCity="Rio de Janeiro"/>
      

      </div>
      <Footer />
    </div>
  );
}

export default App;
