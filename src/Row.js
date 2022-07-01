import axios from "./axios";
import React, {useState, useEffect} from "react";
import "./Row.css";
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies,setMovie] = useState([]);
    const[trailerUrl,setTrailerUrl] = useState("");

    //snippet of code that runs on a specific condition
    useEffect(() => {
        async function fetchData () {
            const request = await axios.get(fetchUrl);
            console.log(request);
            setMovie(request.data.results);
            return request;
        }
        fetchData();    
    }, [fetchUrl]); 
    /*sq bracket shows what is it dependent on or how many times it'll run after row loading once*/

    const opts = {
        height : "390",
        width : "100%" ,
        playerVars : {
           // https://developers.google.com/youtube/player_parameters        
        autoplay : 1,
        }
    }

    const handleClick = (movie) => {
        if (trailerUrl) {     
            setTrailerUrl('');     //If trailer url open then close it
        }else{
            movieTrailer(movie?.name || "") //movieTrailer is npm module
            .then(url => {
                const urlParams = new URLSearchParams(new URL(url).search); //searches for everything after ? in youtube link 
                setTrailerUrl(urlParams.get(''));
            }).catch(console.error());
        }

    }

    return (
        <div className="row">
            <h1 >{title}</h1> 

            <div className="row-posters">
                {movies.map(movie => (
                    <img 
                    key={movie.id} //If an image needs to render, the entire row shouldnt render(saves time!)
                    onClick={() => handleClick(movie)}
                    className={`row-poster ${isLargeRow && "row-posterLarge"}`} 
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                    alt = {movie.name} 

                    />
                ))}
            </div>
            {trailerUrl && <YouTube videoId="trailerUrl" opts={opts} />} 
             
        </div>
        ///When trailer Url is fetched then youtube video shown
    );
}

export default Row;