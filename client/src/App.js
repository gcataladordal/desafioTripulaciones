import './App.css';
import Main from "./components/Main";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <h1>Hola</h1>
        <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
