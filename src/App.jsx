import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, useState, useEffect } from "react";

const GiftLoader = lazy(() => import("./components/GifLoader"));
const HomePage = lazy(() => import("./pages/HomePage"));
const BookService = lazy(() => import("./pages/BookService"));

const DashboardLogin = lazy(()=> import('./components/dashboard/Login'))

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={isLoading ? <GiftLoader /> : <HomePage />} />
        <Route path="/book-service" element={isLoading ? <GiftLoader /> : <BookService />} />
        <Route path="/login" element={<DashboardLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
