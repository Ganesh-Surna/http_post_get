import Card from "./Card";
import Button from "./Button";
import classes from "./AddMovie.module.css";
import { useRef } from "react";

const AddMovie =(props)=>{

    const titleInputRef=useRef();
    const textInputRef=useRef();
    const dateInputRef=useRef();

    const handleSubmit=(event)=>{
        event.preventDefault();

        const title=titleInputRef.current.value;
        const text=textInputRef.current.value;
        const date=dateInputRef.current.value;

        const movie={
            title:title,
            text:text,
            release_date:date,
        }

        props.onAdd(movie);
    };

    return(
        <Card className={classes.form}>
            <form onSubmit={handleSubmit}>
                <div className={classes["input-grp"]}>
                    <label htmlFor="title">Title</label>
                    <input id="title" type="text" ref={titleInputRef} required />
                </div>
                <div className={classes["input-grp"]}>
                    <label htmlFor="text">Text</label>
                    <textarea id="text" type="text" ref={textInputRef} rows="4" required></textarea>
                </div>
                <div className={classes["input-grp"]}>
                    <label htmlFor="date">Release-Date</label>
                    <input id="date" type="date" ref={dateInputRef} required/>
                </div>
                <div className={classes.actions}>
                    <Button type="submit">Add Movie</Button>
                </div>
            </form>
        </Card>
    );
};
export default AddMovie;