import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

async function getDatos(id){
    const response = await fetch(`https://api.nytimes.com/svc/topstories/v2/home/${id}.json?api-key=0wYvx3BOlpmF8IVe2RIV0DK1IZv7vXY1`);
    const data = await response.json();
    console.log(data);
    return data
}

export const News = () => {

    const { id } = useParams()

    const [ news, setNews ] = useState('')

    useEffect( () => {
        const fetchData = async () => {
            const data = await getDatos(id);
            console.log(data);

            setNews(data)
        }

        fetchData()
    }, [])

    return(
        <section>
            <Link to="/">Home</Link>
            <div>
                <h2>{news.title}</h2>
            </div>
        </section>
    )
}