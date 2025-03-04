import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'; // Icônes œil pour afficher/masquer le mot de passe

// Composant Navbar (connexion/inscription)
const AuthBar = ({ onLoginClick, onSignupClick }) => {
  return (
    <div className="bg-gradient-to-r from-pink-600 to-pink-500 p-4 text-white shadow-lg">
      <div className="container mx-auto flex justify-center gap-4">
        <button
          id="login"
          onClick={onLoginClick}
          className="bg-white text-pink-500 px-6 py-2 rounded-full font-semibold hover:bg-pink-100 hover:text-pink-600 transition duration-300 transform hover:scale-105 cursor-pointer"
        >
          Connexion
        </button>
        <button
          id="signup"
          onClick={onSignupClick}
          className="bg-white text-pink-500 px-6 py-2 rounded-full font-semibold hover:bg-pink-100 hover:text-pink-600 transition duration-300 transform hover:scale-105 cursor-pointer"
        >
          Inscription
        </button>
      </div>
    </div>
  );
};

// Composant Popup de Connexion
const PopUpConnexion = ({ isOpen, onClose, onSwitchToSignup }) => {
  const [showPassword, setShowPassword] = useState(false); // État pour gérer la visibilité du mot de passe

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-10 rounded-2xl shadow-2xl w-120 relative transform transition-all duration-300 animate-fade-in">
        {/* Bouton de fermeture */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-500 hover:text-gray-700 transition duration-300"
        >
          &times;
        </button>

        {/* Formulaire de connexion */}
        <h2 className="text-4xl font-bold mb-8 text-gray-800 text-center font-serif">Connexion</h2>
        <form className="space-y-8">
          <div>
            <label className="block text-gray-700 font-medium mb-3">Email</label>
            <input
              type="email"
              placeholder="Votre email"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition duration-300"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-3">Mot de passe</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'} // Afficher/masquer le mot de passe
                placeholder="Votre mot de passe"
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition duration-300"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white p-4 rounded-lg font-semibold hover:from-pink-600 hover:to-pink-700 transition duration-300 transform hover:scale-105 cursor-pointer"
          >
            Se connecter
          </button>
        </form>

        {/* Lien pour s'inscrire */}
        <p className="mt-8 text-center text-gray-600">
          Pas encore inscrit ?{' '}
          <span
            onClick={onSwitchToSignup}
            className="text-pink-500 cursor-pointer hover:underline"
          >
            Créer un compte
          </span>
        </p>
      </div>
    </div>
  );
};

// Composant Popup d'Inscription
const PopUpInscription = ({ isOpen, onClose, onSwitchToLogin }) => {
  const [showPassword, setShowPassword] = useState(false); // État pour gérer la visibilité du mot de passe
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // État pour gérer la visibilité de la confirmation du mot de passe

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-10 rounded-2xl shadow-2xl w-120 relative transform transition-all duration-300 animate-fade-in">
        {/* Bouton de fermeture */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-500 hover:text-gray-700 transition duration-300"
        >
          &times;
        </button>

        {/* Formulaire d'inscription */}
        <h2 className="text-4xl font-bold mb-8 text-gray-800 text-center font-serif">Inscription</h2>
        <form className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-3">Nom complet</label>
            <input
              type="text"
              placeholder="Votre nom complet"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition duration-300"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-3">Email</label>
            <input
              type="email"
              placeholder="Votre email"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition duration-300 "
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-3">Mot de passe</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'} // Afficher/masquer le mot de passe
                placeholder="Votre mot de passe"
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition duration-300"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </button>
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-3">Confirmer le mot de passe</label>
            <div className="relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'} // Afficher/masquer le mot de passe de confirmation
                placeholder="Confirmez votre mot de passe"
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition duration-300"
              />
              <button
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white p-4 rounded-lg font-semibold hover:from-pink-600 hover:to-pink-700 transition duration-300 transform hover:scale-105 cursor-pointer"
          >
            S'inscrire
          </button>
        </form>

        {/* Lien pour se connecter */}
        <p className="mt-8 text-center text-gray-600">
          Déjà inscrit ?{' '}
          <span
            onClick={onSwitchToLogin}
            className="text-pink-500 cursor-pointer hover:underline cursor-pointer"
          >
            Se connecter
          </span>
        </p>
      </div>
    </div>
  );
};

// Composant principal App
const App = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  // Fonctions pour ouvrir/fermer les popups
  const handleLoginClick = () => {
    setIsLoginOpen(true);
    setIsSignupOpen(false); // Fermer l'inscription si ouverte
  };

  const handleCloseLogin = () => {
    setIsLoginOpen(false);
  };

  const handleSignupClick = () => {
    setIsSignupOpen(true);
    setIsLoginOpen(false); // Fermer la connexion si ouverte
  };

  const handleCloseSignup = () => {
    setIsSignupOpen(false);
  };

  // Fonctions pour basculer entre les popups
  const handleSwitchToSignup = () => {
    setIsLoginOpen(false);
    setIsSignupOpen(true);
  };

  const handleSwitchToLogin = () => {
    setIsSignupOpen(false);
    setIsLoginOpen(true);
  };

  return (
    <div>
      {/* Barre de connexion/inscription */}
      <AuthBar onLoginClick={handleLoginClick} onSignupClick={handleSignupClick} />

      {/* Popup de connexion */}
      <PopUpConnexion
        isOpen={isLoginOpen}
        onClose={handleCloseLogin}
        onSwitchToSignup={handleSwitchToSignup}
      />

      {/* Popup d'inscription */}
      <PopUpInscription
        isOpen={isSignupOpen}
        onClose={handleCloseSignup}
        onSwitchToLogin={handleSwitchToLogin}
      />
    </div>
  );
};

export default App;