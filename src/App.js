import logo from './logo.svg';
import './App.css';
import Amelia from './components/Amelia'
import Karoline from './components/Karoline'
import Julia from './components/Julia'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Amelia />
        <Karoline />
      </header>
    </div>
  );
}

export default App;
