import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Home/Home.jsx";
import LogIn from "./LogIn/LogIn.jsx";
import Register from "./Register/Register.jsx";
import EventDetails from "./EventDetails/EventDetails.jsx";
import { BookingDataProvider } from "./Context/BookingContext.jsx";
import MyBooking from "./MyBooking/MyBooking.jsx";
import AuthProvider from "./Providers/AuthProvider";
import PrivateRoute from "./routes/PrivateRoute.jsx";
import YourReview from "./YourReview/YourReview.jsx";
import ErrorPage from "./error/ErrorPage.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/login",
        element: <LogIn />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/register",
        element: <Register />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/event-details/:id",
        element: (
          <PrivateRoute>
            <EventDetails />,
          </PrivateRoute>
        ),
        errorElement: <ErrorPage />,
        loader: () => fetch("data.json"),
      },
      {
        path: "/my-booking",
        element: (
          <PrivateRoute>
            <MyBooking />
          </PrivateRoute>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: "/review",
        element: (
          <PrivateRoute>
            <YourReview />{" "}
          </PrivateRoute>
        ),
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <BookingDataProvider>
        <RouterProvider router={router} />
      </BookingDataProvider>
    </AuthProvider>
  </React.StrictMode>
);
