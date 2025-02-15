import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy } from "react";

const HomePage = lazy(() => import("./pages/HomePage"));
const ContactUs = lazy(() => import("./sections/ContactUs"));

function App() {
  
  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/contact-us" element={< ContactUs/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
