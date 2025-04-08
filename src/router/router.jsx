import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Layout1 from "../layout/Layout1";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import ContactUs from "../pages/ContactUs";
import AllSectors from "../pages/InvestGhana/AllSectors";
import AllStates from "../pages/Opportunity/AllStates";
import Careers from "../pages/Careers";
import Budget from "../pages/Budget";
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout1 />}>
      <Route index element={<Home />} />
      <Route path="/allsectors" element={<AllSectors />} />
      <Route path="/allstates" element={<AllStates />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/budget" element={<Budget />} />
      <Route path="/conatctus" element={<ContactUs />} />
    </Route>
  )
);
