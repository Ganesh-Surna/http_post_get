import classes from "./Button.module.css";
import React from "react";

const Button=(props)=>{
    return <button onClick={props.onClick} className={classes.btn} >{props.children}</button>
};
export default React.memo(Button);