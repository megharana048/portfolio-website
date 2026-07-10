import { useState } from "react";
import "./App.css";

function App() {
  const email = "megha.rana048@gmail.com";
  const github = "https://github.com/megharana048";
  const linkedin = "https://www.linkedin.com/in/megha-rana-dev/";

  const netflixLink =
    "https://megharana048.github.io/netflix-frontend/";

  const swiggyLink =
    "https://megharana048.github.io/Swiggy--ui--clone/";

  const [formData, setFormData] = useState({
    senderEmail: "",
    senderName: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      formData.subject || "Portfolio Contact"
    );

    const body = encodeURIComponent(
      `Hi Megha,

My name is ${formData.senderName}.

${formData.message}

You can reply to me at:
${formData.senderEmail}`
    );

    const gmailUrl =
      `https://mail.google.com/mail/?view=cm&fs=1` +
      `&to=${email}` +
      `&su=${subject}` +
      `&body=${body}`;

    window.open(gmailUrl, "_blank", "noopener,noreferrer");
  };

  const skillGroups = [
    {
      title: "Frontend",
      skills: [
        { shortName: "HTML", label: "HTML" },
        { shortName: "CSS", label: "CSS" },
        { shortName: "JS", label: "JavaScript" },
        { shortName: "⚛", label: "React.js" },
        { shortName: "V", label: "Vite" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { shortName: "JS", label: "Node.js" },
        { shortName: "EX", label: "Express.js" },
        { shortName: "DB", label: "MongoDB" },
        { shortName: "API", label: "REST APIs" },
      ],
    },
    {
      title: "Languages",
      skills: [
        { shortName: "JS", label: "JavaScript" },
        { shortName: "PY", label: "Python Basics" },
        { shortName: "C", label: "C Basics" },
      ],
    },
    {
      title: "Tools",
      skills: [
        { shortName: "GH", label: "GitHub" },
        { shortName: "GT", label: "Git" },
        { shortName: "VS", label: "VS Code" },
        { shortName: "VC", label: "Vercel" },
      ],
    },
  ];

  const projects = [
    {
      title: "SkillHub LMS",
      description:
        "A full-stack Learning Management System currently under development using the MERN stack. It includes authentication, course management, backend APIs, and database integration.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "In Progress",
      ],
      type: "lms",
      status: "Currently in Development",
    },
    {
      title: "Portfolio Website",
      description:
        "The responsive portfolio website you are currently viewing. It was created using React and Vite to present my skills, projects, education, and contact information.",
      technologies: ["React", "Vite", "CSS", "Frontend"],
      type: "portfolio",
      status: "You Are Viewing It",
    },
    {
      title: "Netflix Clone",
      description:
        "A responsive frontend Netflix-inspired interface featuring a dark theme, navigation pages, content carousels, hover effects, and responsive layouts.",
      technologies: ["HTML", "CSS", "JavaScript", "Frontend Only"],
      type: "netflix",
      link: netflixLink,
    },
    {
      title: "Swiggy Clone",
      description:
        "A responsive frontend food delivery interface inspired by Swiggy with restaurant cards, navigation pages, offers, search, cart, and responsive design.",
      technologies: ["HTML", "CSS", "JavaScript", "Frontend Only"],
      type: "swiggy",
      link: swiggyLink,
    },
  ];

  return (
    <div className="app">
      <header className="navbar">
        <a className="logo" href="#home">
          <span>&lt;</span>
          MEGHA
          <span>/&gt;</span>
        </a>

        <nav className="navLinks">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="navSocials">
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
          >
            GH
          </a>

          <a
            href={linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
          >
            in
          </a>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="gridBackground" />
          <div className="heroGlow heroGlowLeft" />
          <div className="heroGlow heroGlowRight" />

          <div className="heroContainer">
            <div className="heroContent">
              <p className="heroGreeting">Hi, I am</p>

              <h1>MEGHA RANA</h1>

              <div className="heroRole">
                I am an
                <span>Aspiring Full Stack Developer</span>
              </div>

              <p className="heroDescription">
                I am a B.Tech Electronics and Communication Engineering
                student learning the MERN stack and building practical
                frontend and full-stack projects. I enjoy creating responsive
                interfaces and improving my skills through real-world
                applications.
              </p>

              <div className="heroButtons">
                <a href="#projects" className="primaryButton">
                  View Projects
                </a>

                <a href="#contact" className="outlineButton">
                  Contact Me
                </a>
              </div>

              <div className="heroSocialLinks">
                <a href={github} target="_blank" rel="noreferrer">
                  GitHub
                </a>

                <a href={linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="heroVisual">
              <div className="visualGlow" />

              <div className="orbit orbitOuter">
                <span className="orbitDot orbitDotOne" />
                <span className="orbitDot orbitDotTwo" />
              </div>

              <div className="orbit orbitMiddle">
                <span className="orbitDot orbitDotThree" />
              </div>

              <div className="orbit orbitInner" />

              <div className="mainCircle">
                <div className="circleGrid" />

                <div className="circleContent">
                  <span className="circleInitials">MR</span>
                  <span className="circleLine" />
                  <p>Developer Portfolio</p>
                </div>
              </div>

              <div className="techNode nodeReact">
                <span>⚛</span>
              </div>

              <div className="techNode nodeJs">
                <span>JS</span>
              </div>

              <div className="techNode nodeDatabase">
                <span>DB</span>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section aboutSection">
          <SectionHeading
            title="ABOUT"
            description="A brief introduction to my background, goals, and development journey"
          />

          <div className="aboutGrid">
            <article className="aboutCard">
              <p className="aboutLabel">Who I Am</p>

              <h3>
                Engineering student building skills in modern web development
              </h3>

              <p>
                I am currently pursuing B.Tech in Electronics and Communication
                Engineering. Along with my degree, I am developing skills in
                frontend and full-stack development through React, Node.js,
                Express.js, and MongoDB.
              </p>
            </article>

            <article className="aboutCard">
              <p className="aboutLabel">My Current Focus</p>

              <h3>Learning MERN by building real applications</h3>

              <p>
                My current main project is SkillHub, a complete Learning
                Management System. I am using this project to understand
                responsive interfaces, authentication, APIs, databases, and
                deployment.
              </p>
            </article>

            <div className="aboutStats">
              <div>
                <strong>4+</strong>
                <span>Projects</span>
              </div>

              <div>
                <strong>MERN</strong>
                <span>Current Stack</span>
              </div>

              <div>
                <strong>ECE</strong>
                <span>B.Tech Student</span>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section skillsSection">
          <SectionHeading
            title="SKILLS"
            description="Technologies and tools I am currently learning and using"
          />

          <div className="skillGroupGrid">
            {skillGroups.map((group) => (
              <article className="skillGroupCard" key={group.title}>
                <h3>{group.title}</h3>

                <div className="skillItems">
                  {group.skills.map((skill) => (
                    <div className="skillItem" key={skill.label}>
                      <div className="skillIcon">{skill.shortName}</div>
                      <span>{skill.label}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="experience"
          className="section experienceSection"
        >
          <SectionHeading
            title="EXPERIENCE"
            description="My professional experience and responsibilities outside academic projects"
          />

          <div className="timeline">
            <div className="timelineLine" />

            <article className="timelineCard timelineCardRight">
              <div className="timelineDot">SS</div>

              <p className="timelineSmallTitle">Sparkify Social</p>

              <h3>Executive Assistant Intern</h3>

              <p className="timelineDate">June 2026 – Present</p>

              <p>
                Supporting a startup with recruitment research, hiring
                campaigns, platform outreach, task coordination, database
                preparation, communication, and operational execution.
              </p>

              <div className="technologyTags">
                <span>Research</span>
                <span>Communication</span>
                <span>Operations</span>
                <span>Recruitment</span>
                <span>Coordination</span>
              </div>
            </article>
          </div>
        </section>

        <section id="projects" className="section projectsSection">
          <SectionHeading
            title="PROJECTS"
            description="Projects demonstrating my frontend and full-stack development progress"
          />

          <div className="projectGrid">
            {projects.map((project) => (
              <article className="projectCard" key={project.title}>
                <div
                  className={`projectPreview ${project.type}`}
                >
                  <div className="previewBrowser">
                    <div className="browserDots">
                      <span />
                      <span />
                      <span />
                    </div>

                    <div className="previewContent">
                      <small>{project.title}</small>

                      <strong>
                        {project.type === "lms" && "Learn. Build. Grow."}
                        {project.type === "portfolio" &&
                          "Professional Portfolio"}
                        {project.type === "netflix" &&
                          "Unlimited Entertainment"}
                        {project.type === "swiggy" &&
                          "Food Delivered Fast"}
                      </strong>

                      <div className="previewLines">
                        <span />
                        <span />
                        <span />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="projectContent">
                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="technologyTags">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>

                  {project.status ? (
                    <div className="projectStatus">
                      {project.status}
                    </div>
                  ) : (
                    <a
                      className="projectLink"
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Project
                      <span>↗</span>
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="education"
          className="section educationSection"
        >
          <SectionHeading
            title="EDUCATION"
            description="My academic background and current engineering journey"
          />

          <div className="timeline educationTimeline">
            <div className="timelineLine" />

            <article className="timelineCard timelineCardLeft">
              <div className="timelineDot">D</div>

              <p className="timelineSmallTitle">DSEU G.B. Pant</p>

              <h3>
                B.Tech in Electronics and Communication Engineering
              </h3>

              <p className="timelineDate">2024 – Present</p>

              <p>
                Pursuing an engineering degree while developing additional
                skills in web development, programming, communication, and
                technical problem-solving.
              </p>

              <div className="technologyTags">
                <span>ECE</span>
                <span>Engineering</span>
                <span>Web Development</span>
              </div>
            </article>

            <article className="timelineCard timelineCardRight educationCard">
              <div className="timelineDot">12</div>

              <p className="timelineSmallTitle">
                Air Force Bal Bharti School
              </p>

              <h3>Class XII — PCM with Biotechnology</h3>

              <p className="timelineDate">Completed in 2024</p>

              <p>
                Completed senior secondary education under the CBSE board
                with Physics, Chemistry, Mathematics, and Biotechnology.
              </p>

              <div className="technologyTags">
                <span>Physics</span>
                <span>Chemistry</span>
                <span>Mathematics</span>
                <span>Biotechnology</span>
              </div>
            </article>

            <article className="timelineCard timelineCardLeft educationCard">
              <div className="timelineDot">10</div>

              <p className="timelineSmallTitle">
                Air Force Bal Bharti School
              </p>

              <h3>Class X — CBSE</h3>

              <p className="timelineDate">Completed in 2022</p>

              <p>
                Completed secondary education under the CBSE board, building
                a strong academic foundation in science, mathematics, and
                communication.
              </p>

              <div className="technologyTags">
                <span>CBSE</span>
                <span>Science</span>
                <span>Mathematics</span>
                <span>English</span>
              </div>
            </article>
          </div>
        </section>

        <section id="contact" className="section contactSection">
          <SectionHeading
            title="CONTACT"
            description="Reach out for internships, project discussions, collaborations, or opportunities"
          />

          <form className="contactForm" onSubmit={handleSubmit}>
            <h3>Connect With Me</h3>

            <label>
              <span>Your Email</span>
              <input
                type="email"
                name="senderEmail"
                value={formData.senderEmail}
                onChange={handleInputChange}
                placeholder="example@email.com"
                required
              />
            </label>

            <label>
              <span>Your Name</span>
              <input
                type="text"
                name="senderName"
                value={formData.senderName}
                onChange={handleInputChange}
                placeholder="Enter your name"
                required
              />
            </label>

            <label>
              <span>Subject</span>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Opportunity or project discussion"
                required
              />
            </label>

            <label>
              <span>Message</span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Write your message here..."
                rows="6"
                required
              />
            </label>

            <button type="submit">Send Message</button>

            <p className="formNote">
              Clicking Send Message opens Gmail with the message already
              filled in.
            </p>
          </form>
        </section>
      </main>

      <footer className="footer">
        <a className="footerLogo" href="#home">
          MEGHA
        </a>

        <div className="footerLinks">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
        </div>

        <div className="footerSocials">
          <a href={github} target="_blank" rel="noreferrer">
            GitHub
          </a>

          <a href={linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>

        <p>© 2026 Megha Rana. All rights reserved.</p>
      </footer>
    </div>
  );
}

function SectionHeading({ title, description }) {
  return (
    <div className="sectionHeading">
      <h2>{title}</h2>
      <div className="headingUnderline" />
      <p>{description}</p>
    </div>
  );
}

export default App;