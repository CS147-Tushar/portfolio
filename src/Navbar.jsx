import { Link } from "react-scroll";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const links = [
        { name: "Home", to: "hero" },
        { name: "Skills", to: "skills" },
        { name: "Projects", to: "projects" },
        { name: "Experience", to: "experience" },
        { name: "Education", to: "education" },
        { name: "Certifications", to: "certifications" },
        { name: "Contact", to: "contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
            <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
                {/* Logo / Name */}
                <h1 className="text-xl font-bold text-blue-600">Tushar Tandekar</h1>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6 font-medium">
                    {links.map((link, idx) => (
                        <li key={idx}>
                            <Link
                                to={link.to}
                                smooth={true}
                                duration={600}
                                offset={-70}
                                className="cursor-pointer hover:text-blue-600 transition"
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-2xl"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <ul className="md:hidden flex flex-col items-center bg-white shadow-md py-6 space-y-4 font-medium">
                    {links.map((link, idx) => (
                        <li key={idx}>
                            <Link
                                to={link.to}
                                smooth={true}
                                duration={600}
                                offset={-70}
                                className="cursor-pointer hover:text-blue-600 transition"
                                onClick={() => setOpen(false)}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
