import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy } from "react";
import GifLoader from "./components/GifLoader";
const HomePage = lazy(() => import("./pages/HomePage"));

function App() {
  return (
    <>
      <BrowserRouter>
        <GifLoader />

        <Routes>
          <Route index element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
