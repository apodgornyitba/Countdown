import './App.css';
import './theme.css';
import hillsBG from './images/pattern-hills.svg';
import starsBG from './images/bg-stars.svg';
import Counter from "./components/Counter";
import {useEffect, useState} from "react";

function App() {

    const [days, setDays] = useState(2);
    const [hours, setHours] = useState(12);
    const [minutes, setMinutes] = useState(30);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            } else {
                if (minutes > 0) {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                } else {
                    if (hours > 0) {
                        setHours(hours - 1);
                        setMinutes(59);
                        setSeconds(59);
                    } else {
                        if (days > 0) {
                            setDays(days - 1);
                            setHours(23);
                            setMinutes(59);
                            setSeconds(59);
                        } else {
                            clearInterval(interval);
                        }
                    }
                }
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [days, hours, minutes, seconds]);

    const hillsBGStyle = {
        backgroundImage: `url(${hillsBG})`,
        backgroundColor: 'inherit',
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center bottom",
        backgroundSize: "100% auto",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        width: "100vw",
        paddingBottom: "4%",
        zIndex: 2,
        position: "relative",
    }

    const starsBGStyle = {
        backgroundImage: `url(${starsBG})`,
        backgroundColor: 'inherit',
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% auto",
        position: "absolute",
        top: "0",
        left: "0",
        display: "flex",
        flexDirection: "column",
        alignItems: 'center',
        width: "100vw",
        height: "100vh",
        zIndex: 1,
    }

    return (
        <div className="App">
            <div className="stars" style={starsBGStyle}>
                <div className="starsContent">
                    <h1>WE'RE LAUNCHING SOON</h1>
                    <div className="counterContainer">
                        <Counter value={days} text={"DAYS"}/>
                        <Counter value={hours} text={"HOURS"}/>
                        <Counter value={minutes} text={"MINUTES"}/>
                        <Counter value={seconds} text={"SECONDS"}/>
                    </div>
                </div>
            </div>
            <div className="hills" style={hillsBGStyle}>
                <img className="icon" src={require("./images/icon-facebook.svg").default} alt="facebook icon"/>
                <img className="icon" src={require("./images/icon-pinterest.svg").default} alt="pinterest icon"/>
                <img className="icon" src={require("./images/icon-instagram.svg").default} alt="twitter icon"/>
            </div>
        </div>
    );
}

export default App;
