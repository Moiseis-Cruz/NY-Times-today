import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

async function getDatos(){
    const response = await fetch("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=0wYvx3BOlpmF8IVe2RIV0DK1IZv7vXY1");
    const data = await response.json()
    return data.results
}

export const Main = () => {

    const [ news, setNews ] = useState({
        newsList: []
    })

    useEffect( () => {
        const fetchData = async () => {
            const data = await getDatos();

            setNews({
                newsList: data
            })
        }

        fetchData()
    }, [])

    return(
        <section>
            <ul>
                {
                    news.newsList.map((item, index) => {
                        return(
                            <li key={index} style={{border: "2px solid green"}}>
                                <Link to="/news">
                                    <div>
                                        <h2>{item.title}</h2>
                                        {news.newsList === null || news.newsList === undefined ? <img src={item.multimedia[1].url} /> : <p>Imagem não disponível</p>}
                                    </div>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}