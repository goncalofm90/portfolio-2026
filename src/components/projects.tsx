import { useEffect, useRef, useState } from "react";
import type { SlideData } from "./project-data";

import {
  Foodi3,
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
    { ...MonarchCocktailBar, video: "/videos/funny.mp4" },
    { ...SteveTearle, video: "/videos/portfolio.mp4" },
    { ...HellOnEarth, video: "/videos/hellonearth.mp4" },
    { ...AlexMoraisBass, video: "/videos/bass.mp4" },
    { ...ReelDock, video: "/videos/reeldock.mp4" },
  ];

  return (
    <section id="work" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
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
