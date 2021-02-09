import React, { useEffect, useState } from "react"
import "../MiddleBannerFolder/MiddleBanner.css"
import axios from "../axios"
import requests from "../requests"


function MiddleBanner(params) {
    const [movie,setMovie] = useState([]);

    useEffect(()=>{
        async function fetchData() {
            const request = await axios.get(requests.fetchActionMovies);
            console.log(request.data.results);
            setMovie(
                request.data.results[Math.floor(Math.random()*request.data.results.length - 1)]
            );
            return request;     
        }

        fetchData();

    },[requests.fetchActionMovies])
    console.log(movie);

    function truncate(string,n) {
        return string?.length >n? string.substr(0,n-1) + '....': string;    
    }


    return(
        <header className="banner" style={{
            // https  to original this need to fetch image from netflix
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,  
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}>
            <div className="banner_content">
                <h1 className="banner_title">{movie?.original_title || movie?.title || movie?.name }</h1>
                <div>
                <button class="btn"><i class="fa fa-play"></i> WATCH NOW</button>
                </div>
                <div className="banner_buttons">
                <h1 className="banner_discription">{truncate(movie?.overview,150)}</h1>
                </div>
            </div>

            <div className="banner--fadeBottom"/>
        </header>
    )
    
}

export default MiddleBanner
