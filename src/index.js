import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import Corpo from "./Corpo";

function Main(){
    return(
        <>
            <Navbar />
            <Corpo />
        </>
    );
}
let content = Main();
let local= document.querySelector(".root")

ReactDOM.render(content, local);