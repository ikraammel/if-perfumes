import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faTimes } from "@fortawesome/free-solid-svg-icons";

const ContactPopup = () => {
  // States
  const [isOpen, setIsOpen] = useState(false);
  const [result, setResult] = useState("");
  const [sentSuccess, setSentSuccess] = useState(false);

  // Gestion de l'envoi du formulaire
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Envoi en cours...");

    const formData = new FormData(event.target);
    formData.append("access_key", "477972fa-479a-4ca0-ae89-c6c7dcd519c0");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" }
    });

    const data = await response.json();

    if (data.success) {
      setSentSuccess(true); // Affiche le message de succès
      setResult("");

      setTimeout(() => {
        setSentSuccess(false);
        setIsOpen(false); // Ferme la popup après 3 secondes
        event.target.reset();
      }, 3000);
    } else {
      console.log("Erreur :", data);
      setResult("❌ Erreur lors de l'envoi");
    }
  };

  return (
    <div>
      {/* Bouton flottant pour ouvrir la popup */}
      <div className="fixed bottom-4 left-4 flex justify-center items-center z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-pink-500 w-16 h-16 flex justify-center items-center text-white rounded-full shadow-lg hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400 cursor-pointer"
        >
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </button>
      </div>

      {/* Popup Contact */}
      {isOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-3xl shadow-2xl w-[600px] relative">
            {/* Bouton de fermeture */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
            >
              <FontAwesomeIcon icon={faTimes} size="lg" />
            </button>

            {/* Titre */}
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
              Contactez-nous
            </h2>

            {/* Affichage du message de succès ou du formulaire */}
            {sentSuccess ? (
              <div className="text-center text-green-600 font-semibold text-xl">
                ✅ Votre message a été envoyé avec succès !
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-6">
                {/* Nom */}
                <div>
                  <label className="block text-gray-700 text-lg mb-2">Nom</label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Votre nom"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gray-700 text-lg mb-2">Email</label>
                  <input
                    name="email"
                    type="email"
                    placeholder="Votre email"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-gray-700 text-lg mb-2">Message</label>
                  <textarea
                    name="message"
                    placeholder="Votre message"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                    rows="6"
                  ></textarea>
                </div>

                {/* Bouton Envoyer */}
                <button
                  type="submit"
                  className="w-full bg-pink-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-pink-600 cursor-pointer"
                >
                  {result ? result : "Envoyer"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactPopup;
