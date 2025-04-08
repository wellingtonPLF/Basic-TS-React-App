import {Route, BrowserRouter, Routes} from "react-router-dom";
import HomePageComponent from './pages/HomePage/homeScript.tsx';

const AppRouter = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route element = { <HomePageComponent /> }  path="/" />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;