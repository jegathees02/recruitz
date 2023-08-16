import './App.css';
import CameraApp from './components/detecting';
import Result from './components/resultHistogram'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/home'
import Login from'./components/login'
import Signup from'./components/signup'
import Feedback from './components/feedback';
import Edit from './components/edit'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/result'element={<Result/>}/>
        <Route path='/camera'element={<CameraApp/>}/>
        <Route path='/login'element={<Login/>}/>
        <Route path='/signup'element={<Signup/>}/>
        <Route path='/feedback'element={<Feedback/>}/>
        <Route path='/edit' element={<Edit/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
