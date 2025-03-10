import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy, useState, useEffect } from "react";



const GiftLoader = lazy(() => import("./components/GifLoader"));
const HomePage = lazy(() => import("./pages/HomePage"));
const BookService = lazy(() => import("./pages/BookService"));
const SuccessfulMessage = lazy(() => import("./pages/SuccessfulMessage"));


const NotFoundPage = lazy (()=> import('./pages/Error'))



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
        <Route path="/book-service" element={<BookService />} />
        <Route path="/order-successful" element={<SuccessfulMessage />} />

        <Route path="/error" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/error" replace />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
