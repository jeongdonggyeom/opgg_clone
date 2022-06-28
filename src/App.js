import Page from './component/Page';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from './component/search';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page/>} />
        <Route path="/search" element={<Search/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
