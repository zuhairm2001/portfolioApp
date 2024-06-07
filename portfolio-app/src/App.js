import logo from './logo.svg';
import './App.css';
import TitleComponent from './Components/TitleComponent';
import ButtonComponent from './Components/ButtonComponent';

function App() {
  return (
    <div className="App">
        <header className="App-header">
            <div className="w-full justify-center">
                <TitleComponent></TitleComponent>
            </div>
            <ButtonComponent />
        </header>
    </div>
  );
}

export default App;
