import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

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
          websites
        </p>
        <br />
        <div>
          {/* <Button text="CV" classes="is-purple" /> */}
          <Link to="/projects">
            <Button text="Projects" classes="is-purple" />
          </Link>
        </div>
      </div>
      <div className="home__photo" />
      <div className="home__data">
        <div className="home__name">Maciej Zając</div>
        <div className="home__contact">
          <div>
            <div className="bold">Email: </div>
            <a
              href="mailto:maciej.zajac.praca@gmail.com"
              style={{ textDecoration: "none", color: "#0000cdc0" }}
            >
              maciej.zajac.praca@gmail.com
            </a>
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
