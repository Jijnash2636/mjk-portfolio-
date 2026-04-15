import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 pt-4" style={{ height: 'auto' }}>
      <div className="max-w-6xl mx-auto bg-white/80 backdrop-blur-xl rounded-2xl px-5 h-14 flex items-center justify-between shadow-soft border border-gray-100/50">
        <a href="#hero" className="text-lg font-bold tracking-tight text-gray-900">
          MJK<span className="text-blue-400">.</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="px-3.5 py-2 text-sm text-gray-500 hover:text-gray-900 transition-all duration-200 rounded-lg hover:bg-gray-50 hover:-translate-y-0.5">
              {l.label}
            </a>
          ))}

        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden mt-2 mx-auto max-w-6xl bg-white rounded-2xl p-3 shadow-lg border border-gray-100/50 space-y-0.5">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block px-4 py-2.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-colors">
              {l.label}
            </a>
          ))}

        </div>
      )}
    </nav>
  );
};

export default Navbar;
