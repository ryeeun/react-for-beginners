import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";

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
            <div>
            {loading ? (
                <div className={styles.loader}>
                    <span>Loading...</span> 
                </div>
                ) : (
                <div className={styles.details}>
                    <img src={details.medium_cover_image} className={styles.details_img}/>
                    <div>
                        <h1>{details.title}</h1>
                        <div>
                            <p>{`개요 : ${details.genres.join('/')} | ${details.runtime}분`}</p>
                            <p>{`개봉 : ${details.year}`}</p>
                            <p>{`평점 : ${details.rating}`}</p>
                        </div>
                        <p>{details.description_intro}</p>
                    </div>
                </div>
            )}
            </div>        
        </div>
    );
}

export default Detail;