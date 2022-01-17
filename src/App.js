import "./App.css";
import Navbar from './components/Navbar';
import Cards from './components/Cards';

function App() {
  return <div className="App">
    <header>
      <nav>
        <Navbar />
      </nav>
    </header>
    <main>
      <Cards />
      <Cards/>
    </main>
  </div>
  
}

export default App;
