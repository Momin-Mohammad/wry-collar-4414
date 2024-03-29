import { Routes, Route } from "react-router-dom";
import BrokenPage from "../Components/BorkenPage";
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";
import TimeTrackingPage from "../Pages/TimeTrackingPage";


export default function AllRoutes(){

    return(
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/features/time-tracking" element={<TimeTrackingPage/>}/>
            <Route path="/*" element={<BrokenPage/>}/>
        </Routes>
    )

}