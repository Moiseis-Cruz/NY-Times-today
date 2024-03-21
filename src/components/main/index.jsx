import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

async function getDatos(){
    const response = await fetch("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=0wYvx3BOlpmF8IVe2RIV0DK1IZv7vXY1");
    const data = await response.json();
    return data.results
}

export const Main = () => {

    const [ homeNews, setHomeNews ] = useState({
        newsList: []
    })

    useEffect( () => {
        const fetchData = async () => {
            const data = await getDatos();

            setHomeNews({
                newsList: data
            })
        }

        fetchData()
    }, [])

    return(
        <section>
            <ul>
                {
                    homeNews.newsList.map((item, index) => {
                        return(
                            <li key={index} style={{border: "2px solid green"}}>
                                <Link to={`/news/${item.id}`}>
                                    <div>
                                        <h2>{item.title}</h2>
                                        {homeNews.newsList === null || homeNews.newsList === undefined ? <img src={item.multimedia[1].url} /> : <p>Imagem não disponível</p>}
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

/*

{homeNews.newsList !== null && homeNews.newsList !== undefined ? <img src={item.multimedia[1].url} alt={item.title} /> : <p>Imagem não disponível</p>}

*/