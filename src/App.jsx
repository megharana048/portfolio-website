import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./App.css";

const LINKEDIN_URL = "https://www.linkedin.com/in/megha-rana-dev/";
const GITHUB_URL = "https://github.com/megharana048";
const EMAIL_ADDRESS = "megha.rana048@gmail.com";

const NETFLIX_URL =
  "https://megharana048.github.io/netflix-frontend/";

const SWIGGY_URL =
  "https://megharana048.github.io/Swiggy--ui--clone/";

const skillGroups = [
  {
    title: "Frontend Development",
    subtitle: "Building responsive and interactive user interfaces",
    skills: [
      { icon: "H5", name: "HTML5", level: "Working knowledge" },
      { icon: "C3", name: "CSS3", level: "Working knowledge" },
      { icon: "JS", name: "JavaScript", level: "Learning & building" },
      { icon: "⚛", name: "React.js", level: "Learning & building" },
      { icon: "VT", name: "Vite", level: "Project setup" },
      { icon: "RD", name: "Responsive Design", level: "Working knowledge" },
    ],
  },
  {
    title: "Backend Development",
    subtitle: "Learning server-side development and API architecture",
    skills: [
      { icon: "ND", name: "Node.js", level: "Currently learning" },
      { icon: "EX", name: "Express.js", level: "Currently learning" },
      { icon: "API", name: "REST APIs", level: "Currently learning" },
      { icon: "AU", name: "Authentication", level: "Currently learning" },
      { icon: "AX", name: "AJAX", level: "Basic understanding" },
      { icon: "WS", name: "WebSockets", level: "Exploring" },
    ],
  },
  {
    title: "Databases",
    subtitle: "Working with structured and document-based data",
    skills: [
      { icon: "MDB", name: "MongoDB", level: "Currently learning" },
      { icon: "MG", name: "Mongoose", level: "Currently learning" },
      { icon: "NS", name: "NoSQL", level: "Basic understanding" },
      { icon: "SQL", name: "SQL", level: "Basic understanding" },
      { icon: "MY", name: "MySQL", level: "Exploring" },
    ],
  },
  {
    title: "Tools & Deployment",
    subtitle: "Version control, development tools and deployment",
    skills: [
      { icon: "GT", name: "Git", level: "Working knowledge" },
      { icon: "GH", name: "GitHub", level: "Working knowledge" },
      { icon: "VS", name: "VS Code", level: "Daily tool" },
      { icon: "VL", name: "Vercel", level: "Deployment" },
      { icon: "RD", name: "Render", level: "Learning" },
      { icon: "CI", name: "CI/CD", level: "GitHub Actions" },
    ],
  },
];

const capabilities = [
  {
    number: "01",
    title: "Responsive Interfaces",
    text: "Creating layouts that adapt properly across desktop, tablet and mobile screens.",
  },
  {
    number: "02",
    title: "Component-Based Development",
    text: "Breaking interfaces into reusable React components with clean and maintainable structure.",
  },
  {
    number: "03",
    title: "API Integration",
    text: "Learning how frontend applications communicate with backend services through REST APIs and AJAX.",
  },
  {
    number: "04",
    title: "Authentication",
    text: "Implementing and understanding user registration, login, protected routes, JWT and password security.",
  },
  {
    number: "05",
    title: "Database Integration",
    text: "Connecting applications with MongoDB and understanding SQL and NoSQL database concepts.",
  },
  {
    number: "06",
    title: "Deployment Workflow",
    text: "Using Git, GitHub, GitHub Actions, Vercel and GitHub Pages to manage and deploy applications.",
  },
];

