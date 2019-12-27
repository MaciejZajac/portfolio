import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="home">
      <div className="home__spec">
        <div>
          <span className="home__react">React</span>
          <br />
          Developer
        </div>
        <br />
        <p style={{ fontSize: 20 }}>
          One year of experience in building <br />
          <span style={{ textDecoration: "underline" }}>amazing websites</span>.
        </p>
        <br />
        <div>
          <button type="button" className="button is-rounded is-purple">
            CV
          </button>
          <Link to="/projects">
            <button type="button" className="button is-rounded is-purple">
              Projects ->
            </button>
          </Link>
        </div>
      </div>
      <div className="home__photo" />
      <div className="home__data">
        <div className="home__name">Maciej Zając</div>
        <div className="home__contact">
          <div>
            <div className="bold">Email: </div>
            maciej.zajac.praca@gmail.com
          </div>
          <br />
          <div>
            <div className="bold">Phone: </div>
            +48 534 157 917
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
