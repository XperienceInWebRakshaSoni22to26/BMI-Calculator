import React, { useState } from "react";

import "./style.css";




function App() {
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [bmi, setBmi] = useState();
    const [message, setMessage] = useState();

    const calcbmi = (e) => {
        e.preventDefault();
        if (weight === 0 || height === 0) {
            alert("please enter a valid value of height and weight");
        } else {
            let bmival = (weight / (height * height)) * 703;
            setBmi(bmival.toFixed(1));
            if (bmival < 25) {
                setMessage("you are underweight");
            } else if (bmival >= 25 && bmival < 30) {
                setMessage("you are healthy");
            } else {
                setMessage("you are overweight");
            }
        }
    }
    let reload = () => {
        window.location.reload();
    }

    return ( <
        >
        <
        h1 > BMI calculator < /h1> <
        form onSubmit = { calcbmi }
        className = "bmiform" >

        <
        div >
        <
        label > Weight(kg): < /label> <
        input type = "number"

        value = { weight }
        onChange = {
            (e) => setWeight(e.target.value)
        }
        / > < /
        div > <
        div >
        <
        label > Height(cm): < /label> <
        input type = "number"

        value = { height }
        onChange = {
            (e) => setHeight(e.target.value)
        }
        / > < /
        div > <
        div >
        <
        button type = "submit"
        className = "submitbtn" > Submit < /button> <
        button type = "submit"
        onClick = { reload }
        className = "reloadbtn" > Reload < /button> < /
        div >

        <
        div >
        <
        h3 > { bmi } < /h3> <
        p > { message } < /p> < /
        div >





        <
        /
        form >









        <
        / >
    )
}

export default App