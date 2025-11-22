import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Toaster } from '@/components/sonner'
import LoginPage from '@/pages/login-page';
import MainPage from '@/pages/main-page';

export default function App() {
  return (
    <Router>
      <Toaster />
      <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/mainpage" element={<MainPage />} />
      </Routes>
    </Router>
  );
}