import logo from './logo.svg';
import './App.css';
import TitleComponent from './Components/TitleComponent';
import ButtonComponent from './Components/ButtonComponent';

function App() {
  return (
    <div className="App">
        <header className="App-header">
            <TitleComponent></TitleComponent>
            <ButtonComponent/>
        </header>
    </div>
  );
}

export default App;
