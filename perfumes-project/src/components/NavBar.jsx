import React from "react";

const NavBar = () => {
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

          {/* Menu à droite */}
          <ul className="flex gap-7">
            <div className="flex gap-6">
              <a href="#accueil" className="hover:text-gray-200 flex items-center">
                <i className="bx bxs-home mr-2"></i> Accueil
              </a>
              <a href="#apropos" className="hover:text-gray-200 flex items-center">
                <i className="bx bxs-info-circle mr-2"></i> À propos
              </a>
              <a href="#parfums" id="openPopupBtn" className="hover:text-gray-200 flex items-center">
                <i className="bx bxs-spray-can mr-2"></i> Parfums
              </a>
              <a href="#contact" className="hover:text-gray-200 flex items-center">
                <i className="bx bxs-phone mr-2"></i> Contact
              </a>
            </div>

            <div className="flex gap-4">
              <a href="#login" className="hover:text-gray-200 flex items-center">
                <i className="bx bxs-user mr-2"></i> Connexion
              </a>
              <a href="#signup" className="bg-white text-pink-500 px-4 py-2 rounded-lg hover:bg-gray-200 flex items-center">
                <i className="bx bxs-user-plus mr-2"></i> Inscription
              </a>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
