import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I am a Full-Stack Developer, Data Analyst, and the Co-founder of Graphicsporium. I specialize in delivering end-to-end digital products for clients, combining robust data analytics with modern web frameworks like Tailwind CSS and TypeScript. As a dedicated Computer Science undergrad with strong roots in AI and cloud computing, I am driven by the challenge of turning complex data into intuitive, high-performance web experiences.
        </p>
        <div style={{ marginTop: "30px" }}>
          <h4 style={{ color: "var(--accentColor)", fontSize: "24px", marginBottom: "15px" }}>AI Tools Known</h4>
          <p className="para" style={{ fontSize: "18px" }}>
            Julius.AI, Quadratic.AI, Ask Your Database, Claude, Antigravity, and Cursor.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
