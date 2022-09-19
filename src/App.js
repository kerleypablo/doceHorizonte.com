import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
    <div className='home'>
      <Routes>
        <Route exact path='/' element={ <Home/> } />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
