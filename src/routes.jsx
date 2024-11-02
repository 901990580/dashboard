import Students from "./pages/Students";
import Teachers from "./pages/Teachers";
import Groups from "./pages/Groups";
import Settings from "./pages/Settings";
import NewDashboard from "./pages/Dashboard";

export const routes = [
  { path: "/", element: <NewDashboard /> },
  { path: "/students", element: <Students /> },
  { path: "/teachers", element: <Teachers /> },
  { path: "/groups", element: <Groups /> },
  { path: "/settings", element: <Settings /> },
];
