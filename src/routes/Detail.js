import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [details, getDetails] = useState([]);
    const getMovie = async() => {
        const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
        const json = await response.json();
        getDetails(json.data.movie);
        setLoading(false);
        console.log(json.data.movie);
    }
    useEffect(() => {
        getMovie();
    }, []);

    return (
        <div>
            {loading ? <h1>Loading...</h1> : (
                <div style={{backgroundColor:"Mistyrose", borderRadius:10, height:"auto", width:"600px", padding: "10px 20px"}}>
                    <h1>{details.title}</h1>
                    <hr />
                    <img src={details.medium_cover_image} align="left" vspace="10" hspace="15"/>
                    <div style={{backgroundColor:"white", borderRadius:10, padding: "10px 20px"}}>
                        <p>{`개요 : ${details.genres.join('/')} | ${details.runtime}분`}</p>
                        <p>{`개봉 : ${details.year}`}</p>
                        <p>{`평점 : ${details.rating}`}</p>
                    </div>
                    <p style={{backgroundColor:"white", borderRadius:10, padding: "10px 20px"}}>{details.description_intro}</p>
                </div>
            )}
        

        </div>
    );
}

export default Detail;