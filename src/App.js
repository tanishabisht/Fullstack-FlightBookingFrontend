import { HashRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './Components';
import { MainPage, BookingPage, ConfirmationPage, ErrorPage } from './Pages';

function App() {
  return (
    <HashRouter>
      <Navbar />
      <div className="app">
        <Routes>
          <Route path="/confirm/:bookingId" element={<ConfirmationPage />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="/booking/:flightId" element={<BookingPage />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
