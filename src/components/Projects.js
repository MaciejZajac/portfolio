import React from "react";

const Projects = () => {
  return (
    <div className="container">
      <div className="columns" style={{ height: "50vh" }}>
        <div
          className="column"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          Pierwszy projekt
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
          Drugi projekt
        </div>
      </div>
      <div className="columns" style={{ height: "50vh" }}>
        <div
          className="column"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          Trzeci projekt
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
