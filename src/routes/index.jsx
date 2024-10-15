import { DashboardAsideMenu } from "@/constants";
import { AuthLayout, DashboardLayout } from "@/layouts";
import { ForgotPassword, Login, Otp } from "@/pages/Authentication";
import { Dashboard, GoalSetting, Statistics, WorkoutLog } from "@/pages/Main";
import { createBrowserRouter } from "react-router-dom";

const FitenessPilotRoute = createBrowserRouter(
  /* All Paths */
  [
    {
      path: "/",
      children: [
        {
          element: <DashboardLayout items={DashboardAsideMenu} />,
          children: [
            {
              index: true,
              element: <Dashboard />,
            },
            {
              path: "workout-log",
              element: <WorkoutLog />,
            },
            {
              path: "statistics",
              element: <Statistics />,
            },
            {
              path: "goals",
              element: <GoalSetting />,
            },
          ],
        },
        {
          /* Authentication Routes For Super Admin */
          element: <AuthLayout />,
          children: [
            {
              path: "login",
              element: <Login />,
            },
            {
              path: "forgot-password",
              element: <ForgotPassword />,
            },
            {
              path: "otp",
              element: <Otp />,
            },
          ],
        },
      ],
    },
    {
      /* Default Route (404) */
      path: "*",
      element: <>404 - Page Not Found</>,
    },
  ],
  {
    /* Base URL */
    basename: "/",
  }
);

export default FitenessPilotRoute;
