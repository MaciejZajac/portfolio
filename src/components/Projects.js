import React from "react";

const Projects = () => {
  return (
    <div className="container">
      <div className="columns" style={{ height: "50%", margin: 0 }}>
        <div
          className="column"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderBottom: "2px solid #0000cdc0"
          }}
        >
          <div className="bg-vehis" />
          <div className="columns is-centered">
            <div className="column is-three-quarters ">
              Projekt tworzony dla <strong>obecnej</strong> firmy.
              <br />
              <br />
              Jestem jedyną osobą odpowiedzialną za tworzenie warstwy
              frontendowej aplikacji.
              <br />
              <br />
              <a
                href="https://sellcar.nuwo.pl/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="button is-rounded">
                  Online
                </button>
              </a>
            </div>
          </div>
        </div>
        <div
          className="column"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#0000cdc0",
            color: "white",
            borderBottom: "2px solid white"
          }}
        >
          <div className="bg-offers" />
          <div className="columns is-centered">
            <div className="column is-three-quarters ">
              Projekt, który w założeniu{" "}
              <span style={{ textDecoration: "underline" }}>będzie</span>{" "}
              job-boardem dla programistów. Samodzielnie piszę i backend i
              frontend.
              <br />
              <br />
              <a
                href="https://shrouded-hollows-06306.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  type="button"
                  className="button is-rounded"
                  style={{ marginRight: "15px" }}
                >
                  Online
                </button>
              </a>
              <a
                href="https://github.com/MaciejZajac/JobOffers"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="button is-rounded">
                  Github
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="columns" style={{ height: "50%", margin: 0 }}>
        <div
          className="column"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div className="bg-mentor" />
          <div className="columns is-centered">
            <div className="column is-three-quarters ">
              Projekt strony dla kółka naukowego.
              <br />
              <a
                href="https://sellcar.nuwo.pl/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="button is-rounded">
                  Online
                </button>
              </a>
            </div>
          </div>
        </div>
        <div
          className="column"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#0000cdc0"
          }}
        >
          Czwarty projekt
        </div>
      </div>
    </div>
  );
};

export default Projects;
