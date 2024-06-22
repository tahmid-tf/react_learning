import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(<Route index element={<h1>My App</h1>} />)
);

import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import Card from "./components/Card";
import JobListings from "./components/JobListings";
import ViewAllJobs from "./components/ViewAllJobs";

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
