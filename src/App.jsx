import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import About from './pages/About';
// import Projects from './pages/Projects';
// import Contact from './pages/Contact';

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </HashRouter>
    </>
  );
}
export default App;
