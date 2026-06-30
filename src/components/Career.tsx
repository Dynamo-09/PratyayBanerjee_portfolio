import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Co-founder</h4>
                <h5>Graphicsporium</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Empowering small businesses and startups through high-performance web development. I build custom digital solutions that elevate brand visibility and drive scalable growth.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Engineer Intern</h4>
                <h5>Godrej Boyce & Co</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Feb 2026 – Apr 2026. Analyzed market trends, visualized key insights, and provided data-driven recommendations to drive business growth.
            </p>
          </div>
          <div className="animated-arrow-container">
            <div className="animated-arrow-path"></div>
            <div className="animated-arrow-head"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Analyst Intern</h4>
                <h5>Vodafone Idea Limited</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Sep 2025 – Oct 2025. Contributed to data analysis and visualization tasks using Power BI and Python to assist in decision-making.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>SQL Developer Intern</h4>
                <h5>Vaishnav Technologies</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Feb 2025 – Apr 2025. Assisted in database query optimization and development of SQL-based reporting modules.
            </p>
          </div>

        </div>

        <h2 style={{ marginTop: "120px", marginBottom: "90px" }}>
          My <span>Certifications</span>
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4 style={{ lineHeight: "35px" }}>Google Advanced Data Analytics</h4>
                <h5>Coursera</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Jan – Mar 2025. Mastered advanced data analytics techniques, including predictive modeling, statistical analysis, and data visualization. Gained hands-on experience utilizing Python and machine learning algorithms to drive actionable business insights. <br />
              <a href="https://coursera.org/share/bbdeb6218bd0dbc73c32c02bf505d394" target="_blank" rel="noopener noreferrer" style={{ color: "#3b82f6", textDecoration: "underline", display: "inline-block", marginTop: "10px" }}>Certificate</a>
            </p>
          </div>
          
          <div className="animated-arrow-container">
            <div className="animated-arrow-path"></div>
            <div className="animated-arrow-head"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AWS Cloud Computing</h4>
                <h5>Coursera</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              May 2025. Explored core cloud computing concepts, AWS infrastructure, and enterprise-level security protocols. Developed practical skills in designing, deploying, and managing scalable, fault-tolerant cloud architectures and services. <br />
              <a href="https://coursera.org/verify/specialization/AV9UJ7PFX3JY" target="_blank" rel="noopener noreferrer" style={{ color: "#3b82f6", textDecoration: "underline", display: "inline-block", marginTop: "10px" }}>Certificate</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
