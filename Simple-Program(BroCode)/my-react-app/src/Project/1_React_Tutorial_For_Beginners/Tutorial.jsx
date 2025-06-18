import { Link } from 'react-router-dom'
import Header from "./Header";
import Footer from "./Footer";
import Food from "./Food";

function Tutorial() {

  return(
    <>
      <div style={{ padding: '1rem' }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          ← Back to Home
        </Link>
      </div>

      <Header/>
      <Food/>
      <Footer/>
    </>
  );
}

export default Tutorial