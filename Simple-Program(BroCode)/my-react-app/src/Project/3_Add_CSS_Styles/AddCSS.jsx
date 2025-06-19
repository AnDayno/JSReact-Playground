/*
    HOW TO STYLE REACT COMPONENTS WITH CSS
    --------------------------------------
    (not including external frameworks or preprocessors)

    1. EXTERNAL
    2. MODULES
    3. INLINE
*/
import { Link } from 'react-router-dom'
import Button from "./Button";

function AddCSS() {

    return(
        <>
            <div style={{ padding: '1rem' }}>
                <Link to="/" style={{ textDecoration: 'none' }}>
                ← Back to Home
                </Link>
            </div>

            <Button />
        </>
    );
}

export default AddCSS