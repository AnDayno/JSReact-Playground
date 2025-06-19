/*
    conditional rendering = allows you to control what gets rendered
                            in your application based on certain conditions
                            (show, hide, or change components)
*/
import { Link } from 'react-router-dom'
import UserGreeting from './UserGreeting'

function ConditionalRenderingHome() {

    return(
        <>
            <div style={{ padding: '1rem' }}>
                <Link to="/" style={{ textDecoration: 'none' }}>
                ← Back to Home
                </Link>
            </div>

            <UserGreeting isLoggedIn={true} username="Umi"/>
        </>
    )
}

export default ConditionalRenderingHome