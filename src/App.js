import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './Components';
import { MainPage, BookingPage, ConfirmationPage } from './Pages';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="app">
        <Routes>
          <Route path="/confirm/:bookingId" element={<ConfirmationPage />} />
          <Route path="/:id" element={<BookingPage />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
