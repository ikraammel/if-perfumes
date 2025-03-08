import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faTimes } from "@fortawesome/free-solid-svg-icons";
import "../mediaqueries.css";
const Details = ({element,name,type,placeholder}) => {
  return (
    <div>
        <label className="block text-gray-700 text-lg mb-2">{element}</label>
        <input
        name={name}
        type={type}
        placeholder={placeholder}
        required
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
  </div>
  )
}

export default Details
