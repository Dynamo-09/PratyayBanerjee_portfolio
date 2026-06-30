import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              PRATYAY
              <br />
              <span>BANERJEE</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3 style={{ marginBottom: "5px" }}>Co-founder of Graphicsporium</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">DATA ANALYST</div>
              <div className="landing-h2-2" style={{ color: "#eae5ec" }}>& FULL STACK DEVELOPER</div>
            </h2>
            <h2>
              <div className="landing-h2-info" style={{ color: "#eae5ec" }}>& FULL STACK DEVELOPER</div>
              <div className="landing-h2-info-1">DATA ANALYST</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