const projects = [
  {
  title: "SkillHub LMS",
  category: "Full-Stack MERN Application",
  description:
    "A full-stack Learning Management System with role-based authentication, course browsing, enrollment, saved courses, progress tracking, instructor tools and admin management.",
  technologies: [
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JWT",
    "Tailwind CSS",
  ],
  visualClass: "lmsVisual",
  visualLabel: "SKILLHUB",
  visualHeading: "Learn. Build. Grow.",
  status: "Live",
  liveUrl:
    "https://skillhub-lms-git-main-megha-rana.vercel.app",
  githubUrl:
    "https://github.com/megharana048/skillhub-lms",
},
  {
    title: "Portfolio Website",
    category: "React Frontend",
    description:
      "A responsive developer portfolio built with React and Vite. It presents my technical skills, experience, projects, education and a functional contact form.",
    technologies: ["React", "Vite", "CSS", "EmailJS"],
    visualClass: "portfolioVisual",
    visualLabel: "MEGHA",
    visualHeading: "Developer Portfolio",
    status: "You are viewing this project",
  },
  {
    title: "Netflix Clone",
    category: "Frontend Project",
    description:
      "A responsive Netflix-inspired website with dedicated navigation pages, multiple content carousels, hover interactions and a dark entertainment interface.",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive UI"],
    visualClass: "netflixVisual",
    visualLabel: "NETFLIX UI",
    visualHeading: "Unlimited Entertainment",
    link: NETFLIX_URL,
  },
  {
    title: "Swiggy Clone",
    category: "Frontend Project",
    description:
      "A responsive food-delivery interface with restaurant cards, search, offers, profile, help, cart and corporate pages inspired by Swiggy.",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive UI"],
    visualClass: "swiggyVisual",
    visualLabel: "FOOD DELIVERY",
    visualHeading: "Discover Great Food",
    link: SWIGGY_URL,
  },
];

