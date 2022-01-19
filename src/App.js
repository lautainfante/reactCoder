import "./App.css";
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import Cont from './components/ItemCounter' ;

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
      <Cont />
    </main>
  </div>
  
}

export default App;
