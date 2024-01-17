import React, {useEffect, useState} from "react";
import './Counter.css';
import {Card} from "@mui/material";

function Counter(props) {
    const {value, text} = props;
    const [flip, setFlip] = useState(false);

    useEffect(() => {
        setFlip(true);
        setTimeout(() => setFlip(false), 500);
    }, [value]);

    return (
        <div className="counter">
            <Card
                sx={{
                    backgroundColor: "var(--darker-desaturated-blue)",
                    height: "65px",
                    width: "160px",
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "center",
                    position: "absolute",
                    overflow: "hidden",
                    boxShadow: 'none',
                }}
            >
                <div className="numberTop">{props.value}</div>
            </Card>
            <Card
                sx={{
                    backgroundColor: `${flip ? 'var(--little-darker-desaturated-blue)' :  'transparent'}`,
                    height: "65px",
                    width: "160px",
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    overflow: "hidden",
                    boxShadow: 'none',
                    transform: `rotateX(${flip ? '180deg' : '0'})`,
                    transformOrigin: 'bottom',
                    transition: 'transform 0.5s',
                }}
            >
                <div className="numberTop">{props.value}</div>
            </Card>
            <div className="hr-container">
                <hr className="custom-hr"/>
                <Card
                    className="left-ball"
                    sx={{
                        backgroundColor: 'var(--very-darker-blue)',
                        position: 'absolute',
                        width: '10px',
                        height: '10px',
                        transform: 'translateY(-50%)',
                        borderBottomRightRadius: '50%',
                        borderTopRightRadius: '50%',
                        borderTopLeftRadius: '0',
                        borderBottomLeftRadius: '0',
                        boxShadow: 'none',
                    }}
                />
                <Card
                    className="right-ball"
                    sx={{
                        backgroundColor: 'var(--very-darker-blue)',
                        position: 'absolute',
                        width: '10px',
                        height: '10px',
                        transform: 'translateY(-50%) translateX(1500%)',
                        boxShadow: 'none',
                        borderBottomRightRadius: '0',
                        borderTopRightRadius: '0',
                        borderTopLeftRadius: '50%',
                        borderBottomLeftRadius: '50%',
                    }}
                />
            </div>
            <Card
                sx={{
                    backgroundColor: "var(--dark-desaturated-blue)",
                    height: "65px",
                    width: "160px",
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    overflow: "hidden",
                    boxShadow: '0 5px var(--very-darker-blue)',
                }}
            >
                <div className="numberBottom">{value}</div>
            </Card>
            <div className='text'>{text}</div>
        </div>
    );
}

export default Counter;
