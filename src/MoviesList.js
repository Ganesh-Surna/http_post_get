import { Fragment } from "react";
import Movie from "./Movie";
import classes from "./MoviesList.module.css";

const MoviesList=(props)=>{
 
    return(
        <Fragment>
            <ul className={classes.list}>
                {props.movies.map((movie)=>{
                    return <Movie key={movie.id} movie={movie} />
                })}
            </ul>
        </Fragment>
    );

};
export default MoviesList;