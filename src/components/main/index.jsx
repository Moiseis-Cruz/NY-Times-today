import { useEffect, useState } from "react";

async function getDatos(){
    const response = await fetch("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=0wYvx3BOlpmF8IVe2RIV0DK1IZv7vXY1");
    const data = await response.json()
    console.log(data.results);
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
                            <li key={index}>
                                <div>
                                    <h2>{item.title}</h2>
                                    {/* <img src={item.multimedia[1].url} /> */}
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}