import "./App.css";

function App() {
  const linkedin = "https://www.linkedin.com/in/megha-rana-dev/";
  const github = "https://github.com/megharana048";
  const email = "megha.rana048@gmail.com";

  const portfolioLink = "https://portfolio-website-gamma-one-95.vercel.app";
  const netflixLink = "https://megharana048.github.io/netflix-frontend/";
  const swiggyLink = "https://megharana048.github.io/Swiggy--ui--clone/";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      alert("Email copied: " + email);
    } catch {
      alert("Please copy this email: " + email);
    }
  };

  const openGmail = () => {
    const subject = encodeURIComponent("Portfolio Contact");
    const body = encodeURIComponent(
      "Hi Megha,\n\nI visited your portfolio and would like to connect with you regarding "
    );

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
    window.open(gmailUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <header className="navbar">
        <h2>Megha Rana</h2>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="home" className="hero section">
        <div className="heroText">
          <p className="intro">Hello, I'm</p>

          <h1>Megha Rana</h1>

          <h3>Aspiring Full Stack Developer</h3>

          <p>
            B.Tech ECE student learning the MERN stack and building real-world
            projects including a full LMS using MongoDB, Express.js, React.js,
            and Node.js.
          </p>

          <div className="buttons">
            <a href="#projects" className="btn primary">
              View Projects
            </a>

            <a href="#contact" className="btn secondary">
              Contact Me
            </a>
          </div>

          <div className="socialLinks">
            <a href={linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>

            <a href={github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>

        <div className="profileCard">
          <div className="avatar">MR</div>
          <h2>Full Stack Developer</h2>
          <p>MERN Stack • React • Node.js</p>
        </div>
      </section>

      <section id="about" className="section aboutSection">
        <h2 className="heading">About Me</h2>

        <p className="aboutText">
          I am a B.Tech ECE student and an aspiring Full Stack Developer. I am
          currently learning the MERN stack and building a full LMS project. I
          enjoy working on both frontend and backend development, including
          responsive UI, APIs, authentication, databases, and real-world project
          structure.
        </p>
      </section>

      <section id="skills" className="section">
        <h2 className="heading">My Skills</h2>

        <div className="skillsGrid">
          <div className="skill">HTML</div>
          <div className="skill">CSS</div>
          <div className="skill">JavaScript</div>
          <div className="skill">React.js</div>
          <div className="skill">Node.js</div>
          <div className="skill">Express.js</div>
          <div className="skill">MongoDB</div>
          <div className="skill">GitHub</div>
          <div className="skill">REST APIs</div>
        </div>
      </section>

      <section id="projects" className="section">
        <h2 className="heading">My Projects</h2>

        <div className="projectGrid">
          <div className="projectCard">
            <h3>LMS Project</h3>
            <p>
              A full-stack Learning Management System currently in progress,
              being built using the MERN stack with authentication, course
              management, and backend APIs.
            </p>
            <span>Full Stack • MERN Stack • In Progress</span>
          </div>

          <a href={portfolioLink} target="_blank" rel="noreferrer" className="projectCard">
            <h3>Portfolio Website</h3>
            <p>
              This responsive frontend portfolio website built using React and
              Vite to showcase my skills, projects, contact details, and
              developer journey.
            </p>
            <span>Frontend • React • Vite • This Website</span>
          </a>

          <a href={netflixLink} target="_blank" rel="noreferrer" className="projectCard">
            <h3>Netflix Clone</h3>
            <p>
              A responsive frontend clone of Netflix featuring a modern
              dark-themed UI, multiple content sections, smooth layout, and
              responsive design.
            </p>
            <span>Frontend Only • HTML • CSS • JavaScript</span>
            <button className="projectBtn">View Project</button>
          </a>

          <a href={swiggyLink} target="_blank" rel="noreferrer" className="projectCard">
            <h3>Swiggy Clone</h3>
            <p>
              A responsive frontend clone of Swiggy with a clean user interface,
              food cards, navigation, and modern layout.
            </p>
            <span>Frontend Only • HTML • CSS • JavaScript</span>
            <button className="projectBtn">View Project</button>
          </a>
        </div>
      </section>

      <section id="contact" className="section contact">
        <h2 className="heading">Contact Me</h2>

        <p className="contactText">
          Have an internship opportunity, project idea, or collaboration in mind?
          Feel free to reach out.
        </p>

        <div className="contactCard">
          <p className="emailText">
            Email: <span>{email}</span>
          </p>

          <div className="contactButtons">
            <button onClick={openGmail} className="btn primary">
              Mail Me
            </button>

            <button onClick={copyEmail} className="btn secondary">
              Copy Email
            </button>

            <a href={linkedin} target="_blank" rel="noreferrer" className="btn linkBtn">
              LinkedIn
            </a>

            <a href={github} target="_blank" rel="noreferrer" className="btn linkBtn">
              GitHub
            </a>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2026 Megha Rana. All rights reserved.</p>
      </footer>
    </>
  );
}