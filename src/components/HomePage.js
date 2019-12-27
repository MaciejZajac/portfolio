import React from "react";

const HomePage = () => {
  return (
    <div className="homePage">
      <div className="homePage__contact">
        <div className="">
          <span className="homePage__react">React</span>
          <br />
          Developer
        </div>
        <div>
          <button type="button" className="homePage__btn">
            CV
          </button>
        </div>
      </div>
      <div className="homePage__photo" />
      <div className="homePage__data">
        <div>Maciej Zając</div>
        <div>
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