function App() {
  const contactForm = useRef(null);

  const [formStatus, setFormStatus] = useState({
    type: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const sendEmail = async (event) => {
    event.preventDefault();

    if (!serviceId || !templateId || !publicKey) {
      setFormStatus({
        type: "error",
        message:
          "EmailJS is not configured yet. Please add the required values to the .env file.",
      });
      return;
    }

    try {
      setIsSubmitting(true);
      setFormStatus({
        type: "",
        message: "",
      });

      await emailjs.sendForm(
        serviceId,
        templateId,
        contactForm.current,
        {
          publicKey,
        }
      );

      contactForm.current.reset();

      setFormStatus({
        type: "success",
        message:
          "Your message was sent successfully. I will respond as soon as possible.",
      });
    } catch (error) {
      console.error("EmailJS error:", error);

      setFormStatus({
        type: "error",
        message:
          "The message could not be sent. Please try again or contact me through LinkedIn.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="app">
      <header className="navbar">
        <a className="logo" href="#home">
          <span>&lt;</span>
          MEGHA
          <span>/&gt;</span>
        </a>

        <nav className="navLinks" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="navSocials">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="Open Megha's GitHub profile"
          >
            GH
          </a>

          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="Open Megha's LinkedIn profile"
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
              <p className="eyebrow">HELLO, I AM</p>

              <h1>Megha Rana</h1>

              <h2>
                Aspiring <span>Full-Stack Developer</span>
              </h2>

              <p className="heroDescription">
                B.Tech Electronics and Communication Engineering student
                learning the MERN stack and building responsive frontend and
                full-stack web applications.
              </p>

              <div className="heroButtons">
                <a href="#projects" className="primaryButton">
                  Explore My Work
                  <span>↗</span>
                </a>

                <a href="#contact" className="secondaryButton">
                  Contact Me
                </a>

                <a
                  href={`${import.meta.env.BASE_URL}resume.pdf`}
                  className="textButton"
                  download
                >
                  Download Resume
                  <span>↓</span>
                </a>
              </div>

              <div className="availability">
                <span className="availabilityDot" />
                Open to internships, projects and learning opportunities
              </div>
            </div>

            <DeveloperVisual />
          </div>
        </section>

        <section id="about" className="section aboutSection">
          <SectionHeading
            eyebrow="INTRODUCTION"
            title="About Me"
            description="My journey from engineering to full-stack development"
          />

          <div className="aboutLayout">
            <article className="aboutMainCard">
              <p>
                I am pursuing B.Tech in Electronics and Communication
                Engineering at DSEU G.B. Pant. Alongside my degree, I am
                learning modern web development and working towards becoming a
                full-stack developer.
              </p>

              <p>
                My current focus is the MERN stack. I am learning frontend
                development with React, backend development with Node.js and
                Express.js, database integration with MongoDB, REST APIs and
                authentication.
              </p>

              <p>
                I prefer learning through practical projects. My main ongoing
                project is SkillHub, a complete Learning Management System
                designed to help me understand how production applications are
                planned, developed, tested and deployed.
              </p>
            </article>

            <aside className="aboutSide">
              <div className="aboutFact">
                <span>Current role</span>
                <strong>Executive Assistant Intern</strong>
              </div>

              <div className="aboutFact">
                <span>Current focus</span>
                <strong>MERN Stack Development</strong>
              </div>

              <div className="aboutFact">
                <span>Education</span>
                <strong>B.Tech ECE</strong>
              </div>

              <div className="aboutFact">
                <span>Based in</span>
                <strong>Delhi, India</strong>
              </div>
            </aside>
          </div>

          <div className="statsGrid">
            <div>
              <strong>4+</strong>
              <span>Projects</span>
            </div>

            <div>
              <strong>MERN</strong>
              <span>Current Stack</span>
            </div>

            <div>
              <strong>React</strong>
              <span>Frontend Focus</span>
            </div>

            <div>
              <strong>2026</strong>
              <span>Active Learning</span>
            </div>
          </div>
        </section>

        <section id="skills" className="section skillsSection">
          <SectionHeading
            eyebrow="TECHNICAL SKILLS"
            title="Tools & Technologies"
            description="Skills gained through coursework, practice and project development"
          />

          <div className="skillsContainer">
            {skillGroups.map((group) => (
              <article className="skillGroup" key={group.title}>
                <div className="skillGroupHeader">
                  <div>
                    <h3>{group.title}</h3>
                    <p>{group.subtitle}</p>
                  </div>

                  <span>{String(group.skills.length).padStart(2, "0")}</span>
                </div>

                <div className="skillList">
                  {group.skills.map((skill) => (
                    <div className="skillItem" key={skill.name}>
                      <div className="skillIcon">{skill.icon}</div>

                      <div>
                        <strong>{skill.name}</strong>
                        <span>{skill.level}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section capabilitiesSection">
          <SectionHeading
            eyebrow="DEVELOPMENT KNOWLEDGE"
            title="What I Am Learning to Build"
            description="Core concepts required for complete full-stack applications"
          />

          <div className="capabilitiesGrid">
            {capabilities.map((capability) => (
              <article className="capabilityCard" key={capability.number}>
                <span className="capabilityNumber">
                  {capability.number}
                </span>

                <h3>{capability.title}</h3>
                <p>{capability.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section experienceSection">
          <SectionHeading
            eyebrow="PROFESSIONAL JOURNEY"
            title="Experience"
            description="Responsibilities and practical experience outside academic projects"
          />

          <div className="timeline">
            <div className="timelineLine" />

            <article className="timelineCard timelineCardRight">
              <div className="timelineDot">SS</div>

              <div className="timelineCardTop">
                <div>
                  <p className="timelineCompany">Sparkify Social</p>
                  <h3>Executive Assistant Intern</h3>
                </div>

                <span className="currentBadge">Current</span>
              </div>

              <p className="timelineDate">June 2026 – Present</p>

              <p className="timelineDescription">
                Supporting startup operations through recruitment research,
                hiring campaigns, international platform outreach, database
                preparation, communication and task coordination.
              </p>

              <ul className="experiencePoints">
                <li>
                  Researched and used hiring platforms and online communities.
                </li>
                <li>
                  Supported recruitment campaigns for internship and sales
                  roles.
                </li>
                <li>
                  Prepared structured databases and coordinated operational
                  tasks.
                </li>
                <li>
                  Communicated with candidates, community administrators and
                  internal team members.
                </li>
              </ul>

              <div className="technologyTags">
                <span>Research</span>
                <span>Operations</span>
                <span>Recruitment</span>
                <span>Communication</span>
                <span>Coordination</span>
              </div>
            </article>
          </div>
        </section>

        <section id="projects" className="section projectsSection">
          <SectionHeading
            eyebrow="SELECTED WORK"
            title="Projects"
            description="Applications demonstrating my frontend and full-stack development progress"
          />

          <div className="projectGrid">
            {projects.map((project, index) => (
              <article className="projectCard" key={project.title}>
                <div
                  className={`projectVisual ${project.visualClass}`}
                >
                  <div className="projectBrowser">
                    <div className="browserBar">
                      <div>
                        <span />
                        <span />
                        <span />
                      </div>

                      <small>
                        project-{String(index + 1).padStart(2, "0")}
                      </small>
                    </div>

                    <div className="browserContent">
                      <span>{project.visualLabel}</span>
                      <strong>{project.visualHeading}</strong>

                      <div className="mockLines">
                        <i />
                        <i />
                        <i />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="projectContent">
                  <div className="projectTitleRow">
                    <div>
                      <p>{project.category}</p>
                      <h3>{project.title}</h3>
                    </div>

                    <span>0{index + 1}</span>
                  </div>

                  <p className="projectDescription">
                    {project.description}
                  </p>

                  <div className="technologyTags">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>

                  {<div className="projectActions">
  {project.liveUrl && (
    <a
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="projectLink projectLinkPrimary"
    >
      Live Demo
      <span aria-hidden="true">↗</span>
    </a>
  )}

  {project.githubUrl && (
    <a
      href={project.githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="projectLink projectLinkSecondary"
    >
      View Code
      <span aria-hidden="true">↗</span>
    </a>
  )}

  {!project.liveUrl && project.link && (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="projectLink"
    >
      Open Project
      <span aria-hidden="true">↗</span>
    </a>
  )}

  {!project.liveUrl &&
    !project.githubUrl &&
    !project.link && (
      <div className="projectStatus">
        {project.status}
      </div>
    )}
</div>}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="section educationSection">
          <SectionHeading
            eyebrow="ACADEMIC BACKGROUND"
            title="Education"
            description="My academic journey and technical development"
          />

          <div className="educationTimeline">
            <div className="educationLine" />

            <EducationCard
              side="left"
              marker="UG"
              institution="DSEU G.B. Pant"
              title="B.Tech — Electronics and Communication Engineering"
              date="2024 – Present"
              description="Pursuing an engineering degree while developing practical skills in programming, web development, communication and software projects."
              tags={["ECE", "Engineering", "Web Development"]}
            />

            <EducationCard
              side="right"
              marker="12"
              institution="Air Force Bal Bharti School"
              title="Class XII — PCM with Biotechnology"
              date="Completed in 2024"
              description="Completed CBSE senior secondary education with Physics, Chemistry, Mathematics and Biotechnology."
              tags={[
                "Physics",
                "Chemistry",
                "Mathematics",
                "Biotechnology",
              ]}
            />

            <EducationCard
              side="left"
              marker="10"
              institution="Air Force Bal Bharti School"
              title="Class X — CBSE"
              date="Completed in 2022"
              description="Completed CBSE secondary education with a foundation in science, mathematics, languages and social science."
              tags={["CBSE", "Science", "Mathematics", "English"]}
            />
          </div>
        </section>

        <section id="contact" className="section contactSection">
          <SectionHeading
            eyebrow="GET IN TOUCH"
            title="Let’s Connect"
            description="Reach out regarding internships, projects, collaborations or professional opportunities"
          />

          <div className="contactLayout">
            <div className="contactInformation">
              <p>
                Have an opportunity, project idea or question? Complete the
                form and your message will be delivered directly to my email
                inbox.
              </p>

              <div className="contactMethod">
                <span>01</span>

                <div>
                  <small>Email</small>
                  <strong>{EMAIL_ADDRESS}</strong>
                </div>
              </div>

              <div className="contactMethod">
                <span>02</span>

                <div>
                  <small>LinkedIn</small>
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Connect professionally ↗
                  </a>
                </div>
              </div>

              <div className="contactMethod">
                <span>03</span>

                <div>
                  <small>GitHub</small>
                  <a
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View repositories ↗
                  </a>
                </div>
              </div>
            </div>

            <form
              ref={contactForm}
              className="contactForm"
              onSubmit={sendEmail}
            >
              <div className="formRow">
                <label>
                  <span>Name</span>

                  <input
                    type="text"
                    name="from_name"
                    placeholder="Your full name"
                    autoComplete="name"
                    required
                  />
                </label>

                <label>
                  <span>Email</span>

                  <input
                    type="email"
                    name="from_email"
                    placeholder="your@email.com"
                    autoComplete="email"
                    required
                  />
                </label>
              </div>

              <label>
                <span>Subject</span>

                <input
                  type="text"
                  name="subject"
                  placeholder="What would you like to discuss?"
                  required
                />
              </label>

              <label>
                <span>Message</span>

                <textarea
                  name="message"
                  placeholder="Write your message here..."
                  rows="7"
                  required
                />
              </label>

              <input
                type="hidden"
                name="to_email"
                value={EMAIL_ADDRESS}
              />

              <button
                type="submit"
                className="sendButton"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending message..." : "Send Message"}
                <span>↗</span>
              </button>

              {formStatus.message && (
                <p
                  className={`formStatus ${
                    formStatus.type === "success"
                      ? "successStatus"
                      : "errorStatus"
                  }`}
                  role="status"
                >
                  {formStatus.message}
                </p>
              )}
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a href="#home" className="footerLogo">
          <span>&lt;</span>
          MEGHA
          <span>/&gt;</span>
        </a>

        <div className="footerLinks">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footerBottom">
          <p>© 2026 Megha Rana. All rights reserved.</p>

          <div>
            <a href={GITHUB_URL} target="_blank" rel="noreferrer">
              GitHub
            </a>

            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function DeveloperVisual() {
  return (
    <div className="heroVisual" aria-hidden="true">
      <div className="visualGlow" />

      <div className="orbit orbitOuter">
        <span className="orbitDot dotOne" />
        <span className="orbitDot dotTwo" />
      </div>

      <div className="orbit orbitMiddle">
        <span className="orbitDot dotThree" />
      </div>

      <div className="orbit orbitInner" />

      <div className="mainCircle">
        <div className="circleGrid" />

        <div className="circleContent">
          <span className="circleSmallText">DEVELOPER</span>
          <strong>MR</strong>
          <span className="circleDivider" />
          <p>Building with purpose</p>
        </div>
      </div>

      <div className="technologyNode reactNode">React</div>
      <div className="technologyNode nodeNode">Node</div>
      <div className="technologyNode databaseNode">MongoDB</div>
    </div>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="sectionHeading">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      <div className="headingLine" />
      <p>{description}</p>
    </div>
  );
}

function EducationCard({
  side,
  marker,
  institution,
  title,
  date,
  description,
  tags,
}) {
  return (
    <article
      className={`educationCard ${
        side === "left" ? "educationLeft" : "educationRight"
      }`}
    >
      <div className="educationMarker">{marker}</div>

      <p className="educationInstitution">{institution}</p>
      <h3>{title}</h3>
      <p className="educationDate">{date}</p>
      <p className="educationDescription">{description}</p>

      <div className="technologyTags">
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </article>
  );
}

export default App;