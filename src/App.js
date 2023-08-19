import { useCallback, useEffect, useState } from "react";
import MoviesList from "./MoviesList";
import Button from "./Button";
import classes from "./styles.module.css";
import Card from "./Card";
import AddMovie from "./AddMovie";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading]=useState(false);
  const [err,setErr]=useState(null);

  const hanldeFetch = useCallback(async() => {

    try{

      setIsLoading(true);
      setErr(null);

      const response= await fetch("https://gani-cc0b7-default-rtdb.firebaseio.com/movies.json");

      if(!response.ok){
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      console.log(data);

      const loadedMovies=[];

      for(const key in data){
        loadedMovies.push({
          id:key,
          title:data[key].title,
          text:data[key].text,
          release_date:data[key].release_date,
        });
      }

      setMovies(loadedMovies);
      
    }
    catch(error){
      setErr(error.message);
    }

    setIsLoading(false);
  },[]); 

  useEffect(()=>{
    console.log("Effect");
    hanldeFetch();
  },[hanldeFetch]);


  const handleAddMovie= async (movie)=>{

    console.log(movie);

    const response=await fetch("https://gani-cc0b7-default-rtdb.firebaseio.com/movies.json",{
      method:"POST",
      body:JSON.stringify(movie),
      headers:{
        "Content-Type":"application/json",
      }
    });

    const data=await response.json();

    console.log(data);

  };

  let content =<p>No Movies Found.</p>

  if(isLoading){
    content=<p>Loading...</p>
  }

  if(movies.length>0){
    content=<MoviesList movies={movies} />
  }

  if(err){
    content=<p>{err}</p>
  }


  return (
    <div className={classes.App}>
      <AddMovie onAdd={handleAddMovie}/>
      <Card className={classes["btn-container"]}>
        <Button onClick={hanldeFetch}>Fetch Movies</Button>
      </Card>
      <Card className={classes.movies}>
        {content}
      </Card>
    </div>
  );
}
