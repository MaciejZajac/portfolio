import React from "react";
import Button from "./Button";

const Projects = () => {
  const links = {
    github: "https://github.com/MaciejZajac/JobOffers",
    vehis: "https://sellcar.nuwo.pl/",
    jobOffers: "https://shrouded-hollows-06306.herokuapp.com/",
    jobOffersGithub: "https://github.com/MaciejZajac/JobOffers",
    mentor: "https://mentor-website.netlify.com/",
    mentorGithub: "https://bitbucket.org/maciek1997/mentor-website/src/master/"
  };
  return (
    <div className="container">
      <div className="columns" style={{ height: "50%", margin: 0 }}>
        <div
          className="column flex flex--column flex-justify--center flex-align--center"
          style={{
            borderBottom: "2px solid #0000cdc0"
          }}
        >
          <div className="bg bg-vehis" />
          <div className="columns is-centered">
            <div className="column is-three-quarters ">
              <div className="content">
                Projekt tworzony dla <strong>obecnej</strong> firmy. Jestem
                jedyną osobą odpowiedzialną za tworzenie warstwy frontendowej
                aplikacji.
              </div>
              <a href={links.vehis} target="_blank" rel="noopener noreferrer">
                <Button text="Online" />
              </a>
            </div>
          </div>
        </div>
        <div
          className="column flex flex--column flex-justify--center flex-align--center"
          style={{
            backgroundColor: "#0000cdc0",
            color: "white",
            borderBottom: "2px solid white"
          }}
        >
          <div className="bg bg-offers" />
          <div className="columns is-centered">
            <div className="column is-three-quarters ">
              <div className="content">
                Projekt, który w założeniu{" "}
                <span style={{ textDecoration: "underline" }}>będzie</span>{" "}
                job-boardem dla programistów. Samodzielnie piszę i backend i
                frontend.
              </div>
              <a
                href={links.jobOffers}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button text="Online" />
              </a>
              <a
                href={links.jobOffersGithub}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button text="Github" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="columns" style={{ height: "50%", margin: 0 }}>
        <div className="column flex flex--column flex-justify--center flex-align--center">
          <div className="bg bg-mentor" />
          <div className="columns is-centered">
            <div className="column is-three-quarters ">
              <div className="content">
                Projekt strony dla kółka naukowego. Zwykły html i css.
              </div>
              <a href={links.mentor} target="_blank" rel="noopener noreferrer">
                <Button text="Online" />
              </a>
              <a
                href={links.mentorGithub}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button text="Github" />
              </a>
            </div>
          </div>
        </div>
        <div
          className="column flex flex--column flex-justify--center flex-align--center"
          style={{
            backgroundColor: "#0000cdc0"
          }}
        ></div>
      </div>
    </div>
  );
};

export default Projects;
