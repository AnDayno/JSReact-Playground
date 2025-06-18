import { Link } from 'react-router-dom'
import Card from "./Card"

function CardComponents() {

    return(
        <>
            <div style={{ padding: '1rem' }}>
                <Link to="/" style={{ textDecoration: 'none' }}>
                ← Back to Home
                </Link>
            </div>

            <Card />
        </>
    );
}

export default CardComponents