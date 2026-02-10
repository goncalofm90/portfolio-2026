import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
  SiPostgresql,
  SiKubernetes,
} from "react-icons/si";

export const TechStackScroller = ({ size = 42, speed = 25 }) => {
  const stackIcons = [
    FaReact,
    FaNodeJs,
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    SiMongodb,
    SiTailwindcss,
    SiTypescript,
    SiVuedotjs,
    SiPostgresql,
    SiKubernetes,
  ];

  // Create three sets for marquee
  const marqueeIcons = [
    { set: 0, icons: stackIcons },
    { set: 1, icons: stackIcons },
    { set: 2, icons: stackIcons },
    { set: 3, icons: stackIcons },
    { set: 4, icons: stackIcons },
    { set: 5, icons: stackIcons },
  ];

  return (
    <div
      style={{ backgroundColor: "#0F172A" }}
      className="py-3 relative overflow-hidden"
    >
      <div
        className="flex animate-marquee relative"
        style={{ gap: "3rem", width: "max-content" }}
      >
        {marqueeIcons.map(({ set, icons }) =>
          icons.map((Icon, idx) => (
            <div key={`${set}-${idx}`} className="relative">
              <Icon
                size={size}
                className="tech-icon text-white/90"
                style={{
                  animationDelay: `${set * 3}s`, // 0s, 3s, 6s per set
                }}
              />
            </div>
          )),
        )}
      </div>

      <div className="text-gray-500 text-xs sm:text-sm text-center w-full mt-1">
        © {new Date().getFullYear()} Gonçalo Mendes
      </div>

      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.333%); }
          }

          .animate-marquee {
            display: flex;
            animation: marquee ${speed}s linear infinite;
          }

          /* TECH ICON GLOW */
          @keyframes techGlow {
            0%, 100% { color: white; text-shadow: 0 0 2px #ffffff; }
            50% { color: #1BE7FF; text-shadow: 0 0 8px #1BE7FF, 0 0 16px #1BE7FF; }
          }

          .tech-icon {
            animation: techGlow 10s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
};
