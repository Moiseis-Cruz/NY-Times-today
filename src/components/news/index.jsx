import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

async function getDatos(section){
    const response = await fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=0wYvx3BOlpmF8IVe2RIV0DK1IZv7vXY1/${section}`);
    const data = await response.json()
    return data
}

export const News = () => {

    const { section } = useParams()

    const [ news, setNews ] = useState()

    useEffect( () => {
        const fetchData = async () => {
            const data = await getDatos(section);

            setNews(data)
        }

        fetchData()
    }, [])

    return(
        <section>
            <Link to={"/"}>Voltar ao início!</Link>
            <div>
                <h2>{news.title}</h2>
            </div>
        </section>
    )
}