export function Navbar() {
  return (
    <nav
      style={{ backgroundColor: "rgba(11,17,32)" }}
      className="sticky top-0 z-50 border-b border-[#1F2937]"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-end items-center">
        <div className="flex gap-8">
          {["about", "work", "contact"].map((id) => (
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
  );
}
