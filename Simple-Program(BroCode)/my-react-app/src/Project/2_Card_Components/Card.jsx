import profilePic from "./Images/Profile.jpg"
import './Card.css'

function Card() {
    
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="Profile Picture"></img>
            <h2 className="card-title">Umi Kitsu</h2>
            <p className="card-text">I'm a Dancer and a Programmer</p>
        </div>
    );
}

export default Card