import React from "react";
import { Link } from "react-router-dom";

export const ErrorPage = () => {
    return(
        <div>
            <Link to="/">Voltar ao Home</Link>
            <h1>Error: 404!</h1>
        </div>
    )
}