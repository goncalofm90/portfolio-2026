export const Contact = () => {
  return (
    <section className="relative w-full bg-[#0F172A] py-36 px-6 overflow-hidden">
      {/* Background SVG shapes */}
      <svg
        className="absolute top-0 left-0 w-72 h-72 opacity-70 animate-spin-slow"
        viewBox="0 0 200 200"
      >
        <ellipse
          cx="100"
          cy="100"
          rx="80"
          ry="40"
          r="80"
          stroke="#98FBCB"
          strokeWidth="2"
          fill="none"
        />
      </svg>

      <svg
        className="absolute bottom-0 right-0 w-96 h-96 opacity-20 animate-pulse-slow"
        viewBox="0 0 200 200"
      >
        <polyline
          points="50,100 200,0 300,100 100,200"
          fill="none"
          stroke="#6EEB83"
          strokeWidth="1"
        />
      </svg>

      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left: Heading & Text */}
        <div className="text-center md:text-left md:w-1/2">
          <h2 className="text-5xl font-bold text-white mb-6 relative z-10">
            Let's Work Together
          </h2>
          <p className="text-white/80 text-lg md:text-xl relative z-10">
            I'm currently available for freelance projects or collaborations.
            Reach out and let's build something amazing!
          </p>
        </div>

        {/* Right: CTA Button */}
        <div className="md:w-1/2 flex justify-center md:justify-end relative z-10">
          <a
            href="mailto:goncalofm90@gmail.com"
            className="relative inline-flex items-center justify-between w-64 max-w-full px-8 py-5 text-lg font-semibold text-white border-2 border-[#1BE7FF] rounded-lg overflow-hidden group transition-all duration-300"
          >
            {/* Background fill on hover */}
            <span className="absolute inset-0 bg-[#1BE7FF] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>

            {/* Mint-blue glow effect */}
            <span className="absolute inset-0 rounded-lg shadow-[0_0_20px_#98FBCB] opacity-0 group-hover:opacity-50 transition-opacity duration-300"></span>

            {/* Content */}
            <span className="relative flex justify-between items-center w-full">
              <span className="text-white group-hover:text-white transition-colors duration-300">
                Send me an email
              </span>

              {/* Right arrow */}
              <svg
                className="w-5 h-5 text-white group-hover:text-[#00241B] transition-transform duration-300 group-hover:translate-x-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </a>
        </div>
      </div>

      {/* Floating mint-blue particle SVGs */}
      <svg
        className="absolute top-1/3 left-1/4 w-20 h-20 opacity-30 animate-bounce-slow"
        viewBox="0 0 50 50"
      >
        <circle cx="25" cy="25" r="10" fill="#98FBCB" />
      </svg>

      <svg
        className="absolute bottom-1/4 right-1/3 w-28 h-28  animate-bounce-slow delay-200"
        viewBox="0 0 50 50"
      >
        <circle cx="25" cy="25" r="8" fill="#98fbfb" />
      </svg>
    </section>
  );
};
