/*
    Click Event = An interaction when a user clicks on a specific element.
                  We can respond to click by passing
                  a callback to the onClick event handler.
*/
import { Link } from "react-router-dom";
import ClickButton from "./ClickButton";

function ClickEventHome(){

    return(
        <>
            <div style={{ padding: '1rem' }}>
                <Link to="/" style={{ textDecoration: 'none' }}>
                ← Back to Home
                </Link>
            </div>

            <ClickButton />
        </>
    );
}

export default ClickEventHome