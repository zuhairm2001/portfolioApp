import logo from './logo.svg';
import './App.css';
import TitleComponent from './Components/TitleComponent';
import ButtonComponent from './Components/ButtonComponent';
import FooterComponent from "./Components/FooterComponent";

function App() {
  return (
    <div className="App flex flex-col min-h-screen">
        <header className="App-header flex-grow">
            <div className="w-full justify-center">
                <TitleComponent></TitleComponent>
            </div>
            <ButtonComponent />
        </header>

        <FooterComponent />
    </div>
  );
}

export default App;
