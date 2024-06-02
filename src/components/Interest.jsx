import "./Interest.css";
import {FaBowlFood, FaGamepad, FaMusic, FaPlaneUp, FaTv, FaVolleyball} from "react-icons/fa6";

const Interest = () => {
    return (
        <section id="interest">
            <h2>Interest</h2>
            <div className="card-container">
                <div className="card">
                    <FaTv size={30} color="#359BFF"/>
                    <p>Movies</p>
                </div>
                <div className="card">
                    <FaMusic size={30} color="#359BFF"/>
                    <p>Music</p>
                </div>
                <div className="card">
                    <FaGamepad size={30} color="#359BFF"/>
                    <p>Gaming</p>
                </div>
                <div className="card">
                    <FaBowlFood size={30} color="#359BFF"/>
                    <p>Cooking</p>
                </div>
                <div className="card">
                    <FaVolleyball size={30} color="#359BFF"/>
                    <p>Football</p>
                </div>
                <div className="card">
                    <FaPlaneUp size={30} color="#359BFF"/>
                    <p>Travel</p>
                </div>
            </div>
        </section>
    );
}

export default Interest;