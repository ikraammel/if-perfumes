import React, { useState, useEffect, useRef } from "react";
import "./mediaqueries.css";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Fermer le menu lorsque l'utilisateur clique en dehors
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('perf.jpg')" }}
    >
      <nav className="bg-pink-500 p-4 bg-opacity-60">
        <div className="flex justify-between items-center text-white px-6">
          {/* Logo à gauche */}
          <a href="#" className="text-2xl font-bold no-underline text-white flex items-center gap-2.5">
            IF Perfumes
          </a>

          {/* Bouton du menu hamburger */}
          <button
            className="md:hidden text-2xl cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`bx ${isMenuOpen ? "bx-x" : "bx-menu"}`}></i>
          </button>

          {/* Menu à droite */}
          <ul
            ref={menuRef}
            className={`md:flex gap-7 ${isMenuOpen ? "flex flex-col gap-4 absolute top-16 right-4 bg-white p-4 rounded-lg shadow-lg" : "hidden"}`}
          >
            <a href="#accueil" className="flex items-center cursor-pointer">
              <i className="bx bxs-home mr-2"></i> Accueil
            </a>
            <a href="#apropos" className="flex items-center cursor-pointer">
              <i className="bx bxs-info-circle mr-2"></i> À propos
            </a>
            <a href="#parfums" id="openPopupBtn" className="flex items-center cursor-pointer">
              <i className="bx bxs-spray-can mr-2"></i> Parfums
            </a>
            <a href="#login" className="flex items-center cursor-pointer">
              <i className="bx bxs-user mr-2"></i> Connexion
            </a>
            <a href="#signup" className="bg-white text-pink-500 px-4 py-2 rounded-lg flex items-center cursor-pointer">
              <i className="bx bxs-user-plus mr-2"></i> Inscription
            </a>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;