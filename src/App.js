import Page from './component/Page';
import './styleComponent/app.css';
import './styleComponent/darkmode.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from './component/search';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page/>} basename="page"></Route>
        <Route path="/search" element={<Search/>} basename="search"></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
