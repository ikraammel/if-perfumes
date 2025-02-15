import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const OpenPopupButton = () => {

  // Fonction qui ouvre la fenêtre popup
  const openPopup = () => {
    const popupWidth = 800;
    const popupHeight = 600;
    const left = (window.screen.width - popupWidth) / 2;
    const top = (window.screen.height - popupHeight) / 2;

    // Ouvrir la fenêtre popup avec les dimensions et options spécifiées
    window.open(
      'https://ifperfumes.streamlit.app/',  // L'URL de ton application Streamlit
      'PopupParfum', 
      `width=${popupWidth},height=${popupHeight},top=${top},left=${left},resizable=yes,scrollbars=yes`
    );
  };

  return (
    <div className="fixed bottom-4 right-4 flex justify-center items-center z-50">
      <button
        onClick={openPopup}
        className="bg-pink-500 cursor-pointer text-white rounded-full p-4 shadow-lg hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400"
      >
        {/* Icône loupe avec FontAwesome */}
        <FontAwesomeIcon icon={faSearch} size="lg" />
      </button>
    </div>
  );
};

export default OpenPopupButton;
