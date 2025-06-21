import profilePic from './Image/ProfilePicture.png'  

function ProfilePicture(){

    //const imageUrl = './Image/ProfilePicture.png';

    const handleClick = (e) => e.target.style.display = "none";

    return(<img onClick={(e) => handleClick(e)} src ={profilePic}></img>)
}

export default ProfilePicture