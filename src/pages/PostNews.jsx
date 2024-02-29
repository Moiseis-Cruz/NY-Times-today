import React from "react";
import { Link } from "react-router-dom";
import { News } from "../components/news";

export const PostNews = () => {
    return(
        <div>
            <Link to="/">Voltar ao Home</Link>
            <h1>Post de Notícias!</h1>
            <News />
        </div>
    )
}