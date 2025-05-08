import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Layout1 from "../layout/Layout1";
import Blog from "../pages/Blog";
import ContactUs from "../pages/ContactUs";
import AllStates from "../pages/Opportunity/AllStates";
import Careers from "../pages/Careers";
import AllSectors from "../pages/Opportunity/AllSectors";
import Home from "../pages/Home/Home";
import Opportunity from "../pages/Home/Opportunity";
import Budget from "../components/GhanaOpportunity/Budget/Budget";
import About from "../pages/About/About";
import Latest from "../pages/Latest/Latest";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout1 />}>
      <Route index element={<Home />} />
      <Route path="/allsectors" element={<AllSectors />} />
      <Route path="/allstates" element={<AllStates />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/conatctus" element={<ContactUs />} />
      <Route path="/opportunity" element={<Opportunity />} />
      <Route path="/budget" element={<Budget />} />
      <Route path="/about" element={<About />} />
      <Route path="/latest" element={<Latest />} />

    </Route>
  )
);
