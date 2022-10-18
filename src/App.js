import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './Components';
import { MainPage, BookingPage } from './Pages';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="app">
        <Routes>
          <Route path="/:id" element={<BookingPage />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
