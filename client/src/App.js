import './App.css';
import Main from "./components/Main";
import { BrowserRouter } from "react-router-dom";
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <NavBar />
        <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
