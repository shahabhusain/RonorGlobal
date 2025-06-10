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
import AllSectors from "../pages/Opportunity/AllStates";
import Home from "../pages/home/Home";
import Opportunity from "../pages/home/Opportunity";
import Budget from "../components/GhanaOpportunity/Budget/Budget";
import About from "../pages/About/About";
import Latest from "../pages/Latest/Latest";
import Contact from "../components/Contact";
import Ghana from "../pages/About/Ghana";
import Bonded from "../pages/About/Bonded";
import District from "../pages/About/District";
import Tender from "../pages/About/Tender";
import NewApplication from "../pages/About/NewApplication";
import Collaborate from "../pages/About/Collaborate";
import CareerDetail from "../pages/CareerDetail";
import BlogDeatil from "../pages/BlogDeatil";
import CivilAviationsPage from "../pages/AllStates/CivilAviationsPage";
import Construction from "../pages/AllStates/Construction";
import CapitalGoods from '../pages/AllStates/CapitalGoods'
import Beautiful from '../pages/AllStates/Beautiful'
import Germs from '../pages/AllStates/Germs'
import Jewelery from '../pages/AllStates/Jewelery'
import AgricultureAgroProcessing from "../pages/home/AllSectors/AgricultureAgroProcessing";
import Oil from "../pages/home/AllSectors/Oil";
import Health from "../pages/home/AllSectors/Health";
import Ict from "../pages/home/AllSectors/Ict";
import Manufacture from "../pages/home/AllSectors/Manufacture";
import Mining from "../pages/home/AllSectors/Mining";
import Property from "../pages/home/AllSectors/Property";
import Recreation from "../pages/home/AllSectors/Recreation";
import Energy from "../pages/home/AllSectors/Energy";
import Education from "../pages/home/AllSectors/Education";
import Financial from "../pages/home/AllSectors/Financial";
import Transport from "../pages/home/AllSectors/Transport";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout1 />}>
      <Route index element={<Home />} />
      <Route path="/allsectors" element={<AllSectors />} />
      <Route path="/allstates" element={<AllStates />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/civil" element={<CivilAviationsPage />} />
      <Route path="/construction" element={<Construction />} />
      <Route path="/capital" element={<CapitalGoods />} />
      <Route path="/germs" element={<Germs />} />
      <Route path="/jewelery" element={<Jewelery />} />
            <Route path="/beautiful" element={<Beautiful />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blogdetail/:id" element={<BlogDeatil />} />
      <Route path="/careersdetail" element={<CareerDetail />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/opportunity" element={<Opportunity />} />
      <Route path="/budget" element={<Budget />} />
      <Route path="/about" element={<About />} />
      <Route path="/latest" element={<Latest />} />
      <Route path="/ghana" element={<Ghana />} />
      <Route path="/bonded" element={<Bonded />} />
      <Route path="/district" element={<District />} />
      <Route path="/tender" element={<Tender />} />
       <Route path="/collaborate" element={<Collaborate />} />
       <Route path="/newapplication" element={<NewApplication />} />
        <Route path="/agriculture" element={<AgricultureAgroProcessing />} />
         <Route path="/oil" element={<Oil />} />
          <Route path="/health" element={<Health />} />
           <Route path="/ict" element={<Ict />} />
            <Route path="/manufacture" element={<Manufacture />} />
             <Route path="/mining" element={<Mining />} />
              <Route path="/property" element={<Property />} />
               <Route path="/recreation" element={<Recreation />} />
                <Route path="/energy" element={<Energy />} />
                 <Route path="/education" element={<Education />} />
                  <Route path="/financial" element={<Financial />} />
                   <Route path="/transport" element={<Transport />} />

    </Route>
  )
);
