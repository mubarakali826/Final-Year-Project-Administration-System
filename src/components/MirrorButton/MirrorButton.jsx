import React, { useState } from 'react';
import './MirrorButton.scss';

const MirrorButton = ({ height, width, text, colorScheme, event }) => {
  const black = '#081225';
  const white = '#f0f3f4';

  const bgColor = colorScheme === 'primary' ? white : black;
  const textColor = colorScheme === 'primary' ? black : white;
  const hoverBgColor = textColor;
  const hoverTextColor = bgColor;

  return (
    <button
    onClick={event}
      className="reports-btn p-3 rounded-lg text-sm shadow-lg"
      style={{
        height: `${height}rem`,
        width: `${width}rem`,
        backgroundColor: bgColor,
        color: textColor,
        borderColor: bgColor,
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.color = hoverTextColor;
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.color = textColor;
      }}
    >
      {text}
      <span
        className="hover-bg"
        style={{
          backgroundColor: hoverBgColor,
        }}
      />
    </button>
  );
};

export default MirrorButton;
