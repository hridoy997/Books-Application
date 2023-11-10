import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Review from './Components/Review/Review';
import DashBord from './Components/DashBord/DashBord';
import Blogs from './Components/Blogs/Blogs';
import About from './Components/About/About';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/review' element={<Review/>}></Route>
        <Route path='/dashBord' element={<DashBord/>}></Route>
        <Route path='/blogs' element={<Blogs/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
