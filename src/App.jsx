import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy, useState, useEffect } from "react";
// import ProtectedRoute from "./components/ProtectedRoute";


const GiftLoader = lazy(() => import("./components/GifLoader"));
const HomePage = lazy(() => import("./pages/HomePage"));
const BookService = lazy(() => import("./pages/BookService"));
const SuccessfulMessage = lazy(() => import("./pages/SuccessfulMessage"));

// const DashboardLogin = lazy(() => import("./components/dashboard/Login"))
// const DashboardPages = {
//    DashboardHome : lazy(() => import("./components/dashboard/Home")),
//    DashboardOrder : lazy(() => import("./components/dashboard/Order")),
//    DashboardPortfolio : lazy(() => import('./components/dashboard/Portfolio')),
// };


const NotFoundPage = lazy (()=> import('./pages/Error'))



// useEffect(() => {
//   // Request permission to send notifications
//   Notification.requestPermission().then(permission => {
//     if (permission === "granted") {
//       console.log("Notification permission granted.");

//       // Get FCM token
//       messaging.getToken({ vapidKey: 'BJjrKUjYNsCCQRC1aWvlbUjOe1DNtcu0Hv6PgT1EQvTFddzOVfIiBzbh_QN1TvfWGH256f4S8WMsMfSZeQIA_EY' })
//         .then(token => {
//           if (token) {
//             console.log("FCM Token:", token);
//             // You need to send this token to your Django backend to store it
//           } else {
//             console.log("No FCM token available.");
//           }
//         })
//         .catch(err => {
//           console.log("Error getting FCM token:", err);
//         });
//     } else {
//       console.log("Notification permission denied.");
//     }
//   });
// }, []);


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

        {/* <Route path="/login" element={<DashboardLogin />} /> */}

        {/* {Object.entries({
          "/dashboard-home":DashboardPages.DashboardHome,
          "/dashboard-order":DashboardPages.DashboardOrder,
          "/dashboard-portfolio":DashboardPages.DashboardPortfolio
        }).map(([path, Component])=>(
          <Route key={path} path={path} element={<ProtectedRoute><Component /></ProtectedRoute>} />
        ))} */}


        <Route path="/error" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/error" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
