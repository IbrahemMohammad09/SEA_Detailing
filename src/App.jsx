import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, useState, useEffect } from "react";

const GiftLoader = lazy(() => import("./components/GifLoader"));
const HomePage = lazy(() => import("./pages/HomePage"));
const BookService = lazy(() => import("./pages/BookService"));
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
      {isLoading ? (
        <GiftLoader />
      ) : (
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/book" element={<BookService />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
