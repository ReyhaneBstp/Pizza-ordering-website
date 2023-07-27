import { Link } from "react-router-dom";
const Home = () => {
    return ( 
        <div className="home">
            <div className="container">
                <h1 className="title">
                    Pizza Pizza
                </h1>

                <h3>
                “TIME IS MONEY,
                 MONEY IS POWER,<br />
                  POWER IS PIZZA,
                   AND PIZZA IS KNOWLEDGE,<br />
                    LET’S GO!”
                </h3>
                <Link to="/menu">
                    <button className="menuBtn">Order Now</button>
                </Link>
            </div>

        </div>
    );
}
 
export default Home;