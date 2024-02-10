import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Posts } from "../pages/posts"

export const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Posts />}/>
            </Routes>
        </BrowserRouter>
    )
}