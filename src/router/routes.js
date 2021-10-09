import ProfilePage from "../pages/ProfilePage/ProfilePage";
import SummaryPage from "../pages/SummaryPage/SummaryPage";

export const routes = [
  { path: "/profile", component: ProfilePage, exact: true, link: "Profile" },
  { path: "/summary", component: SummaryPage, exact: true, link: "Summary" },
];
