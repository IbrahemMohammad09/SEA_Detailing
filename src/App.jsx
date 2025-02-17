import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, useState, useEffect } from "react";

const GiftLoader = lazy (() => import('./components/GifLoader'))
const HomePage = lazy(() => import("./pages/HomePage"));

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
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
