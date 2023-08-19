import classes from "./Movie.module.css";
import Card from "./Card";

const Movie=(props)=>{

    const {title,text}=props.movie;

    return(
        <Card className={classes.movie}>
            <li>
                <h2>{title}</h2>
                <p>{text}</p>
            </li>
        </Card>
    );

};
export default Movie;