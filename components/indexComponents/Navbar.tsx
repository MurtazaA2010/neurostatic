"use client"

import { useState } from "react";
import { Button } from "components/ui/button";
import ScrollReveal from "components/ScrollReveal";
import { Menu, X } from "lucide-react";
import Link from "next/link";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="container mx-auto px-6 py-4">
      <ScrollReveal direction="down">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link href="/"><img src="logo.png" alt="NeuroStatic"  width={"200px"}/></Link>

          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center w-full">
  {/* Centered Links */}
  <div className="flex justify-center flex-grow space-x-8">
    <Link href="/services" className="text-gray-600 hover:text-blue-600 transition-colors">Services</Link>
    <Link href="/case-studies" className="text-gray-600 hover:text-blue-600 transition-colors">Case Studies</Link>
    <Link href="/blogs" className="text-gray-600 hover:text-blue-600 transition-colors">Blogs</Link>
    <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">About</Link>
    <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</Link>

  </div>

  {/* Right-Aligned Button */}
  <div className="ml-auto">
    <Link href="/contact">
    <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
      Let's Talk
    </Button></Link>
  </div>
</div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 flex flex-col space-y-4">
            <Link href="/services" className="text-gray-600 hover:text-blue-600 transition-colors">Services</Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">About</Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</Link>
            <Link href= "/contact">
            <Button className="w-fit bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
              Let's Talk
            </Button></Link>
          </div>
        )}
      </ScrollReveal>
    </nav>
  );
};

export default Navbar;
