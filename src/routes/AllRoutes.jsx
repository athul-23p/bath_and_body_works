import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";


function AllRoutes(){
    return <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/sign-in' element={<SignIn />} />
    </Routes>
}

export default AllRoutes;