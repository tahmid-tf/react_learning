import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFoundPage";
import JobPage, { jobLoader } from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage";

const App = () => {
  // Add new job
  const addJob = async (newJob) => {
    const res = await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newJob),
    });

    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout></MainLayout>}>
        <Route index element={<HomePage></HomePage>} />
        <Route path="/jobs" element={<JobsPage></JobsPage>} />
        <Route
          path="/add-job"
          element={<AddJobPage addJobSubmit={addJob}></AddJobPage>}
        />
        <Route path="/jobs/:id" element={<JobPage />} loader={jobLoader} />

        <Route
          path="/edit-job/:id"
          element={<EditJobPage />}
          loader={jobLoader}
        />

        <Route path="*" exact={true} element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
