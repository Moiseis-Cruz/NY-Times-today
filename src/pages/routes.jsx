import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Posts } from "../pages/posts"
import { PostNews } from "./post-news";

export const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Posts />}/>
                <Route exact path="/news/:section" element={<PostNews />}/>
            </Routes>
        </BrowserRouter>
    )
}