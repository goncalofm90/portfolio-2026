import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Contact, ChevronRight } from "lucide-react";
import avatar from "../assets/avatar.jpg";
import { TechStackScroller } from "./ui/tech-stack-scroller";
import { Projects } from "./projects";

export default function Portfolio() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Archivo+Narrow:wght@400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack online shopping experience with cart and checkout",
      tech: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Task Manager",
      description: "Collaborative project management tool for teams",
      tech: ["Vue.js", "Firebase", "Tailwind"],
    },
    {
      title: "Weather App",
      description: "Real-time weather dashboard with location search",
      tech: ["React", "API", "Charts"],
    },
    {
      title: "Portfolio Builder",
      description: "Generate custom developer portfolios",
      tech: ["Next.js", "TypeScript"],
    },
  ];

  return (
    <div
      className="min-h-screen overflow-x-hidden"
      style={{
        backgroundColor: "#0B1120",
        fontFamily: "'Archivo Narrow', sans-serif",
      }}
    >
      {/* NAV */}
      <nav
        style={{ backgroundColor: "rgba(11,17,32,0.85)" }}
        className="border-b border-[#1F2937]"
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-white">GM</div>
          <div className="flex gap-8">
            {["work", "about", "contact"].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className="text-white/80 hover:text-white transition-colors relative group capitalize"
              >
                {id}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1BE7FF] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* GRID TEXTURE */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M40 0H0V40"
                fill="none"
                stroke="#1BE7FF"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* FLOATING SHAPES */}
        <svg className="absolute top-20 left-10 w-24 h-24 opacity-20 animate-floatSlow">
          <polygon
            points="50,0 100,100 0,100"
            fill="none"
            stroke="#6EEB83"
            strokeWidth="2"
          />
        </svg>
        <svg className="absolute bottom-16 right-20 w-20 h-20 opacity-20 animate-float">
          <circle
            cx="50%"
            cy="50%"
            r="40%"
            fill="none"
            stroke="#1BE7FF"
            strokeWidth="2"
          />
        </svg>

        {/* WAVES */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 1440 600"
          fill="none"
        >
          <path
            d="M0 400 C 300 300, 600 500, 900 350 S 1440 450, 1440 450"
            stroke="#1BE7FF"
            strokeWidth="2"
            strokeOpacity="0.15"
          />
          <path
            d="M0 450 C 400 350, 700 550, 1100 400 S 1440 500, 1440 500"
            stroke="#6EEB83"
            strokeWidth="2"
            strokeOpacity="0.15"
          />
        </svg>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative">
          <div
            className={`transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white">
              Gonçalo Mendes
            </h1>
            <p
              className="text-2xl md:text-3xl mb-8"
              style={{ color: "#22D3EE" }}
            >
              Web Developer
            </p>
            <div className="text-lg text-white/80 max-w-xl mb-12 space-y-4">
              <p
                className={`flex items-start transition-all duration-700 delay-100 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
              >
                <ChevronRight className="w-5 h-5 text-[#1BE7FF] mt-1 mr-3 flex-shrink-0" />
                Proficient at building scalable, maintainable, and
                high-performance applications.
              </p>
              <p
                className={`flex items-start transition-all duration-700 delay-200 ${isLoaded ? "opacity-100 translate-x-4" : "opacity-0 -translate-x-4"}`}
              >
                <ChevronRight className="w-5 h-5 text-[#1BE7FF] mt-1 mr-3 flex-shrink-0" />
                Experienced in modern JavaScript ecosystems and in designing
                robust backend systems, APIs, and deployment pipelines.
              </p>
              <p
                className={`flex items-start transition-all duration-700 delay-300 ${isLoaded ? "opacity-100 translate-x-8" : "opacity-0 -translate-x-4"}`}
              >
                <ChevronRight className="w-5 h-5 text-[#1BE7FF] mt-1 mr-3 flex-shrink-0" />
                Focused on clean architecture, efficient debugging, and systems
                design principles to ensure solutions are secure, reliable, and
                optimized for real-world use.
              </p>
            </div>
            <div className="flex gap-3">
              {[
                { icon: Github, link: "https://github.com/goncalofm90" },
                {
                  icon: Linkedin,
                  link: "https://www.linkedin.com/in/goncalo-mendes/",
                },
                { icon: Mail, link: "mailto:goncalofm90@gmail.com" },
                { icon: Contact, link: "/CVGM2026.pdf" },
              ].map(({ icon: Icon, link }, i) => (
                <a
                  key={i}
                  href={link}
                  className="relative group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="absolute inset-0  bg-[#1BE7FF] opacity-0   transition duration-500"></span>
                  <Icon className="relative w-5 h-5 text-white group-hover:text-[#1BE7FF] transition" />
                </a>
              ))}
            </div>
          </div>

          {/* AVATAR */}
          <div
            className={`flex justify-center md:justify-end transition-all duration-1000 delay-300 ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
          >
            <div className="relative w-72 h-72">
              {/* Subtle rotated colored background */}
              <div
                className="absolute inset-0 rotate-6"
                style={{
                  backgroundColor: "#1BE7FF",
                  borderRadius: "4px",
                  opacity: 0.2,
                }}
              />
              {/* Neon glow circle behind */}
              <svg className="absolute -inset-8 w-full h-full blur-3xl opacity-30">
                <circle cx="50%" cy="50%" r="40%" fill="#1BE7FF" />
              </svg>
              <img
                src={avatar}
                alt="Gonçalo Mendes web developer"
                className="relative w-full h-full object-cover shadow-2xl"
                style={{ borderRadius: "4px" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* WAVE DIVIDER */}
      <svg viewBox="0 0 1440 120" className="w-full">
        <path
          d="M0,0 C480,120 960,0 1440,100 L1440,120 L0,120 Z"
          fill="#ffffff"
        />
      </svg>

      {/* PROJECTS */}
      <Projects />

      {/* CONTACT */}
      <section
        id="contact"
        className="py-20 px-6 text-center"
        style={{ backgroundColor: "#0F172A" }}
      >
        <h2 className="text-5xl font-bold mb-6 text-white">
          Let's Work Together
        </h2>

        <a
          href="mailto:hello@goncalomendes.dev"
          className="relative inline-flex items-center justify-center px-12 py-5 text-lg font-semibold overflow-hidden group"
        >
          <span className="absolute inset-0 bg-[#1BE7FF] transition-transform duration-500 group-hover:scale-110"></span>
          <span className="relative flex items-center gap-3 text-[#00241B]">
            Send me an email
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </span>
        </a>
      </section>

      {/* TECH SCROLLER */}
      <div className="fixed bottom-0 left-0 w-full z-50">
        <TechStackScroller size={26} speed={30} />
      </div>
    </div>
  );
}
