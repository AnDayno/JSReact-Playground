/*
    React hook = Special function that allows functional components
                 to use React features without writing class components (React v16.8)
                 (useState, useEffect, useContext, useReducer, useCallback, and more)

    useState() = A React hook that allows the creation of a stateful variable 
                 AND a setter function to update its value in the Virtual DOM. 
                 [name, setName]
*/
import { Link } from "react-router-dom";
import MyComponent from "./MyComponent";
import Counter from "./Counter";

function StatehookHome() {

    return(
        <>  
            <div style={{ padding: '1rem' }}>
                <Link to="/" style={{ textDecoration: 'none' }}>
                ← Back to Home
                </Link>
            </div>

            {/* <MyComponent /> */}
            <Counter />
        </>
    );
}

export default StatehookHome