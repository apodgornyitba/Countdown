import './App.css';
import './theme.css';
import hillsBG from './images/pattern-hills.svg';
import starsBG from './images/bg-stars.svg';
import Counter from "./components/Counter";

function App() {

    const hillsBGStyle = {
        backgroundImage: `url(${hillsBG})`,
        backgroundColor: 'inherit',
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center bottom",
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
        position: "absolute",
        top: "0",
        left: "0",
        display: "flex",
        alignItems: 'center',
        justifyContent: "center",
        width: "100vw",
        height: "100vh",
        zIndex: 1,
    }

    return (
        <div className="App">
            <div className="stars" style={starsBGStyle}>

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
