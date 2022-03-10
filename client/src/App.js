import './App.css';
import Main from "./components/Main";
import { BrowserRouter } from "react-router-dom";
import NavBar from './components/NavBar';

function App() {
  return (

    <div className="App">
      <BrowserRouter>
       <NavBar />
        <h1>APP AFINIDAD</h1>
        <br />
        <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
