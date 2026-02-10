import { useEffect, useRef, useState } from "react";
import type { SlideData } from "./project-data";

import {
  Foodi3,
  VelvetBrew,
  MonarchCocktailBar,
  SteveTearle,
  HellOnEarth,
  AlexMoraisBass,
  ReelDock,
} from "./project-data";

interface ProjectCardProps {
  project: SlideData & { video?: string };
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.25 },
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handleClick = () => {
    window.open(project.url, "_blank");
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className={`
        relative group cursor-pointer overflow-hidden rounded-xl shadow-2xl
        transition-all duration-700 transform
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
      `}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Video */}
      {project.video ? (
        <video
          ref={videoRef}
          src={project.video}
          className="w-full h-80 md:h-96 object-cover"
          muted
          loop
          playsInline
          preload="metadata"
        />
      ) : (
        <img
          src={project.src}
          alt={project.title}
          className="w-full h-80 md:h-96 object-cover"
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition-colors duration-500"></div>

      {/* Text overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 via-black/0 to-transparent flex justify-between items-center">
        <h3 className="text-lg text-white">{project.title}</h3>

        {/* Animated square button */}
        <div className="w-10 h-10 flex justify-center items-center rounded transition-all duration-300 group-hover:bg-[#1BE7FF] group-hover:text-white border border-white text-white">
          <span className="text-lg font-bold">→</span>
        </div>
      </div>
    </div>
  );
};

export const Projects = () => {
  const projects: (SlideData & { video?: string })[] = [
    { ...Foodi3, video: "/videos/test.mp4" },
    { ...VelvetBrew, video: "/videos/velvetbrew.mp4" },
    { ...MonarchCocktailBar, video: "/videos/funny.mp4" },
    { ...SteveTearle, video: "/videos/portfolio.mp4" },
    { ...HellOnEarth, video: "/videos/hellonearth.mp4" },
    { ...AlexMoraisBass, video: "/videos/bass.mp4" },
    { ...ReelDock, video: "/videos/reeldock.mp4" },
  ];

  return (
    <section id="work" className="py-20 px-6 bg-white relative overflow-hidden">
      {/* SVG Background Accents */}

      {/* Floating circles */}
      <svg className="absolute top-10 right-20 w-32 h-32 ">
        <circle
          cx="50%"
          cy="50%"
          r="40%"
          fill="none"
          stroke="#344879"
          strokeWidth="3"
        />
        <circle
          cx="50%"
          cy="50%"
          r="25%"
          fill="none"
          stroke="#1BE7FF"
          strokeWidth="2"
          className="animate-pulse-slow"
        />
      </svg>

      {/* Hexagon */}
      <svg className="absolute  w-24 h-24 animate-spin-slow">
        <polygon
          points="50,5 90,25 90,65 50,85 10,65 10,25"
          fill="none"
          stroke="#1BE7FF"
          strokeWidth="2"
        />
      </svg>

      {/* Wavy lines */}
      <svg
        className="absolute bottom-20 left-20 w-48 h-48 animate-float-slow animate-pulse-slow"
        viewBox="0 0 200 200"
      >
        <path
          d="M20,100 Q60,60 100,100 T180,100"
          fill="none"
          stroke="#6EEB83"
          strokeWidth="2"
        />
        <path
          d="M20,120 Q60,80 100,120 T180,120"
          fill="none"
          stroke="#1BE7FF"
          strokeWidth="2"
        />
      </svg>

      {/* Small dots pattern */}
      <svg className="absolute top-140 right-10 w-20 h-20">
        <circle
          cx="10"
          cy="10"
          r="2"
          fill="#1BE7FF"
          className="animate-float-slow"
        />
        <circle cx="30" cy="10" r="2" fill="#1BE7FF" />
        <circle
          cx="50"
          cy="10"
          r="2"
          fill="#1BE7FF"
          className="animate-float-slow"
        />
        <circle cx="10" cy="30" r="2" fill="#6EEB83" />
        <circle
          cx="30"
          cy="30"
          r="2"
          fill="#6EEB83"
          className="animate-float-slow"
        />
        <circle cx="50" cy="30" r="2" fill="#6EEB83" />
      </svg>

      {/* Star burst */}
      <svg className="absolute bottom-60 left-1/3 w-16 h-16 opacity-[0.08] animate-pulse-slow">
        <line x1="32" y1="8" x2="32" y2="56" stroke="#1BE7FF" strokeWidth="2" />
        <line x1="8" y1="32" x2="56" y2="32" stroke="#1BE7FF" strokeWidth="2" />
        <line
          x1="14"
          y1="14"
          x2="50"
          y2="50"
          stroke="#6EEB83"
          strokeWidth="1.5"
        />
        <line
          x1="50"
          y1="14"
          x2="14"
          y2="50"
          stroke="#6EEB83"
          strokeWidth="1.5"
        />
      </svg>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl mb-12 border-b-2 border-[#1BE7FF] pl-2">
          Selected Work
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
