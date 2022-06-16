import { Route, Routes } from "react-router-dom";
import Billing from "../pages/Billing";
import Home from "../pages/Home";
import Shipping from "../pages/Shipping";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";


function AllRoutes(){
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/checkout/shipping"  element={<Shipping/>}/>
        <Route path='/checkout/billing' element={<Billing/>} />
        <Route path='/checkout/review-and-submit' />
      </Routes>
    );
}

export default AllRoutes;