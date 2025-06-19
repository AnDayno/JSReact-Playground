import { Link } from 'react-router-dom'

function ConditionalRenderingHome() {

    return(
        <>
            <div style={{ padding: '1rem' }}>
                <Link to="/" style={{ textDecoration: 'none' }}>
                ← Back to Home
                </Link>
            </div>
        </>
    )
}

export default ConditionalRenderingHome